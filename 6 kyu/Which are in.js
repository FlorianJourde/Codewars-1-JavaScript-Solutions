// Which are in?
function inArray(array1, array2) {
  let arr = array2.join(" ")
  return array1.filter(item => arr.search(item) !== -1).sort()
}

function inArray(arr1, arr2) {
  return arr1.filter(function (needle) {
    return arr2.some(function (haystack) {
      return haystack.indexOf(needle) > -1;
    });
  }).sort();
}
