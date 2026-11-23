// THE SATURDAY HERALD — one-day news poster generator.
// Reads the story data and writes the poster HTML (news.html) next to this file.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import buildHTML from './page.mjs';
import DATA from './data.mjs';

const dir = path.dirname(fileURLToPath(import.meta.url));
const html = buildHTML(DATA);
fs.writeFileSync(path.join(dir, 'news.html'), html);
console.log('news.html written', html.length);
