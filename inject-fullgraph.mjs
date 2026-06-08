import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');
const scriptTag = '<script src="./static/fullgraph.js" type="text/javascript"></script>';

// Walk all HTML files in public/
function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.name.endsWith('.html')) {
      inject(fullPath);
    }
  }
}

function inject(filePath) {
  let html = fs.readFileSync(filePath, 'utf-8');
  // Only inject if not already present
  if (html.includes('fullgraph.js')) return;
  html = html.replace('</body>', scriptTag + '\n</body>');
  fs.writeFileSync(filePath, html);
}

walkDir(publicDir);
console.log('Full-page graph injected into all HTML files');
