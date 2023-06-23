const {defineConfig} = require("cypress");

module.exports = defineConfig({
    screenshotsFolder: "results/screenshots",
    downloadsFolder: "results/downloads",
    videosFolder: "results/videos",
    video: false,
    reporter: "mochawesome",
    reporterOptions: {
        reportDir: "results/json",
        overwrite: false,
        html: false
    },
    e2e: {
        baseUrl: "https://www.google.com",
        specPattern: "cypress/tests/**/*.test.ts",
        experimentalRunAllSpecs: true
    }
});
