;(function(name, definition) {
  if (typeof module != 'undefined') {
    module.exports = definition();
  } else if (typeof define == 'function' && typeof define.amd == 'object') {
    define(name, [], definition);
  } else {
    this[name] = definition();
  }
}('toDollars', function() {
  /**
   * Format a number as currency
   * @param  {number} value The value to be formatted
   * @return {string}       The value formatted as currency
   */
  return function(value) {
    return value.toLocaleString('en', { style: 'currency', currency: 'USD' })
  };
}));
