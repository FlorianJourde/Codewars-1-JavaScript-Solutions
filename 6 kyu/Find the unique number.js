// Find the unique number
function findUniq(arr) {
  let numberCount = {}

  arr.forEach(function (number) {
    numberCount[number] = (numberCount[number] || 0) + 1
  })

  let value = Object.values(numberCount)
  let key = Object.keys(numberCount)

  for (i = 0; i < value.length; i++) {
    if (value[i] === 1) {
      return parseFloat(key[i], 10)
    }
  }
}

function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0]
}
