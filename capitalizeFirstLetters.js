const assert = require('assert');

function capitalizeFirstLetters(input) {
    const words = input.split(' ');
    let output = [];
    for ( let i = 0; i < words.length; i++){
        const wordMaj = words[i] && words[i][0].toUpperCase()
        const nextletter = words[i].slice(1)
        const all = wordMaj + nextletter
        output.push(all)
    }
    return output.join(' ');
}

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