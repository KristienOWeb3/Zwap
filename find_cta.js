const fs = require('fs');
const lines = fs.readFileSync('index.html', 'utf8').split('\n');
let out = '';
lines.forEach((line, i) => {
  if (line.includes('.ctas-sec') || line.includes('.ctat') || line.includes('.bcm') || line.includes('.bco')) {
    out += `${i+1}: ${line}\n`;
  }
});
fs.writeFileSync('cta_lines.txt', out);
