const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://demoqa.com/',

    // Lista de hosts visualizadso no log e bloqueados
    blockHosts: [
      '*google-analytics.com',
      '*googlesyndication.com',
      '*doubleclick.net',
      '*googleadservices.com',
      '*google.com',
      '*analytics.google.com',
      '*id5-sync.com',
      '*crwdcntrl.net',
      '*openx.net',
      '*criteo.com',
      '*rubiconproject.com',
      '*stat-rock.com',
      '*flashtalking.com',
      '*ad-score.com',
    ],

    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber());
    },
  },
});