/** @type {import('@playwright/test').PlaywrightTestConfig} */
import { devices } from '@playwright/test';

const config = {
  testDir: './e2e',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
  webServer: {
    command: 'php -S 127.0.0.1:8080 e2e/fixtures/index.php',
    url: 'http://127.0.0.1:8080',
    reuseExistingServer: !process.env.CI,
  },
};

export default config;
