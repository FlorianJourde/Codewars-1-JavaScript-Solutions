// Disemvowel Trolls
function disemvowel(str) {
  return str.slice(0).replace(/(a|e|i|o|u)/gi, "")
}

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
