const fs = require('fs');
let content = fs.readFileSync('frames.js', 'utf8');
content = content.replace('const frames', 'global.frames');
eval(content);
if (typeof global.frames !== 'undefined' && global.frames.length > 0) {
    fs.writeFileSync('frame1.txt', global.frames[0].trim());
    console.log('Wrote frame1.txt, length: ' + global.frames[0].length);
} else {
    console.log('No frame found');
}
