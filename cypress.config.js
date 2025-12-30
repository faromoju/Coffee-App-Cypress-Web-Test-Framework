import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    cypressMochawesomeReporterReporterOptions: {
      reportDir: 'cypress/reports',
      charts: true,
      reportPageTitle: 'QA Automation Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/results/test-results-[hash].xml',
      toConsole: true,
      outputs: true,
      stdoutTitle: true,
      testCaseSwitchClassnameAndName: true,
      attachments: true,
      antMode: true,
      antXmlReport: true,
      testsuitesTitle: true,
      rootSuiteTitle: 'Cypress Tests',
      attachmentsConfig: {
        screenshotDirectory: 'cypress/screenshots'
      }
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      const mochawesome = require('cypress-mochawesome-reporter/plugin');
      mochawesome(on);

      return config;
    },
    baseUrl: 'https://coffee-cart.app/',
    watchForFileChanges: false,
    screenshotOnRunFailure: true,
    testIsolation: false,
    retries: {
      runMode: 2,
      openMode: 1
    }
  },
});