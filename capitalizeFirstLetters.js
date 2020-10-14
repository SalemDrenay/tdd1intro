const assert = require('assert');

// capitalizeFirstLetters est une fonction
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
// chaîne avec plusieurs mots
assert.strictEqual(capitalizeFirstLetters('for fucking real'), 'For Fucking Real');
// chaîne avec un seul mot
assert.strictEqual(capitalizeFirstLetters('seriously'), 'Seriously');
// chaîne avec caractère unique
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
// chaîne vide
assert.strictEqual(capitalizeFirstLetters(''), '');