// Is n divisible by x and y?
function isDivisible(n, x, y) {
  if (Number.isInteger(n / x) && Number.isInteger(n / y)) {
    return true
  } else {
    return false
  }
}

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}
