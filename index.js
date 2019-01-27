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
    if (!value) return;

    var a = value.toFixed(2).split('');
    var l = a.length;
    for (var i = l - 6; i > 0 ; i -= 3) {
      a.splice(i, 0, ',');
    }

    return '$' + a.join('');
  };
}));
