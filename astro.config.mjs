// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { satteri } from '@astrojs/markdown-satteri';

// https://astro.build/config
export default defineConfig({
    integrations: [mdx()],
    site: "https://fknil.pages.dev",
    server: {
        port: 4321,
        host: true,
    },
    markdown: {
        processor: satteri({features: { directive: true }}),
    },
});
