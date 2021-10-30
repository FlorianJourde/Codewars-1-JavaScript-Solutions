// All Star Code Challenge #18
function strCount(str, letter) {
  let counter = 0

  for (i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      counter++
    }
  }

  return counter
}

function strCount(str, letter) {
  return str.split(letter).length - 1
}
