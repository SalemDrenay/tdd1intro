const assert = require('assert');

function capitalizeFirstLetters(input) {
    const words = input.split(' ');
    let output = [];
    for ( let i = 0; i < words.length; i++){
        output.push(words[i][0].toUpperCase() + words[i].slice(1));
    }
    return output.join(' ');
}
console.log(capitalizeFirstLetters);

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