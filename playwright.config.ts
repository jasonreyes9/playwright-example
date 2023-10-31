import { defineConfig, devices } from '@playwright/test';


require('dotenv').config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  // Fail the build on CI if you accidentally left test.only in the source code. 
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI ? 'blob' : 'html',
  
  use: {
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

});
