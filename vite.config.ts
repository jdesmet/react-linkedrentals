// vite.config.ts
import { defineConfig } from 'vite-plus';
import { nitro } from 'nitro/vite'; // Change or remove depending on your framework (vue, svelte, etc.)
import react from '@vitejs/plugin-react'; // Change or remove depending on your framework (vue, svelte, etc.)

export default defineConfig({
	plugins: [react(), nitro()],
	server: {
		headers: {
			'Content-Security-Policy':
				"frame-ancestors 'self' https://linked-rentals.com https://*.linked-rentals.com",
		},
	},
	nitro: {
		preset: 'cloudflare-module',
		serverDir: 'routes',
	},

	// Note: there is also the following two settings in .vscode/settings.json, which is used by VSCode
	//   * editor.codeActionsOnSave
	//   * editor.formatOnSaveMode
	//   * editor.codeActionsOnSave
	// They are used by VSCode to run code actions on save. This is separate from the "staged" configuration
	// below, which is used by the "vp" CLI tool to run code actions on staged files before committing.
	staged: {
		// Runs both Oxfmt and Oxlint
		'*': 'vp check --fix',

		//  ".{ts,tsx,js,jsx,vue}": ["eslint --fix", "vp fmt --write --no-error-on-unmatched-pattern"],
		//  ".{css,scss,sass,less,styl}": [
		//    "stylelint --fix",
		//    "vp fmt --write --no-error-on-unmatched-pattern",
		//  ],
		//  "*.{json,md,yml,yaml}": ["vp fmt --write --no-error-on-unmatched-pattern"],
	},

	fmt: {
		singleQuote: true,
		semi: true,
		trailingComma: 'all',
		tabWidth: 2,
		expandTabs: true,
		tabStop: 2,
		useTabs: true,
	},
});
