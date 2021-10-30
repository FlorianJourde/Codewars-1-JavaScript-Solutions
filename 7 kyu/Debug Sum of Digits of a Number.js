// Debug Sum of Digits of a Number
function getSumOfDigits(integer) {
  var sum = null;
  var digits = Math.floor(integer).toString().split('').map(Number);
  for(i = 0; i < digits.length; i++) {
    sum = sum + digits[i];
  }
  return sum;
}

function getSumOfDigits(integer) {
  return (integer+'').split('').reduce((sum, d) => sum + (+d || 0), 0);
}

function getSumOfDigits(integer) {
  return Array.from(String(integer), Number).reduce((a,b) => a + b)
}
