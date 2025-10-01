/**
 * @summary
 * Configuration settings for the application
 */
export const config = {
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '1433'),
    user: process.env.DB_USER || 'sa',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'lista_inteiros',
    options: {
      encrypt: process.env.DB_ENCRYPT === 'true',
      trustServerCertificate: process.env.NODE_ENV === 'development',
    },
  },
  api: {
    port: parseInt(process.env.PORT || '3000'),
    cors: {
      origin: process.env.CORS_ORIGIN || '*',
      credentials: true,
    },
  },
  security: {
    jwtSecret: (process.env.JWT_SECRET || 'lista-inteiros-secret-key') as string,
    jwtExpiration: (process.env.JWT_EXPIRATION || '24h') as string,
  },
  logging: {
    level: process.env.LOG_LEVEL || 'info',
  },
};
