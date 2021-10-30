// Case swapping
function swap(str) {
  let result = []

  for (i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      result.push(str[i].toLowerCase())
    } else {
      result.push(str[i].toUpperCase())
    }
  }

  return result.join('')
}

function swapCase(x) { return x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase() }

function swap(str) { return str.split("").map(swapCase).join("") }

function swap(str) {
  return str.replace(/[a-zA-Z]/g, function (c) {
    return c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  });
}
