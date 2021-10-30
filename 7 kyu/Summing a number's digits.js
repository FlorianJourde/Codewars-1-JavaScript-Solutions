// Summing a number's digits
function sumDigits(number) {
  let numbers = number.toString().split('')
  let sumArray = []
  for (i = 0; i < numbers.length; i++) {
    let number = numbers.map(Number)[i]
    if (Number.isInteger(number)) {
      sumArray.push(number)
    }
  }
  let sum = sumArray.reduce((a, b) => a + b, 0)
  return sum
}

function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce(function (a, b) { return +a + +b }, 0);
}
