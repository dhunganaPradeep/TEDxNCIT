import fs from 'node:fs/promises';
import { globby } from 'globby';
import { minify } from 'html-minifier-terser';

const path = './dist';  // Default Astro output directory for static files
const files = await globby(`${path}/**/*.html`);

await Promise.all(
    files.map(async (file) => {
        console.log('Processing file:', file);
        let html = await fs.readFile(file, 'utf-8');

        // Minify the HTML
        html = await minify(html, {
            removeComments: true,
            preserveLineBreaks: true,
            collapseWhitespace: true,
            minifyJS: true,
        });

        await fs.writeFile(file, html);
    })
);
