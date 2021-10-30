// Vowel Count
function getCount(str) {
  let string = str
  var vowelsCount = 0;
  const regex = /(a|e|i|o|u)/g

  for (i = 0; i < string.length; i++) {
    if (string[i].match(regex)) {
      vowelsCount++
    }
  }

  return vowelsCount;
}

function getCount(str) {
  return (str.match(/[aeiou]/ig) || []).length;
}
