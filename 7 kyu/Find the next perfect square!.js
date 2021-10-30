// Find the next perfect square!
function findNextSquare(sq) {
  let squareRoot = Math.sqrt(sq)

  if (Number.isInteger(squareRoot)) {
    let nextInteger = squareRoot + 1
    return (nextInteger * nextInteger)
  } else if (Number.isInteger(sq / sq)) {
    return -1
  }
}

function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}
