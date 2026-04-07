const fs = require('fs');
const lines = fs.readFileSync('index.html', 'utf8').split('\n');
let out = '';
lines.forEach((line, i) => {
  if (line.includes('desk-body') || line.includes('db-header') || line.includes('db-') || line.includes('desktop-frame')) {
    out += `${i+1}: ${line}\n`;
  }
});
fs.writeFileSync('db_lines.txt', out);
