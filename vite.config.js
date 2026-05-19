import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const pagesBase = '/portfolio/';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? pagesBase : '/',
  plugins: [react()],
  server: {
    port: 5173,
    host: '127.0.0.1',
  },
}));
