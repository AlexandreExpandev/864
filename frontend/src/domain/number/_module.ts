/**
 * @module number
 * @summary Encapsulates all functionality related to number selection and display.
 * @domain functional
 * @dependencies @/core/components, @tanstack/react-query
 * @version 1.0.0
 */

// Domain public exports - Components
export * from './components/NumberSelector';

// Domain public exports - Hooks
export * from './hooks/useNumberList';

// Domain public exports - Services
export * from './services/numberService';

// Domain public exports - Types
export * from './types';

// Module metadata
export const moduleMetadata = {
  name: 'number',
  domain: 'functional',
  version: '1.0.0',
  publicComponents: ['NumberSelector'],
  publicHooks: ['useNumberList'],
  publicServices: ['numberService'],
  dependencies: {
    internal: ['@/core/components', '@/core/lib'],
    external: ['@tanstack/react-query', 'react'],
    domains: [],
  },
  exports: {
    components: ['NumberSelector'],
    hooks: ['useNumberList'],
    services: ['numberService'],
    types: ['NumberData'],
    utils: [],
  },
} as const;
