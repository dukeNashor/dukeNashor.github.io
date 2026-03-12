import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "./",
  build: {
    target: "es2020",
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        install: resolve(__dirname, "install/index.html"),
        privacy: resolve(__dirname, "privacy/index.html"),
        faq: resolve(__dirname, "faq/index.html"),
        changelog: resolve(__dirname, "changelog/index.html"),
        enHome: resolve(__dirname, "en/index.html"),
        enInstall: resolve(__dirname, "en/install/index.html"),
        enPrivacy: resolve(__dirname, "en/privacy/index.html"),
        enFaq: resolve(__dirname, "en/faq/index.html"),
        enChangelog: resolve(__dirname, "en/changelog/index.html"),
      },
    },
  },
});