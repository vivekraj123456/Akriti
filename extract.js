const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// There's a meta viewport tag that we can change or remove to force desktop mode.
// `<meta name="viewport" content="width=device-width, initial-scale=1">`
// Let's see if we can find it.
const viewportMatch = html.match(/<meta name="viewport"[^>]*>/);
console.log('Viewport meta:', viewportMatch ? viewportMatch[0] : 'not found');

// Let's also check for a class applied to HTML or BODY that triggers mobile mode, like `is-mobile`
const bodyMatch = html.match(/<body[^>]*>/);
console.log('Body tag:', bodyMatch ? bodyMatch[0] : 'not found');
