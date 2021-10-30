// Duplicate Encoder
function duplicateEncode(word) {
  let lettersCount = {};
  let letters = word.toLowerCase().split('')

  letters.forEach(function (letter) {
    lettersCount[letter] = (lettersCount[letter] || 0) + 1
  })

  return letters.map(function (letter) {
    return lettersCount[letter] === 1 ? '(' : ')'
  }).join('')
}

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}
