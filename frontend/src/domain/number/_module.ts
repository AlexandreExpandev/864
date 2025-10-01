/**
 * @module number
 * @summary Manages all functionality related to numbers, including fetching and displaying them.
 * @domain functional
 * @dependencies @/core/lib/api, @tanstack/react-query
 * @version 1.0.0
 * @author Artemis
 * @lastModified 2024-05-21
 */

// Domain public exports - Hooks
export * from './hooks';

// Domain public exports - Services
export * from './services';

// Domain public exports - Types
export * from './types';

// Module metadata
export const moduleMetadata = {
  name: 'number',
  domain: 'functional',
  version: '1.0.0',
  publicComponents: [],
  publicHooks: ['useNumbers'],
  publicServices: ['numberService'],
  dependencies: {
    internal: ['@/core/lib/api', '@/core/types'],
    external: ['@tanstack/react-query'],
    domains: []
  },
  exports: {
    components: [],
    hooks: ['useNumbers'],
    services: ['numberService'],
    types: ['NumberItem'],
    utils: []
  }
} as const;
