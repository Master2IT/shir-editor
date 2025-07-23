// Export the original components (for backward compatibility)
export { default as Provider } from './components/provider';

// Export the new modular components
export { default as Editor } from './components/editor';
export { default as Toolbar } from './components/toolbar';

// Export all modules and utilities
export * from './components/modules';

// Export types
export * from './types';

// Export utilities
export * from './utils/to-html';
export * from './utils/to-json';