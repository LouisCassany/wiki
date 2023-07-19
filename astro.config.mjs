import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkMermaid from "astro-diagram/remark-mermaid";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Git ressources",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Git introduction",
          autogenerate: { directory: "git" },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
