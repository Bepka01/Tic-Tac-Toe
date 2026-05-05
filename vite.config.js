import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Tic-Tac-Toe/',

  root: '.',

  server: {
    open: true,
    port: 5173,
  },

  build: {
    outDir: 'dist',
  },
});
