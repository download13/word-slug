# word-slug

Makes URL slugs from random words chained together.

## Install

`npm install word-slug`


## Example

```javascript
var wordSlug = require('word-slug');


console.log(wordSlug(4)); // 'thrill-snail-wakeful-nonstop'

console.log(wordSlug(2)); // 'curly-voiceless'

// Defaults to 3
console.log(wordSlug()); // 'ripe-reading-flagrant'
```
