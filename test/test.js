var assert = require('assert');
var toDollars = require('../');

describe('toDollars', function() {
  it('Returns ($1,000,000.00) for -1000000', function() {
    var result = toDollars(-1000000);
    assert.equal(result, '($1,000,000.00)')
  })

  it('Returns ($10,000.00) for -10000', function() {
    var result = toDollars(-10000);
    assert.equal(result, '($10,000.00)')
  })

  it('Returns ($1,000.00) for -1000', function() {
    var result = toDollars(-1000);
    assert.equal(result, '($1,000.00)')
  })

  it('Returns ($100.00) for -100', function() {
    var result = toDollars(-100);
    assert.equal(result, '($100.00)')
  })

  it('Returns ($10.00) for -10', function() {
    var result = toDollars(-10);
    assert.equal(result, '($10.00)')
  })

  it('Returns $0.00 for 0', function() {
    var result = toDollars(0);
    assert.equal(result, '$0.00')
  })

  it('Returns $10.00 for 10', function() {
    var result = toDollars(10);
    assert.equal(result, '$10.00')
  })

  it('Returns $100.00 for 100', function() {
    var result = toDollars(100);
    assert.equal(result, '$100.00')
  })

  it('Returns $1,000.00 for 1000', function() {
    var result = toDollars(1000);
    assert.equal(result, '$1,000.00')
  })

  it('Returns $10,000.00 for 10000', function() {
    var result = toDollars(10000);
    assert.equal(result, '$10,000.00')
  })

  it('Returns $1,000,000.00 for 1000000', function() {
    var result = toDollars(1000000);
    assert.equal(result, '$1,000,000.00')
  })
});
