# Vue Component Library

A modern Vue 3 component library built with Vite, TypeScript, and Nuxt UI.

## Features

- Built with Vue 3 and TypeScript
- Uses Vite for fast development and builds
- Integrates with Nuxt UI components
- Tailwind CSS for styling
- Fully typed components
- Vue 3 Composition API support

## Installation

```bash
# Using npm
npm install your-package-name

# Using yarn
yarn add your-package-name

# Using pnpm
pnpm add your-package-name
```

## Usage

### Global Installation

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import VueComponentPackage from 'your-package-name';
import 'your-package-name/dist/style.css'; // Import styles

const app = createApp(App);
app.use(VueComponentPackage);
app.mount('#app');
```

### Individual Components

```vue
<template>
  <HelloWorld msg="Welcome to Vue Component Library" />
</template>

<script setup>
import { HelloWorld } from 'your-package-name';
</script>
```

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm dev
   ```
4. Build the library:
   ```bash
   pnpm build
   ```

## Building for Production

To build the library for production:

```bash
pnpm build
```

This will generate:
- `dist/vue-component-package.es.js` - ES Module bundle
- `dist/vue-component-package.umd.js` - UMD bundle
- `dist/style.css` - Combined CSS styles

## Publishing

1. Update the version in `package.json`
2. Build the library
3. Publish to npm:
   ```bash
   npm publish
   ```

## License

MIT
