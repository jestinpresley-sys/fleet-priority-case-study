const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const ASSETS = path.join(ROOT, 'assets');
const SCREENSHOTS = path.join(ASSETS, 'screenshots');

const template = fs.readFileSync(path.join(__dirname, 'case-study-template.html'), 'utf8');

function b64(filePath) {
  return fs.readFileSync(filePath).toString('base64');
}

const fontB64 = b64(path.join(ASSETS, 'oswald-variable.ttf'));

const images = {
  IMG_01: '01-dashboard.png',
  IMG_02: '02-vehicle-modal.png',
  IMG_03: '03-inspection-detail.png',
  IMG_04: '04-new-inspection-flow.png',
  IMG_05: '05-overview-report.png',
  IMG_06: '06-settings.png',
  IMG_07: '07-notifications.png',
};

let out = template.replace('__FONT_B64__', fontB64);

for (const [key, file] of Object.entries(images)) {
  const dataUri = `data:image/png;base64,${b64(path.join(SCREENSHOTS, file))}`;
  out = out.split(`__${key}__`).join(dataUri);
}

const outPath = path.join(ROOT, 'index.html');
fs.writeFileSync(outPath, out);
console.log('Wrote', outPath, (fs.statSync(outPath).size / 1024 / 1024).toFixed(2), 'MB');
