/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173,
	},
	testDir: 'tests/e2e',
	testMatch: /(.+\.)(test|spec)\.[jt]s/,
	outputDir: 'tests/e2e/results',
}

export default config
