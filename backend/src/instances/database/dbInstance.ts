/**
 * @summary
 * Database connection instance and utility functions
 */
import sql from 'mssql';
import { config } from '../../config';
import { logger } from '../../utils/logger/loggerUtils';

// SQL Server connection pool
let pool: sql.ConnectionPool;

/**
 * Initialize the database connection pool
 */
export async function initializeDatabase(): Promise<void> {
  try {
    pool = await new sql.ConnectionPool(config.database).connect();
    logger.info('Database connection established');
  } catch (error) {
    logger.error('Failed to connect to database', { error });
    throw error;
  }
}

/**
 * Get the database connection pool
 */
export function getPool(): sql.ConnectionPool {
  if (!pool) {
    throw new Error('Database connection not initialized');
  }
  return pool;
}

/**
 * Close the database connection pool
 */
export async function closeDatabase(): Promise<void> {
  if (pool) {
    await pool.close();
    logger.info('Database connection closed');
  }
}

/**
 * Expected return types for database operations
 */
export enum ExpectedReturn {
  None = 0, // No result expected
  Single = 1, // Single record expected
  Multi = 2, // Multiple records expected
}

/**
 * Execute a database request
 * @param routine Stored procedure name
 * @param parameters Parameters for the stored procedure
 * @param expectedReturn Expected return type
 * @param transaction Optional transaction
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
        return null;
      case ExpectedReturn.Single:
        return result.recordset?.[0] || null;
      case ExpectedReturn.Multi:
        if (resultSetNames && resultSetNames.length > 0) {
          // Return named result sets
          const namedResults: Record<string, any> = {};
          result.recordsets.forEach((recordset, index) => {
            if (index < resultSetNames.length) {
              namedResults[resultSetNames[index]] = recordset;
            }
          });
          return namedResults;
        }
        // Return all result sets
        return result.recordsets;
      default:
        return null;
    }
  } catch (error) {
    logger.error('Database request failed', { routine, error });
    throw error;
  }
}

/**
 * Begin a new transaction
 */
export async function beginTransaction(): Promise<sql.Transaction> {
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
