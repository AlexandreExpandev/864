/**
 * @module number
 * @summary Manages all functionality related to numbers, including fetching and displaying them.
 * @domain functional
 * @dependencies @/core/lib/api, @tanstack/react-query
 * @version 1.1.0
 * @author Artemis
 * @lastModified 2024-05-22
 */

// Domain public exports - Components
export * from './components';

// Domain public exports - Hooks
export * from './hooks';

// Domain public exports - Services
export * from './services';

// Domain public exports - Types
export * from './types';

// Domain public exports - Utils
export * from './utils';

// Module metadata
export const moduleMetadata = {
  name: 'number',
  domain: 'functional',
  version: '1.1.0',
  publicComponents: ['NumberSelector', 'SelectedNumberDisplay'],
  publicHooks: ['useNumbers'],
  publicServices: ['numberService'],
  dependencies: {
    internal: ['@/core/lib/api', '@/core/types', '@/core/utils'],
    external: ['@tanstack/react-query', 'react'],
    domains: [],
  },
  exports: {
    components: ['NumberSelector', 'SelectedNumberDisplay'],
    hooks: ['useNumbers'],
    services: ['numberService'],
    types: ['NumberItem'],
    utils: ['convertNumberToText'],
  },
} as const;
