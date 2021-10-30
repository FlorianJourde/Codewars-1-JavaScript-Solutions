// Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
  let sum = 0
  numbers.sort((a, b) => a - b)
  return numbers[0] + numbers[1]
}

function sumTwoSmallestNumbers(numbers) {
  var [ a, b ] = numbers.sort((a, b) => a - b)
  return a + b
}
