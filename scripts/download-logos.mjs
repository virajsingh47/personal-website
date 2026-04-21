import https from 'https';
import fs from 'fs';
import path from 'path';

const logos = [
  { name: 'reach-capital', url: 'https://logo.clearbit.com/reachcapital.com' },
  { name: 'avataar',       url: 'https://logo.clearbit.com/avataar.me' },
  { name: 'bain',          url: 'https://logo.clearbit.com/bain.com' },
  { name: 'breakthrough',  url: 'https://logo.clearbit.com/breakthroughcollaborative.org' },
  { name: 'enphase',       url: 'https://logo.clearbit.com/enphase.com' },
  { name: 'stanford-gsb',  url: 'https://logo.clearbit.com/gsb.stanford.edu' },
  { name: 'pomona',        url: 'https://logo.clearbit.com/pomona.edu' },
  { name: 'bbbs',          url: 'https://logo.clearbit.com/bbbs.org' },
  { name: 'upchieve',      url: 'https://logo.clearbit.com/upchieve.org' },
];

const outDir = path.join(process.cwd(), 'public', 'logos');

function download(name, url) {
  return new Promise((resolve) => {
    const dest = path.join(outDir, `${name}.png`);
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        download(name, res.headers.location).then(resolve);
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        const size = fs.statSync(dest).size;
        console.log(`✓ ${name} (${size} bytes)`);
        resolve();
      });
    }).on('error', (e) => {
      console.log(`✗ ${name}: ${e.message}`);
      resolve();
    });
  });
}

for (const { name, url } of logos) {
  await download(name, url);
}

console.log('\nDone. Now run: git add public/logos && git commit -m "Add logos" && git push');
