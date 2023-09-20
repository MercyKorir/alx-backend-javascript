const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber function', function () {
  let a, b, expected;
  this.beforeEach(function () {
    a = Math.random() * 10;
    b = Math.random() * 10;
    expected = Math.round(a) + Math.round(b);
  });

  it('should return sum of two positive numbers', function () {
    let result = calculateNumber(a, b);
    assert.equal(result, expected);
  });

  it('should return sum of two negative numbers', function () {
    let res = calculateNumber(-a, -b);
    assert.equal(res, -expected);
  });

  it('should return the sum of a positive and negative number', function () {
    let res = calculateNumber(a, -b);
    assert.equal(res, Math.round(a) - Math.round(b));
  });
});
