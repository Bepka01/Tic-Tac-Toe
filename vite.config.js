import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',

  server: {
    open: true,
    port: 5173,
  },

  build: {
    outDir: 'dist',
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/scss/variables.scss" as *;`,
      },
    },
  },
});
