import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
      plugins: [react()],
      server: {
        proxy: {
          '/api': {
            target: 'http://localhost:3000', // Replace with your API server URL
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
          },
        },
      },
      optimizeDeps: {
        exclude: ['lucide-react'],
      },
    });