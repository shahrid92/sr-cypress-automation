const { defineConfig } = require("cypress");
const { cloudPlugin } = require("cypress-cloud/plugin");
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  retries: 1, 
  video: false,
  reporterOptions: {
    charts: true,
    reportPagetitle: 'orangeHRM-practice',
    embeddedScreenshots: true,
    inlineAssests: true,
    saveAllAttempts: true,
    reportDir: 'reports/orangeHRM',
    overwrite: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);
      return cloudPlugin(on, config);
    },
    testIsolation: true
  },
  env: {
    // Require for grepTags
    grepFilterSpecs: true,
    grepOmitFiltered: true,
    BaseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  }
});
