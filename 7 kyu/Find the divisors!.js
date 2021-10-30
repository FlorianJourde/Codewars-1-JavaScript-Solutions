// Find the divisors!
function divisors(integer) {
  let result = []

  for (i = 2; i < integer; i++) {
    if (integer % i === 0 && i > 1) {
      result.push(i)
    }
  }

  return result.length ? result : integer + ' is prime';
}
