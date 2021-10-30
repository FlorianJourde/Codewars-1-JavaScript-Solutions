// Exes and Ohs
function XO(str) {
  let lettersCount = {};
  let letters = str.toLowerCase().split('')

  letters.forEach(function (letter) {
    lettersCount[letter] = (lettersCount[letter] || 0) + 1
  })

  return lettersCount['x'] === lettersCount['o'] ? true : false
}

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
