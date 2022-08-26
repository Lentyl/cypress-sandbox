const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    //viewportWidth: 1024,
    //viewportHeight: 768,
    defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {
      // baseUrl missing, https://docs.cypress.io/guides/references/configuration#Configuration-File
      // implement node event listeners here
    },
  },
});
