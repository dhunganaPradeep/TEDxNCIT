import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://dhunganapradeep.github.io",
  base: "/TEDxNCIT",

  image: {
    domains: ["images.unsplash.com"],
  },

  prefetch: true,

  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "en",
      },
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
    react(),
  ],

  output: "static",

  experimental: {
    clientPrerender: true,
    directRenderScript: true,
  },
});
