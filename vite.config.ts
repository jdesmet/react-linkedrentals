// vite.config.ts
import { defineConfig } from 'vite'
import { cloudflare } from "@cloudflare/vite-plugin";
import react from '@vitejs/plugin-react' // Change or remove depending on your framework (vue, svelte, etc.)

export default defineConfig({
  plugins: [react(),cloudflare()],
  server: {
    headers: {
      'Content-Security-Policy': "frame-ancestors 'self' https://linked-rentals.com https://*.linked-rentals.com",
    },
  },
})
;

