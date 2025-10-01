import sql from 'mssql';
import { database } from '../instances/database';
import { logger } from './logger';

/**
 * @enum ExpectedReturn
 * @description Defines the expected return type from a database request
 */
export enum ExpectedReturn {
  None = 0, // No result expected
  Single = 1, // Single record expected
  Multi = 2, // Multiple records expected
}

/**
 * @summary
 * Executes a database request using stored procedures
 *
 * @function dbRequest
 * @param {string} routine - The stored procedure name
 * @param {object} parameters - The parameters to pass to the stored procedure
 * @param {ExpectedReturn} expectedReturn - The expected return type
 * @param {sql.Transaction} transaction - Optional transaction for the request
 * @param {string[]} resultSetNames - Optional names for multiple result sets
 * @returns {Promise<any>} The result of the database request
 */
export async function dbRequest(
  routine: string,
  parameters: any = {},
  expectedReturn: ExpectedReturn = ExpectedReturn.None,
  transaction?: sql.Transaction,
  resultSetNames?: string[]
): Promise<any> {
  try {
    const pool = database.getPool();
    const request = transaction ? transaction.request() : pool.request();

    // Add parameters to the request
    Object.entries(parameters).forEach(([key, value]) => {
      request.input(key, value);
    });

    // Execute the stored procedure
    const result = await request.execute(routine);

    // Process the result based on the expected return type
    switch (expectedReturn) {
      case ExpectedReturn.None:
        return true;
      case ExpectedReturn.Single:
        return result.recordset && result.recordset.length > 0 ? result.recordset[0] : null;
      case ExpectedReturn.Multi:
        if (resultSetNames && result.recordsets.length === resultSetNames.length) {
          // Return named result sets if names are provided
          const namedResults: any = {};
          resultSetNames.forEach((name, index) => {
            namedResults[name] = result.recordsets[index];
          });
          return namedResults;
        }
        return result.recordsets;
      default:
        return result;
    }
  } catch (error) {
    logger.error('Database request failed', { routine, parameters, error });
    throw error;
  }
}

/**
 * @summary
 * Begins a new database transaction
 *
 * @function beginTransaction
 * @returns {Promise<sql.Transaction>} The created transaction
 */
export async function beginTransaction(): Promise<sql.Transaction> {
  try {
    const pool = database.getPool();
    const transaction = new sql.Transaction(pool);
    await transaction.begin();
    return transaction;
  } catch (error) {
    logger.error('Failed to begin transaction', { error });
    throw error;
  }
}

/**
 * @summary
 * Commits a database transaction
 *
 * @function commitTransaction
 * @param {sql.Transaction} transaction - The transaction to commit
 * @returns {Promise<void>}
 */
export async function commitTransaction(transaction: sql.Transaction): Promise<void> {
  try {
    await transaction.commit();
  } catch (error) {
    logger.error('Failed to commit transaction', { error });
    throw error;
  }
}

/**
 * @summary
 * Rolls back a database transaction
 *
 * @function rollbackTransaction
 * @param {sql.Transaction} transaction - The transaction to roll back
 * @returns {Promise<void>}
 */
export async function rollbackTransaction(transaction: sql.Transaction): Promise<void> {
  try {
    await transaction.rollback();
  } catch (error) {
    logger.error('Failed to rollback transaction', { error });
    // We don't throw here as this is typically called in a catch block
  }
}
