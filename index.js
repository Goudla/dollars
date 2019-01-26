;(function(name, definition) {
  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    define( name, [], function() {
      return definition;
    });
  }
  else if (freeModule) {
    // Export for Node.js.
    (freeModule.exports = definition())[name] = definition();
    // Export for CommonJS support.
    freeExports[name] = definition();
  }
  else {
    // Export to the global object.
    root[name] = definition();
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
    for (var i = l - 6; i >= 3 ; i -= 3) {
      a.splice(i, 0, ',');
    }

    return '$' + a.join('');
  };
}));
