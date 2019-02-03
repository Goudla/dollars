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
    var number = Number(value);
    if (isNaN(number)) return;
    var isNegative = number < 0;

    var roundedNumber = Math.ceil(number*100)/100;
    var array = roundedNumber.toFixed(2).split('');
    // Remove negative symbol for formatting
    if (isNegative) {
      array.shift();
    }

    var length = array.length;
    for (var i = length - 6; i > 0 ; i -= 3) {
      array.splice(i, 0, ',');
    }

    if (isNegative) {
      return '($' + array.join('') + ')';
    }

    return '$' + array.join('');
  };
}));
