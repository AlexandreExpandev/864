import sql from 'mssql';
import { database } from './index';
import { logger } from '../../utils/logger';

/**
 * Expected return types for database requests
 */
export enum ExpectedReturn {
  None = 0,   // No result expected (for operations that don't return data)
  Single = 1, // Single record expected
  Multi = 2   // Multiple records expected
}

/**
 * Execute a database request
 * @param routine Stored procedure name
 * @param parameters Parameters for the stored procedure
 * @param expectedReturn Expected return type
 * @param transaction Optional transaction for multi-statement operations
 * @param resultSetNames Optional names for multiple result sets
 */
export async function dbRequest(
  routine: string,
  parameters: Record<string, any>,
  expectedReturn: ExpectedReturn,
  transaction?: sql.Transaction,
  resultSetNames?: string[]
): Promise<any> {
  try {
    const pool = await database.getPool();
    const request = transaction ? transaction.request() : pool.request();

    // Add parameters to request
    Object.entries(parameters).forEach(([key, value]) => {
      request.input(key, value);
    });

    // Execute the stored procedure
    const result = await request.execute(routine);

    // Process result based on expected return type
    switch (expectedReturn) {
      case ExpectedReturn.None:
        return { success: true };
      
      case ExpectedReturn.Single:
        return result.recordset?.[0] || null;
      
      case ExpectedReturn.Multi:
        if (resultSetNames && result.recordsets.length === resultSetNames.length) {
          // Return named result sets
          return resultSetNames.reduce((acc, name, index) => {
            acc[name] = result.recordsets[index];
            return acc;
          }, {} as Record<string, any>);
        }
        // Return all result sets
        return result.recordsets;
    }
  } catch (error) {
    logger.error('Database request failed', {
      routine,
      parameters,
      error
    });
    throw error;
  }
}

/**
 * Begin a new transaction
 */
export async function beginTransaction(): Promise<sql.Transaction> {
  const pool = await database.getPool();
  const transaction = new sql.Transaction(pool);
  await transaction.begin();
  return transaction;
}

/**
 * Commit a transaction
 * @param transaction The transaction to commit
 */
export async function commitTransaction(transaction: sql.Transaction): Promise<void> {
  await transaction.commit();
}

/**
 * Rollback a transaction
 * @param transaction The transaction to rollback
 */
export async function rollbackTransaction(transaction: sql.Transaction): Promise<void> {
  await transaction.rollback();
}
