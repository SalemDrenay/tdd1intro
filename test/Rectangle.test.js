const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('isSquare', () => {
  it('should return true if a=b (then the sides are the same length)', () => {
    const rectangle = new Rectangle(5, 5);
    assert.strictEqual(rectangle.isSquare(), true);
  });
  it('should return false if a!=b', () => {
    const rectangle = new Rectangle(10, 5);
    assert.strictEqual(rectangle.isSquare(), false);
  });
});

describe('getArea', () => {
  it("should return the rectangle's surface", () => {
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getArea(), 91);
  });
});

describe('getPerimeter', () => {
  it('should return the perimeter', () => {
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getPerimeter(), 40);
  });
});