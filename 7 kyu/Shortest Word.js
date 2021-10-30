// Shortest Word
function findShort(s) {
  let words = s.split(' ')
  let shortest = words.reduce((shortestWord, currentWord) => {
    return currentWord.length < shortestWord.length ? currentWord : shortestWord;
  }, words[0])

  return shortest.length
}

function findShort(s) {
  var arr = s.split(' ');
  var smallest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length < smallest.length) {
      smallest = arr[i];
    }
  }
  return smallest.length;
}

function findShort(s) {
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}
