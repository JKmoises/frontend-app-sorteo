// vite.config.ts
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [tsconfigPaths()],
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: './vitest.setup.ts',
		alias: {
			"@/*": "./src/*"
		},
	},
});
