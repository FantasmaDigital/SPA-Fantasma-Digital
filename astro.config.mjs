// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import AstroPWA from "@vite-pwa/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://fantasmadigital.dev/",
  vite: {
    plugins: [/** @type {any} */ (tailwindcss())],
  },

  integrations: [
    sitemap(),
    AstroPWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Fantasma Digital",
        short_name: "Fantasma",
        description:
          "Agencia de Software y Soluciones Digitales en El Salvador",
        theme_color: "#040406",
        background_color: "#040406",
        display: "standalone",
        icons: [
          {
            src: "/logo-blanco.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/logo-blanco.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        navigateFallback: "/",
        globPatterns: ["**/*.{js,css,html,svg,png,jpg,jpeg,webp}"],
        maximumFileSizeToCacheInBytes: 5000000,
      },
    }),
  ],
});
