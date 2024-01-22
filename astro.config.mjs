import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: cloudflare(),
  image: {
    // Example: Enable the Sharp-based image service with a custom config
    service: {
       entrypoint: 'astro/assets/services/sharp',
       config: {
         limitInputPixels: false,
      },
     },
  }
});