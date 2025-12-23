import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
      jsxImportSource: "@emotion/react",
    }),
    tsconfigPaths(),
    VitePWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "icon/*.png"],
      manifest: false,
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,ico,json}"],
        maximumFileSizeToCacheInBytes: 8 * 1024 * 1024, // 필수 x
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
