// Is this a triangle?
function isTriangle(a,b,c) {
  let arr = [a,b,c]
  let result = []

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result.push(arr[i])
    }
  }

  let sort = result.sort((a, b) => b - a)

  if (sort.length === 3) {
    if (sort[0] < (sort[1] + sort[2])) {
      return true
    }
  }

  return false
}

function isTriangle(a,b,c) {
  return a + b > c && a + c > b && c + b > a;
}

function isTriangle(a,b,c) {
  [a, b, c] = [a, b, c].sort((x, y) => x-y);

  return a+b > c;
}
