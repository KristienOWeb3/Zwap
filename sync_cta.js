const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');

// 1. .ctas-sec CSS
code = code.replace(
  '.ctas-sec{background:var(--w);',
  '.ctas-sec{background:linear-gradient(180deg, #000000 0%, #111111 50%, #000000 100%);'
);

// 2. .ctat CSS
code = code.replace(
  '.ctat{font-family:var(--fh);font-size:clamp(38px,5vw,64px);font-weight:800;color:var(--k);',
  '.ctat{font-family:var(--fh);font-size:clamp(38px,5vw,64px);font-weight:800;color:#ffffff;'
);

// 3. .bcm CSS
code = code.replace(
  '.bcm{padding:16px 32px;background:var(--k);border:none;border-radius:10px;color:var(--w);',
  '.bcm{padding:16px 32px;background:#ffffff;border:none;border-radius:24px;color:#000000;'
);

// 4. .bco CSS
code = code.replace(
  '.bco{padding:16px 32px;background:transparent;border:1px solid var(--bdl);border-radius:10px;color:var(--k);',
  '.bco{padding:16px 32px;background:transparent;border:1.5px solid rgba(255, 255, 255, 0.2);border-radius:24px;color:#ffffff;'
);

// 5. HTML CTA Texts
let htmlCtaIdx = code.indexOf('class="ctas-sec');
if (htmlCtaIdx !== -1) {
  let endIdx = code.indexOf('</section>', htmlCtaIdx);
  if (endIdx === -1) endIdx = code.indexOf('</div>', htmlCtaIdx + 1500); // fallback
  if (endIdx !== -1) {
    let innerBlock = code.substring(htmlCtaIdx, endIdx);
    let newBlock = innerBlock
      .replace(/(class="bcm"[^>]*>)[^<]+/g, '$1Get Started')
      .replace(/(class="bco"[^>]*>)[^<]+/g, '$1Log In');
    code = code.substring(0, htmlCtaIdx) + newBlock + code.substring(endIdx);
  }
}

fs.writeFileSync('index.html', code);
console.log('CTA Sync complete');
