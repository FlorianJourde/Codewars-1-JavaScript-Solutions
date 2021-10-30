// Jaden Casing Strings
String.prototype.toJadenCase = function () {
  let words = this.split(' ')
  let sentence = []
  words.forEach(function (word) {
    let upperWord = word.charAt(0).toUpperCase() + word.slice(1)
    sentence.push(upperWord)
  })
  return jadenSentence = sentence.join(' ')
};

String.prototype.toJadenCase = function () {
  return this.split(" ").map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function (x) { return x.toUpperCase(); });
};
