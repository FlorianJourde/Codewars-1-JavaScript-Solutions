// Odd or Even?
function oddOrEven(array) {
  let result = []

  for (i = 0; i < array.length; i++) {
    result.push(array[i])
  }

  let sum = result.reduce((a, b) => a + b, 0)

  if (sum % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
}

function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}
