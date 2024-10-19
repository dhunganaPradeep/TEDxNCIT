import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://tedx.ncit.edu.np/",
  image: {
    domains: ["images.unsplash.com"]
  },
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "fr"],
  //   fallback: {
  //     fr: "en",
  //   },
  //   routing: {
  //     prefixDefaultLocale: false,
  //   },
  // },
  prefetch: true,
  integrations: [tailwind(), sitemap({
    i18n: {
      defaultLocale: "en",
    }
  }),  compressor({
    gzip: false,
    brotli: true
  }), react()],
  output: "static",
  experimental: {
    clientPrerender: true,
    directRenderScript: true
  }
});