// src/index.ts
import './assets/main.css';

// Import your components
import MySharedComponent from './components/MySharedComponent.vue';
import UButton from './components/UButton.vue';

// Export them for library consumption
export {
  MySharedComponent,
  UButton
};

// You can also export other things like types, utils, etc.
// export * from './types';
// export * from './utils';
