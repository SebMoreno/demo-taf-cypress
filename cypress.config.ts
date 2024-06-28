import { defineConfig } from "cypress";

export default defineConfig({
    video: false,
    e2e: {
        experimentalRunAllSpecs: true,
        supportFile: "cypress/support/index.ts",
        specPattern: "cypress/e2e/**/*.test.ts"
    }
});