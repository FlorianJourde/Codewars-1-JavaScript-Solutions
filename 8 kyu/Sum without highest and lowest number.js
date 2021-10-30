// Sum without highest and lowest number
function sumArray(array) {
  if (array == null) {
    return 0
  }

  array.sort(function (a, b) {
    return a - b
  })

  array = array.slice(1, -1)
  let sum = 0

  for (i = 0; i < array.length; i++) {
    console.log(array[i])
    sum += array[i]
  }

  return sum
}
