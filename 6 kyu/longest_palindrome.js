// longest_palindrome
longestPalindrome = function (s) {
  let longest = 0
  let length = s.length

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j <= length; j++) {
      let str = s.slice(i, j)
      let l = str.length
      if (isPalindrome(str) && longest < l) {
        longest = l
      }
    }
  }
  return longest
}

function isPalindrome(s) {
  let arr = s.split('')
  return s == arr.reverse().join('')
}
