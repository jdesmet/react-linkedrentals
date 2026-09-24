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
  nitro: {
    preset: "cloudflare-module",
    serverDir: "routes",
  },
  staged: {
    ".{ts,tsx,js,jsx,vue}": ["eslint --fix", "vp fmt --write"],
    ".{css,scss,sass,less,styl}": ["stylelint --fix", "vp fmt --write"],
    "*.{json,md,yml,yaml}": ["vp fmt --write"],
  },
  fmt: {
    singleQuote: true,
    semi: true,
    trailingComma: "all",
  },
});
