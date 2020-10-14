const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {
    it('is a function', () => {
        assert.strictEqual(typeof capitalizeFirstLetters, 'function');
    });
  
    it('transforms one or several words correctly', () => {
        assert.strictEqual(capitalizeFirstLetters('i know how to draw classy runes'), 'I Know How To Draw Classy Runes');
        assert.strictEqual(capitalizeFirstLetters('seriously'), 'Seriously');
    });
  
    it('works with a 1-character string', () => {
        assert.strictEqual(capitalizeFirstLetters('s'), 'S');
    });
  
    it('works with an empty string', () => {
        assert.strictEqual(capitalizeFirstLetters(''), '');
    });
});