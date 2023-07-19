import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkMermaid from "astro-diagram/remark-mermaid";

// https://astro.build/config
export default defineConfig({
  site: "https://LouisCassany.github.io",
  base: "/wiki",
  integrations: [
    starlight({
      title: "Git ressources",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Git introduction",
          items: [
            { label: "Git basics", link: "git/git_basics" },
            { label: "Merge conflicts", link: "git/merge_conflicts" },
            { label: "Remotes", link: "git/remotes" },
            { label: "Setup", link: "git/setup" },
            { label: "References", link: "git/references" },
            { label: "Git commands", link: "git/commands" },
          ],
        },
      ],
    }),
  ],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
