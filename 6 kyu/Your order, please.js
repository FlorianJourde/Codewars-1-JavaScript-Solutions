// Your order, please
function order(words) {
  return words.split(' ').sort(function (a, b) {
    return a.match(/\d/) - b.match(/\d/);
  }).join(' ')
}

function order(words) {
  var array = words.split(' ');
  var sortedArray = [];
  for (i = 0; i <= array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(' ');
}
