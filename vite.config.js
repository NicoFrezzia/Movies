import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_TMDB_API_KEY': JSON.stringify('4f58c0dcb776ef654fc0eaedf64c2949'),
  },
});