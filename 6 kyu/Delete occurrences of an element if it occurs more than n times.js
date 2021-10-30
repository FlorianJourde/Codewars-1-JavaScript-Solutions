// Delete occurrences of an element if it occurs more than n times
function deleteNth(arr, n) {
  let result = []
  let itemCount = {}

  for (i = 0; i < arr.length; i++) {
    let item = arr[i]
    let count = itemCount[item] || 0

    if (count < n) {
      result.push(item)
      itemCount[item] = count + 1
    }
  }
  return result
}

function deleteNth(arr, x) {
  var cache = {};
  return arr.filter(function (n) {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}
