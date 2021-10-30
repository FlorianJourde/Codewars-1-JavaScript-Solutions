// Even numbers in an array
function evenNumbers(array, number) {
  let even = []

  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      even.push(array[i])
    }
  }

  return even.splice(-number)
}

const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);
