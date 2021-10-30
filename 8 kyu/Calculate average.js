// Calculate average
function find_average(array) {
  let sum = 0

  if (array.length === 0) {
    return 0
  }

  for (i = 0; i < array.length; i++) {
    sum = sum + array[i]
  }

  return sum / array.length
}

function find_average(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  return sum / array.length;
}
