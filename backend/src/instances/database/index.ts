import sql from 'mssql';
import { config } from '../../config';
import { logger } from '../../utils/logger';

/**
 * @summary
 * Database connection pool singleton
 */
class Database {
  private static instance: Database;
  private pool: sql.ConnectionPool | null = null;

  private constructor() {}

  /**
   * Gets the singleton instance of the database connection
   */
  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  /**
   * Initializes the database connection pool
   */
  public async initialize(): Promise<void> {
    try {
      this.pool = await new sql.ConnectionPool({
        user: config.database.user,
        password: config.database.password,
        server: config.database.host,
        database: config.database.database,
        port: config.database.port,
        options: config.database.options,
        pool: {
          max: 10,
          min: 0,
          idleTimeoutMillis: 30000,
        },
      }).connect();

      logger.info('Database connection pool established');
    } catch (error) {
      logger.error('Failed to establish database connection', { error });
      throw error;
    }
  }

  /**
   * Gets the connection pool
   */
  public getPool(): sql.ConnectionPool {
    if (!this.pool) {
      throw new Error('Database connection pool not initialized');
    }
    return this.pool;
  }

  /**
   * Closes the database connection pool
   */
  public async close(): Promise<void> {
    if (this.pool) {
      await this.pool.close();
      this.pool = null;
      logger.info('Database connection pool closed');
    }
  }
}

export const database = Database.getInstance();
