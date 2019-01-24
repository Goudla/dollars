/**
 * Format a number as currency
 * @param  {number} value The value to be formatted
 * @return {string}       The value formatted as currency
 */
function formatCurrency(value) {
  if (!value) return;

  var a = value.toFixed(2).split('');
  var l = a.length;
  for (var i = l - 6; i >= 3 ; i -= 3) {
    a.splice(i, 0, ',');
  }

  return '$' + a.join('');
}
