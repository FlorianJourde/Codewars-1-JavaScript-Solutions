// Sum of the first nth term of Series
function SeriesSum(n) {
  let equation = 1
  let arr = []

  for (i = 1; i < n; i++) {
    equation = equation + 3
    arr.push(1 / equation)
  }

  if (arr.length > 0) {
    let sumSeries = arr.reduce((a, b) => a + b) + 1
    return sumSeries.toFixed(2)
  } else {
    return n.toFixed(2)
  }
}

function SeriesSum(n) {
  var sum = 0;
  for(var i = 0; i < n; i++) {
    sum += 1 / (3 * i + 1);
  }
  return sum.toFixed(2);
}

function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
  }

  return s.toFixed(2)
}
