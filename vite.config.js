import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Movies/", // Now GitHub Pages will serve from the main branch root
});