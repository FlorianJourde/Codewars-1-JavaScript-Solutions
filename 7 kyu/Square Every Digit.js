// Square Every Digit
function squareDigits(num) {
  let numArray = num.toString().split('')
  let squareNumbers = []

  for (i = 0; i < numArray.length; i++) {
    let number = numArray[i]
    squareNumbers.push(number * number)
  }

  let result = Number(squareNumbers.join(''))

  return result
}
