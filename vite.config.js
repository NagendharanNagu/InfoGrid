import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,           // your Vite dev server port
    strictPort: true,     // fail if port is taken
    hmr: {
      protocol: "ws",     // WebSocket protocol
      host: "localhost",  // match your dev server host
    },
  },
})
