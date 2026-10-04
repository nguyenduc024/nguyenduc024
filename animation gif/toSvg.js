const fs = require('fs');
const lines = fs.readFileSync('frame1.txt', 'utf8').split('\n');
const charWidth = 6;
const lineHeight = 10;
const width = lines[0].length * charWidth;
const height = lines.length * lineHeight + 20;

let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
<rect width="100%" height="100%" fill="#ffffff" />
<text x="10" y="10" font-family="monospace" font-size="${lineHeight}px" fill="#000000" xml:space="preserve">
`;

for (let i = 0; i < lines.length; i++) {
    // escape HTML entities
    const escaped = lines[i].replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    svg += `<tspan x="10" dy="${lineHeight}">${escaped}</tspan>\n`;
}

svg += `</text></svg>`;
fs.writeFileSync('../nguyenduc024/ascii-img.svg', svg);
console.log('Generated ascii-img.svg');
