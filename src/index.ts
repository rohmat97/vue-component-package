// Export components
export { default as HelloWorld } from './components/HelloWorld.vue';

// Export the plugin
export { default as NuxtUIPlugin } from './plugins/nuxt-ui';

// Export types
export type { NuxtUIPluginOptions } from './plugins/nuxt-ui';

// Export all components
export * from './plugins/nuxt-ui';

// Default export for the library
const VueComponentPackage = {
  install(app: import('vue').App, options?: any) {
    app.use(NuxtUIPlugin, options);
  }
};

export default VueComponentPackage;
