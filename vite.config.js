import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'Movies', // Set the correct GitHub Pages path
  define: {
    'import.meta.env.VITE_TMDB_API_KEY': JSON.stringify('YOUR_TMDB_API_KEY_HERE'),
  },
});