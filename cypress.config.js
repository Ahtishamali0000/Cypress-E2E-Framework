const { defineConfig } = require("cypress");

const urls = {
  sauceDemo: 'https://www.saucedemo.com/',
  orangeHRM: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  demoQA: 'https://demoqa.com/'
};

module.exports = defineConfig({

  // view port set by conifig level
  viewportWidth: 1000,
  viewportHeight: 660,
  video: true,

  e2e: {

    // pageLoadTimeout: 10000,

    // chromeWebSecurity: false,

    // "experimentalStudio": true,

    setupNodeEvents(on, config) {

      // You can implement node event listeners here if needed
    },
    env: {
      urls: urls, // Make sure this is correct
    },
  },
});
