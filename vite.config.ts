// vite.config.ts
import { defineConfig } from "vite-plus";
import { nitro } from "nitro/vite"; // Change or remove depending on your framework (vue, svelte, etc.)
import react from "@vitejs/plugin-react"; // Change or remove depending on your framework (vue, svelte, etc.)

export default defineConfig({
  plugins: [react(), nitro()],
  server: {
    headers: {
      "Content-Security-Policy":
        "frame-ancestors 'self' https://linked-rentals.com https://*.linked-rentals.com",
    },
  },
  staged: {
    ".{ts,tsx,js,jsx,vue}": ["eslint --fix", "prettier --write"],
    ".{css,scss,sass,less,styl}": ["stylelint --fix", "prettier --write"],
    "*.{json,md,yml,yaml}": ["prettier --write"],
  },
});
