// Renders news.html to entry.png: full-page shot at deviceScaleFactor 2,
// then fits a square 1024x1024 with cream letterbox and saves a compact PNG.
const { chromium } = require('playwright-core');
const path = require('path');
const fs = require('fs');
const DIR = __dirname;

async function main() {
  const browser = await chromium.launch({
    executablePath: '/root/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome',
    args: ['--no-sandbox', '--use-gl=swiftshader', '--enable-unsafe-swiftshader'],
  });
  const page = await browser.newPage({ viewport: { width: 1650, height: 1650 }, deviceScaleFactor: 2 });
  await page.goto('file://' + path.join(DIR, 'news.html'));
  await page.waitForTimeout(700);
  const h = await page.evaluate(() => document.body.scrollHeight);
  console.log('scrollHeight', h);
  const H = Math.min(Math.max(h, 1650), 1650);
  await page.screenshot({ path: path.join(DIR, 'raw.png'), clip: { x: 0, y: 0, width: 1650, height: H } });
  await browser.close();
  // fit to square 1024, letterbox cream, compact PNG
  const { execSync } = require('child_process');
  execSync(`python3 - <<'EOF'
from PIL import Image
im = Image.open('${DIR}/raw.png').convert('RGB')
w, h = im.size
side = max(w, h)
canvas = Image.new('RGB', (side, side), (245, 239, 224))
canvas.paste(im, ((side - w) // 2, (side - h) // 2))
im2 = canvas.resize((1024, 1024), Image.LANCZOS)
im2.save('${DIR}/entry.png', optimize=True)
EOF`, { stdio: 'inherit' });
  console.log('entry.png bytes:', fs.statSync(path.join(DIR, 'entry.png')).size);
}
main().catch(e => { console.error(e); process.exit(1); });
