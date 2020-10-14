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

assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirstLetters('for fucking real'), 'For Fucking Real');
assert.strictEqual(capitalizeFirstLetters('seriously'), 'Seriously');
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
assert.strictEqual(capitalizeFirstLetters(''), '');