// Builds the static site into ./dist. No dependencies: runs on the Node.js that GitHub Actions provides.
// Copies ./src to ./dist and fills in the %SITE_URL% and %BASE_PATH% placeholders.
//
//   SITE_URL  full address of the site, e.g. https://babatundeawo.github.io/naija-monopoly (no trailing slash)
//   BASE_PATH path the site is served from, e.g. /naija-monopoly (empty for a custom domain)
import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'src');
const out = join(root, 'dist');

const trim = (v) => (v || '').replace(/\/+$/, '');
const SITE_URL = trim(process.env.SITE_URL) || 'https://babatundeawo.github.io/naija-monopoly';
const BASE_PATH = process.env.BASE_PATH !== undefined ? trim(process.env.BASE_PATH) : new URL(SITE_URL).pathname.replace(/\/+$/, '');
const TEXT = new Set(['.html', '.xml', '.txt', '.webmanifest', '.js', '.css', '.json']);

async function* walk(dir) {
  for (const name of await readdir(dir)) {
    const full = join(dir, name);
    if ((await stat(full)).isDirectory()) yield* walk(full);
    else yield full;
  }
}

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(src, out, { recursive: true });

let filled = 0;
for await (const file of walk(out)) {
  if (!TEXT.has(extname(file))) continue;
  const before = await readFile(file, 'utf8');
  const after = before.replaceAll('%SITE_URL%', SITE_URL).replaceAll('%BASE_PATH%', BASE_PATH);
  if (after !== before) { await writeFile(file, after); filled++; }
}
await writeFile(join(out, '.nojekyll'), '');
console.log(`Built site to dist/ (${filled} files updated). SITE_URL=${SITE_URL} BASE_PATH="${BASE_PATH}"`);
