import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true
    },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://coffee-cart.app/',
    watchForFileChanges: false,
    screenshotOnRunFailure: true,
    testIsolation: false,
    retries: {
      runMode: 2,
      openMode: 1
    }
  }
});