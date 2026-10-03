const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const badViewport = '<meta name="viewport" content="width=1920">';
const origViewport = '<meta name="viewport" content="width=device-width, initial-scale=1">';

if (html.includes(badViewport)) {
  html = html.replace(badViewport, origViewport);
  console.log('Reverted viewport tag.');
}

// Now we need to remove the CSS classes or media queries that make it a scrollable page on mobile.
// Wait, the presentation engine adds a class to the body or main container when it's on mobile.
// Let's find any occurrences of 'is-mobile' or similar.
const bodyMatch = html.match(/<body[^>]*>/);
console.log('Body tag:', bodyMatch ? bodyMatch[0] : 'not found');

// Let's modify the javascript that adds mobile classes, or just remove the media query that makes slides static instead of absolute.
// The slides have `class="deck-slide"`. Let's search CSS for `.deck-slide`.
const deckSlideMatches = html.match(/\.deck-slide[^\{]*\{[^\}]*\}/g);
if (deckSlideMatches) {
  console.log('Deck slide CSS:', deckSlideMatches);
}

fs.writeFileSync('index.html', html);
