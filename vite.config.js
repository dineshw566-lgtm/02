import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "node:path"

// Standard React + Vite configuration
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  server: {
    port: parseInt(process.env.PORT || "5173"),
    host: true,
  },
  preview: {
    port: parseInt(process.env.PORT || "4173"),
    host: true,
  },
})
