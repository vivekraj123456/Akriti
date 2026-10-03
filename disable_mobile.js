const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The goal is to disable the mobile fallback styles so the browser always renders the desktop layout.
// We replace the media queries that trigger mobile views with queries that will never be true.

html = html.replaceAll('@media not all and (min-width: 48rem)', '@media (max-width: 1px)');
html = html.replaceAll('@media not all and (min-width: 40rem)', '@media (max-width: 1px)');
html = html.replaceAll('@media (pointer: coarse)', '@media (pointer: none)');
html = html.replaceAll('@media (pointer: coarse), (hover: none)', '@media (pointer: none)');

fs.writeFileSync('index.html', html);
console.log('Mobile media queries disabled.');
