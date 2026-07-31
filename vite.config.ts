import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      // Use relative paths so the site works under /<repo>/ on GitHub Pages
      base: './',
      server: {
        port: 3000,
        host: '0.0.0.0',
        watch: {
          // Polling avoids exhausting Linux inotify watchers when the editor
          // and Astro's parallel build watcher are running at the same time.
          usePolling: true,
          interval: 1000,
          ignored: [
            '**/blog-astro/node_modules/**',
            '**/blog-astro/.astro/**',
            '**/dist/**'
          ]
        }
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
