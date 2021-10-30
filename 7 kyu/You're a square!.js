// You're a square!
var isSquare = function (n) {
  let value = Math.floor(Math.sqrt(n))

  if (value * value == n) {
    return true;
  } else {
    return false
  }
}

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}
