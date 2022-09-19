import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";

import netlify from "@astrojs/netlify/edge-functions";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown({
    config: { forward: ['dataLayer.push'] },
  })],
  output: "server",
  adapter: netlify()
});
