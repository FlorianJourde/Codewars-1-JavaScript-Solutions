// Binary Addition
function addBinary(a, b) {
  return (a + b).toString(2)
}

function addBinary(a, b) {
  var sum = a + b,
    binary = '';

  while (sum > 0) {
    binary = (sum % 2) + binary;
    sum = Math.floor(sum / 2);
  }

  return binary;
}

function decimalToBinary(decimal) {
  return (decimal >>> 0).toString(2);
}

function addBinary(a, b) {
  return decimalToBinary(a + b);
}
