// Beginner Series #3 Sum of Numbers
function getSum( a,b ) {
  let arr = [];
  arr.push(a, b);
  arr.sort((a, b) => a - b)
  let sum = 0

  while (arr[0] <= arr[1]) {
    sum = sum + arr[0]
    arr[0]++
  }

  return sum
}

const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}
