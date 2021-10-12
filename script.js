// Multiply
function multiply(a, b) {
  a * b;
  return a * b;
}

// Credit Card Mask
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}

// Categorize New Member
function openOrSenior(data) {
  function determinateMembership(member) {
    return member[0] >= 55 && member[1] > 7 ? "Senior" : "Open";
  }
  return data.map(determinateMembership);
}

// Highest and Lowest
function highAndLow(numbers) {
  numbers = numbers.split(" ").map(Number);
  return Math.max.apply(0, numbers) + " " + Math.min.apply(0, numbers);
}

// Duplicate Encoder


function isIsogram(str) {
  const isIsogram = str => !str.match(/(.).*\1/i)
  return true;
}

// Isograms
function isIsogram(str) {
  return !/(\w).*\1/i.test(str)
}

function isIsogram(str) {
  var i, j;
  str = str.toLowerCase();
  for (i = 0; i < str.length; ++i)
    for (j = i + 1; j < str.length; ++j)
      if (str[i] === str[j])
        return false;
  return true;
}

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


// Multiples of 3 or 5
function solution(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i
    }
  }
  return sum;
}

// Create Phone Number
function createPhoneNumber(numbers) {
  let phoneNumber = `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`
  return phoneNumber
}

function createPhoneNumber(numbers) {
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') '
    + numbers.substring(3, 6)
    + '-'
    + numbers.substring(6);
}

function createPhoneNumber(numbers) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }

  return format;
}

// Complementary DNA
let complements = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

function DNAStrand(dna) {
  let dnaArray = [...dna]

  let complementArray = dnaArray.map(x => complements[x])
  console.log(complementArray)

  return arrayJoinded = complementArray.join("")
}

function DNAStrand(dna) {
  return dna.replace(/./g, function (c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

let pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);

// Split Strings
function solution(str) {
  const matchStr = str.match(/\w{1,2}/g)

  if (str.length === 0) {
    return []
  }

  const result = matchStr.map((elm) => {
    return elm.length % 2 ? elm + '_' : elm
  })

  return result
}

function solution(str) {
  arr = [];
  for (var i = 0; i < str.length; i += 2) {
    second = str[i + 1] || '_';
    arr.push(str[i] + second);
  }
  return arr;
}

function solution(s) {
  return (s + "_").match(/.{2}/g) || []
}


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

// Consecutive strings
function longestConsec(strarr, k) {
  if (strarr.length == 0 || k > strarr.length || k <= 0) return '';

  let longStr = '';

  let newStr = '';

  for (let i = 0; i < strarr.length; i++) {
    newStr = strarr.slice(i, i + k);
    if (newStr.join('').length > longStr.length) {
      longStr = newStr.join('');
    }
  }

  return longStr;
}

// Summing a number's digits
function sumDigits(number) {
  let numbers = number.toString().split('')
  let sumArray = []
  for (i = 0; i < numbers.length; i++) {
    let number = numbers.map(Number)[i]
    if (Number.isInteger(number)) {
      sumArray.push(number)
    }
  }
  let sum = sumArray.reduce((a, b) => a + b, 0)
  return sum
}

function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce(function (a, b) { return +a + +b }, 0);
}

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


// Find the next perfect square!
function findNextSquare(sq) {
  let squareRoot = Math.sqrt(sq)

  if (Number.isInteger(squareRoot)) {
    let nextInteger = squareRoot + 1
    return (nextInteger * nextInteger)
  } else if (Number.isInteger(sq / sq)) {
    return -1
  }
}

function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}


// Growth of a Population
function nbYear(p0, percent, aug, p) {
  let x = p
  let realPercent = percent * 0.01
  let inhabitants = p0
  let years = 0

  while (inhabitants < x) {
    inhabitants += inhabitants * realPercent + aug
    years++
  }

  return years
}

function nbYear(p0, percent, aug, p) {
  for (var y = 0; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
  return y;
}

// Remove the minimum
function removeSmallest(numbers) {
  let result = numbers.slice(0);
  let smallestNumber = Math.min.apply(Math, result);
  let indexOfSmallestNumber = result.indexOf(smallestNumber);
  result.splice(indexOfSmallestNumber, 1);
  return result
}

function removeSmallest(numbers) {
  const result = numbers.slice(0);
  result.splice(numbers.indexOf(Math.min(...numbers)), 1);
  return result;
}

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

// Two fighters, one winner
function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () {
    return this.name;
  };
}

const declareWinner = (fighter1, fighter2, firstAttacker) => {
  const a = [fighter1, fighter2].find((v) => v.name === firstAttacker);
  const b = [fighter1, fighter2].find((v) => v.name !== firstAttacker);

  return Math.ceil(b.health / a.damagePerAttack) <= Math.ceil(a.health / b.damagePerAttack) ? a.name : b.name;
};

// Sum of a sequence
const sequenceSum = (begin, end, step) => {
  var sum = 0;

  for (i = begin; i <= end; i += step) {
    sum += i;
  }

  return sum;
};

// Sum of angles
function angle(n) {
  return (n - 2) * 180
}

// Break camelCase
function solution(string) {
  return string
    .split('')
    .map(char => (char === char.toUpperCase() ? ` ${char}` : char))
    .join('')
}

const breakCamelCase = string => string.replace(/([A-Z])/g, ' $1')

// Fix string case
function solve(s) {
  let solve = s
  let countUpper = 0
  let countLower = 0

  for (i = 0; i < solve.length; i++) {
    if (solve[i] == solve[i].toUpperCase()) {
      countUpper++
    } else {
      countLower++
    }
  }

  if (countLower >= countUpper) {
    return solve.toLowerCase()
  } else {
    return solve.toUpperCase()
  }
}

const solve = s => s.replace(/[A-Z]/g, '').length < s.length / 2 ? s.toUpperCase() : s.toLowerCase()

// IQ Test
function iqTest(numbers) {
  numbers = numbers.split(' ').map(function (el) { return parseInt(el) })

  let odd = numbers.filter(function (el) { return el % 2 === 1 })
  let even = numbers.filter(function (el) { return el % 2 === 0 })

  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1)
}

function iqTest(numbers) {
  numbers = numbers.split(' ')

  var evens = []
  var odds = []

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] & 1) {
      odds.push(i + 1)
    } else {
      evens.push(i + 1)
    }
  }

  return evens.length === 1 ? evens[0] : odds[0]
}

// Rainfall
const towns = ['Rome', 'London', 'Paris', 'NY', 'Vancouver', 'Sydney', 'Bangkok', 'Tokyo', 'Beijing', 'Lima', 'Montevideo', 'Caracas', 'Madrid', 'Berlin'];

function calculateData(town, strng, calulateCallback) {
  if (!towns.some(t => t == town)) {
    return -1;
  }

  const allData = strng.split('\n');
  for (const data of allData) {
    if (data.indexOf(town) !== 0) {
      continue;
    }

    const monthlyData = data.replace(/[a-zA-Z\:\s]+/g, '')
      .split(',')
      .map(Number.parseFloat);
    return calulateCallback(monthlyData);
  }

  return -1;
}

function mean(town, strng) {
  return calculateData(town, strng, d => d.reduce((p, c) => p + c) / d.length);
}

function variance(town, strng) {
  const avg = mean(town, strng);
  return calculateData(town, strng, d => d.reduce((p, c) => p + Math.pow(c - avg, 2), 0) / d.length);
}

module.exports = {
  mean: mean,
  variance: variance
}

// Highest Rank Number in an Array
function highestRank(arr) {
  let counter = {}
  let array = []

  for (i = 0; i < arr.length; i++) {
    if (arr[i] in counter) {
      counter[arr[i]]++;
    } else {
      counter[arr[i]] = 1;
      array.push(arr[i]);
    }
  }

  let valueArr = Object.values(counter)
  let highestFreq = Math.max(...valueArr);

  console.log(counter)
  console.log(array)

  for (var j = 0; j < array.length; j++) {
    if (counter[array[j]] === highestFreq) {
      let answer = array[j];
      return answer;
    }
  }
}

function highestRank(arr) {
  return arr.sort((a, b) => arr.filter(i => i === b).length - arr.filter(i => i === a).length)[0];
}

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

// Square Every Digit
function squareDigits(num) {
  let numArray = num.toString().split('')
  let squareNumbers = []

  for (i = 0; i < numArray.length; i++) {
    let number = numArray[i]
    squareNumbers.push(number * number)
  }

  let result = Number(squareNumbers.join(''))

  return result
}

// You're a square!
var isSquare = function (n) {
  let value = Math.floor(Math.sqrt(n))

  if (value * value == n) {
    return true;
  } else {
    return false
  }
}

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

// Convert number to reversed array of digits
function digitize(n) {
  let arr = n.toString().split('').map(Number)
  return arr.reverse()
}

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

// Counting sheeps...
function countSheeps(arrayOfSheep) {
  let count = 0

  for (i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] == true) {
      count++
    }
  }

  return count
}

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

// Make Class
function makeClass(...properties) {
  return class {
    constructor(...props) {
      properties.forEach((prop, index) => {
        this[prop] = props[index]
      })
    }
  }
}

// Functional Addition
function add(n) {
  return function (m) {
    return n + m
  }
}

var add = a => n => n + a

// All Unique
function hasUniqueChars(str) {
  return new Set(str).size === str.length
}

function hasUniqueChars(str) {
  return str.split('').every(function (v, i, arr) {
    return arr.indexOf(v) == i;
  });
}

// Function return and passing
function greet(user) {
  return `Hello ${user}`
}

let user = 'Navin'
let str = greet(user)

// Grasshopper - Check for factor
function checkForFactor(base, factor) {
  if (base % factor !== 0) {
    return false
  } else {
    return true
  }
}

function checkForFactor(base, factor) {
  return base % factor === 0;
}

// All Star Code Challenge #18
function strCount(str, letter) {
  let counter = 0

  for (i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      counter++
    }
  }

  return counter
}

function strCount(str, letter) {
  return str.split(letter).length - 1
}

// Triangle area
function tArea(tStr) {
  const side = tStr.split('\n').length - 3
  return (side * side) / 2
}

// Format a string of names like 'Bart, Lisa & Maggie'.
function list(names) {
  let count = 0
  let nameArray = []

  names.forEach(function (el) {
    nameArray.push(Object.values(el))
  })

  if (nameArray.length > 1) {
    return `${nameArray.slice(0, -1).join(', ')} & ${nameArray.slice(nameArray.length - 1)}`
  } else if (nameArray.length = 1) {
    return nameArray.toString()
  }
}

function list(names) {
  return names.reduce(function (prev, current, index, array) {
    if (index === 0) {
      return current.name;
    }
    else if (index === array.length - 1) {
      return prev + ' & ' + current.name;
    }
    else {
      return prev + ', ' + current.name;
    }
  }, '');
}

var list = (names) => names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")

// Mumbling
function accum(s) {
  let count = 0
  let accum = []

  for (i = 0; i < s.length; i++) {
    count++
    let str = s[i].toUpperCase() + (s[i].toLowerCase().repeat(count - 1))
    accum.push(str)
  }

  return accum.join('-')
}

function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

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

// Disemvowel Trolls
function disemvowel(str) {
  return str.slice(0).replace(/(a|e|i|o|u)/gi, "")
}

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

// Get the Middle Character
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1)
}

// Reversed Words
function reverseWords(str) {
  return str.split(' ').reverse().join(' ')
}

// Array.diff
function arrayDiff(a, b) {
  for (i = 0; i < a.length; i++) {
    for (j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        delete a[i]
      }
    }
  }
  return a.filter(Boolean)
}

function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}

// Running out of space
function spacey(array){
  let acc = [];
  let result = [];
  
  for (i = 0; i < array.length; i++) {
    acc.push(array[i]);
    result.push(acc.join(''));
  }
  
  return result;
}

function spacey(array) {
  let string = ''
  return array.map((e) => string += e)
}

// Calculate average
function find_average(array) {
  let sum = 0

  if (array.length === 0) {
    return 0
  }

  for (i = 0; i < array.length; i++) {
    sum = sum + array[i]
  }

  return sum / array.length
}

function find_average(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  return sum / array.length;
}

// Friend or Foe?
function friend(friends) {

  let myFriends = []

  for (i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      myFriends.push(friends[i])
    }
  }
  return myFriends
}

function friend(friends) {
  return friends.filter(n => n.length === 4)
}

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

// Binary Addition
function addBinary(a, b) {
  return (a + b).toString(2)
}

function addBinary(a, b) {
  var sum = a + b,
    binary = '';

  while (sum > 0) {
    binary = (sum % 2) + binary;
    sum = Math.floor(sum / 2);
  }

  return binary;
}

function decimalToBinary(decimal) {
  return (decimal >>> 0).toString(2);
}

function addBinary(a, b) {
  return decimalToBinary(a + b);
}

// Fake Binary
function fakeBin(x) {
  let result = []

  for (i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      let zero = x[i].replace(/\d/, 0)
      result.push(zero)
    } else {
      let one = x[i].replace(/\d/, 1)
      result.push(one)
    }
  }

  return result.join('')
}

function fakeBin(x) {
  return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

function fakeBin(x) {
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}

// String ends with?
function solution(str, ending) {
  return str.endsWith(ending)
}

// Even or Odd
function even_or_odd(number) {
  if (number % 2 == 0) {
    return 'Even'
  } else {
    return 'Odd'
  }
}

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}

// Case swapping
function swap(str) {
  let result = []

  for (i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      result.push(str[i].toLowerCase())
    } else {
      result.push(str[i].toUpperCase())
    }
  }

  return result.join('')
}

function swapCase(x) { return x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase() }

function swap(str) { return str.split("").map(swapCase).join("") }

function swap(str) {
  return str.replace(/[a-zA-Z]/g, function (c) {
    return c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  });
}

// Returning Strings
function greet(name) {
  return `Hello, ${name} how are you doing today?`
}

// USD => CNY
function usdcny(usd) {
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
}

// Function 1 - hello world
function greet() {
  return 'hello world!'
}

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

// Sum without highest and lowest number
function sumArray(array) {
  if (array == null) {
    return 0
  }

  array.sort(function (a, b) {
    return a - b
  })

  array = array.slice(1, -1)
  let sum = 0

  for (i = 0; i < array.length; i++) {
    console.log(array[i])
    sum += array[i]
  }

  return sum
}

// Find the unique number
function findUniq(arr) {
  let numberCount = {}

  arr.forEach(function (number) {
    numberCount[number] = (numberCount[number] || 0) + 1
  })

  let value = Object.values(numberCount)
  let key = Object.keys(numberCount)

  for (i = 0; i < value.length; i++) {
    if (value[i] === 1) {
      return parseFloat(key[i], 10)
    }
  }
}

function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0]
}

// Vowel remover
function shortcut(string) {
  return string.replace(/[aeiou]/g, '')
}

// Is n divisible by x and y?
function isDivisible(n, x, y) {
  if (Number.isInteger(n / x) && Number.isInteger(n / y)) {
    return true
  } else {
    return false
  }
}

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}

// Regex validate PIN code
function validatePIN (pin) {
  if (pin.length === 4 || pin.length === 6) {
    if (/^\d+$/.test(pin)) {
      return true
    } else {
      return false
    } 
  } else {
    return false
  }
}

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}

// Run-length encoding
var runLengthEncoding = function(str){
  let encoding = [];
  let prev = str[0]
  let count = 1;
  
  if (str === "") {
    return []
  }
  
  for (i = 1; i < str.length; i++) {
    if (str[i] != prev) {
      encoding.push([count, prev]);
      count = 1;
      prev = str[i];
    } else {
      count ++;
    }
  }
  
  encoding.push([count, prev]);
  return encoding
}

function runLengthEncoding(str) {
  var arr = [],
      counter = 1;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else {
      arr.push([counter, str[i]]);
      counter = 1;
    }
  }

  return arr;
}

// Sum of odd numbers
function rowSumOddNumbers(n) {
  return n * n * n;
}

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

let rowSumOddNumbers = n => n ** 3;

// Get the mean of an array
function getAverage(marks){
  let sum = marks.reduce(add, 0)
  
  function add(acc, a) {
    return acc + a
  }
  
  return Math.floor(sum / marks.length) 
}

function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}

function getAverage(marks){
  let total = 0;

  for(i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  
  return Math.floor(total / marks.length);
}

// Basic Mathematical Operations
function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2)
}

// Grasshopper - Summation
var summation = function (num) {
  let result = 0;
  
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  
  return result;
}

// Jenny's secret message
function greet(name){
  if(name === "Johnny") { 
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}

function greet(name){
  return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}

// Two to One
function longest(s1, s2) {
  let arr = []
  
  for (i = 0; i < s1.length; i++) {
    if (!arr.includes(s1[i])) {
      arr.push(s1[i])
    }
  }
  
  for (i = 0; i < s2.length; i++) {
    if (!arr.includes(s2[i])) {
      arr.push(s2[i])
    }
  }
  
  return arr.sort().join('')
}

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}

function longest(s1, s2) {
  // your code
  s3 = s1 + s2;
  s4 = s3.split("");
  s4 = s4.sort().filter(function(element, index, array){
    return element !== array[index - 1];
  });
  return s4.join("");
}

// Test Your Knowledge Of Function Scope
let add = a => b => a + b

function add(x) {
  return function(y) {
    return x + y
  }
}

// Multiplication table for number
function multiTable(number) {
  let arr = []
  
  for (i = 1; i <= 10; i++) {
    let calc = `${i} * ${number}`
    let operation = i * number
    let result = calc + ' = ' + operation
    arr.push(result)
  }
  
    return arr.join('\n')
}

const multiTable = (number) => {
  let table = '';
  
  for(let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
  }

  return table;
}

// Sum of the first nth term of Series
function SeriesSum(n) {
  let equation = 1
  let arr = []
  
  for (i = 1; i < n; i++) {
    equation = equation + 3
    arr.push(1 / equation)
  }
  
  if (arr.length > 0) {
    let sumSeries = arr.reduce((a, b) => a + b) + 1
    return sumSeries.toFixed(2)
  } else {
    return n.toFixed(2)
  }
}

function SeriesSum(n) {
  var sum = 0;
  for(var i = 0; i < n; i++) {
    sum += 1 / (3 * i + 1);
  }
  return sum.toFixed(2);
}

function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
  }
  
  return s.toFixed(2)
}

// Equal Sides Of An Array
function findEvenIndex(arr) {
  var sum = 0,
      leftSum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  for (var i = 0; i < arr.length; i++) {
    sum -= arr[i];

    if (leftSum === sum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}

// Sort the odd
function sortArray(array) {
  let numbers = {}
  let index = []
  let result = []
  
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      result.push(array[i])
    }
  }
  
  result.sort((a, b) => a - b)
  
  array.forEach(number => {
    if (number % 2 === 0) {
      index.push({number: number, index: array.indexOf(number)})
    }
  })
  
  for (i = 0; i < index.length; i++) {
    let evenNumber = index[i].number
    let evenIndex = index[i].index
      result.splice(evenIndex, 0, evenNumber)
  }
  
  return result
}

function sortArray(array) {
  var odds = [];
  //loop, if it's odd, push to odds array
  for (var i = 0; i < array.length; ++i) {
    if (array[i]%2 !== 0) {
      odds.push(array[i]);
    }
  }
  //sort odds from smallest to largest
  odds.sort(function(a,b){
    return a-b;
  });
  
  //loop through array, replace any odd values with sorted odd values
  for (var j = 0; j < array.length; ++j) {
    if (array[j]%2 !== 0) {
      array[j] = odds.shift();
    }
  }
  
 return array;
}

// Find the divisors!
function divisors(integer) {
  let result = []
  
  for (i = 2; i < integer; i++) {
    if (integer % i === 0 && i > 1) {
      result.push(i)
    }
  }
  
  return result.length ? result : integer + ' is prime';
}

// Opposite number
function opposite(number) {
  if (number > 0) {
    return -Math.abs(number)
  } else {
    return Math.abs(number)
  }
}

function opposite(number) {
  return(-number);
}

// Do I get a bonus?
function bonusTime(salary, bonus) {
  if (bonus === true) {
    return `£${salary * 10}`
  } else {
    return `£${salary}`
  }
}

function bonusTime(salary, bonus) {
  return bonus ? `£${10 * salary}` : `£${salary}`;
}


// Number of People in the Bus
var number = function(busStops){
  let sum = 0
  
  for (i = 0; i < busStops.length; i++) {
    sum = sum + busStops[i][0] - busStops[i][1]
  }
  
  return sum
}

const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

var number = function(busStops){
  var totalPeople = 0;
  for (var i=0; i<busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
}

// Descending Order
function descendingOrder(n){
  return parseInt(n.toString().split('').sort((a, b) => b - a).join(''))
}

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

// Is this a triangle?
function isTriangle(a,b,c) {
  let arr = [a,b,c]
  let result = []
  
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result.push(arr[i])
    }
  }
  
  let sort = result.sort((a, b) => b - a)
  
  if (sort.length === 3) {
    if (sort[0] < (sort[1] + sort[2])) {
    return true
    }
  }
  
  return false 
}

function isTriangle(a,b,c) {
  return a + b > c && a + c > b && c + b > a;
}

function isTriangle(a,b,c) {
  [a, b, c] = [a, b, c].sort((x, y) => x-y);

  return a+b > c;
}

// Odd or Even?
function oddOrEven(array) {
  let result = []
  
  for (i = 0; i < array.length; i++) {
    result.push(array[i])
  }
  
  let sum = result.reduce((a, b) => a + b, 0)
  
  if (sum % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
}

function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}

// Unlucky Days
function unluckyDays(year){
  const names = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  
  const fridays13 = months.map(month => {
    const date = new Date(year, month - 1, 1)
    let count = 0

    while (date.getMonth() === month - 1) {
      const day = `${date.getDate()}-${names[date.getDay()]}`

      if (day === '13-fri') count++
      date.setDate(date.getDate() + 1)
    }

    return count
  })
  
  return fridays13.reduce((total, friday) => total + friday, 0)
}

function unluckyDays(year){
  let unlucky = 0;
  for (var i = 0; i < 12; i++) {
    if(new Date(year, i, 13).getDay() === 5){
      unlucky++;
    }
  }
  return unlucky;
}

// Format With
String.prototype.formatWith = function (...arr) {
  return this.replace(/{[0-9]}/g,v => {
  let num = v.split``[1]*1
  return arr[num]||v
  })
}

String.prototype.formatWith = function (...args) {
  return this.replace(/\{(\d+)\}/g, (s, n) => n < args.length ? args[n] : s)
}

// List Filtering
function filter_list(l) {
  let result = []
  
  for (i = 0; i < l.length; i++) {
    if (Number.isInteger(l[i])) {
      result.push(l[i])
    }
  }
  
  return result
}

function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}

// Even numbers in an array
function evenNumbers(array, number) {
  let even = []
  
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      even.push(array[i])
    }
  }
  
  return even.splice(-number)
}

const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);

// Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
  let sum = 0
  numbers.sort((a, b) => a - b)
  return numbers[0] + numbers[1]
}

function sumTwoSmallestNumbers(numbers) {  
  var [ a, b ] = numbers.sort((a, b) => a - b)
  return a + b
}

// Ones and Zeros
const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2)
};

// Money, Money, Money
function calculateYears(principal, interest, tax, desired) {
  let years = 0
  
    while (principal < desired) {
      principal = principal + ((principal * interest) - (principal * interest) * tax)
      years++
    }
  
  return years
}

function calculateYears(principal, interest, tax, desired) {
  var years = 0;
  while(principal < desired){
    principal += (principal * interest) * (1 - tax);
    years++;
  }
  return years;
}

// Don't give me five!
function dontGiveMeFive(start, end) {
  let count = 0
  
  for (i = start; i < end + 1; i++) {
    if (!/5/.test(i)) {
      count++
    }
  }
  
  return count
}

// How much coffee do you need?
function howMuchCoffee(events) {
  let count = 0
  
  for (i = 0; i < events.length; i++) {
    if (!events[i].match(/^(cw|cat|dog|movie)*$/gi)) {
      count = count
    } else if (events[i].match(/^[A-Z]*$/)) {
      count = count + 2   
    } else {
      count = count + 1
    }
  }
  
  if (count > 3) {
    return 'You need extra sleep'
  } else {
    return count
  }
}

function howMuchCoffee(events) {
  var coffeeCount = 0; 
  events.forEach(function(entry) {
    var matches = /^((cw|cat|dog|movie)|(CW|CAT|DOG|MOVIE))$/.exec(entry);
    coffeeCount += matches ? (matches[2] ? 1 : (matches[3]? 2:0)):0;

  });
  return coffeeCount > 3 ? "You need extra sleep":coffeeCount;
}

// Unix command line `ls -l` extract the file type.
function linuxType(fileAttribute) {
  if (fileAttribute.match(/^-/)) {
    return 'file'
  } else if (fileAttribute.match(/^d/)) {
    return 'directory'
  } else if (fileAttribute.match(/^l/)) {
      return 'symlink'
  } else if (fileAttribute.match(/^c/)) {
    return 'character_file'
  } else if (fileAttribute.match(/^b/)) {
    return 'block_file'
  } else if (fileAttribute.match(/^p/)) {
    return 'pipe'
  } else if (fileAttribute.match(/^s/)) {
    return 'socket'
  } else if (fileAttribute.match(/^D/)) {
    return 'door'
  }
}

function linuxType(fileAttribute) {
  var fileTypes = {
    '-': 'file',
    'd': 'directory',
    'l': 'symlink',
    'c': 'character_file',
    'b': 'block_file',
    'p': 'pipe',
    's': 'socket',
    'D': 'door',
  };
  
  return fileTypes[fileAttribute[0]];
}

// Difference between years. (Level 1)
var howManyYears = function(date1, date2){
  let year1 = parseInt(date1.split('/', 1))
  let year2 = parseInt(date2.split('/', 1))
  return year2 > year1 ? year2 - year1 : year1 - year2
}

var howManyYears = function(date1, date2) {
  const year = s => +s.split('/')[0];
  return Math.abs(year(date1) - year(date2));
}

// Simple Fun #138: Similarity
function similarity(a, b) {
  let arr = a.concat(b)
  let occurencies = {}
  let both = 0
  
  for (let num of arr) {
    occurencies[num] = occurencies[num] ? occurencies[num] + 1 : 1;
  }
  
  for (i = 0; i < a.length; i++) {
    for (j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        both++
      }
    }
  }
  
  return both / Object.keys(occurencies).length
}

function similarity(a, b) {
  return a.filter(e => b.indexOf(e) !== -1).length / (new Set(a.concat(b))).size;
}

function similarity(a, b) {
  let x = a.filter((i, ind) => b.includes(i)).length
  let y = new Set([...a, ...b]).size
  return x / y
}

// Simple Fun #181: Rounding
function rounding(n, m) {
  return n << 1 === m ? n : Math.round(n / m) * m
}

// Find the calculation type
function calcType(a, b, res) {
  if (a + b === res) {
    return 'addition'
  } else if (a * b === res) {
    return 'multiplication'
  } else if (a - b === res) {
    return 'subtraction'
  } else if (a / b === res) {
    return 'division'
  }
}

const calcType = (a, b, res) => 
  a + b === res ? 'addition' :
  a - b === res ? 'subtraction' :
  a * b === res ? 'multiplication' :
  a / b === res ? 'division' : 
  null;

function calcType(a, b, res) {
  switch (res) {
    case a + b:
      return 'addition';
      break;
    case a - b:
      return 'subtraction';
      break;
    case a / b:
      return 'division';
      break;
    case a * b:
      return 'multiplication';
  }
}

// Only one
function onlyOne() {
  let count = 0
  
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] == true) {
      count++
    }
  }
  
  if (count === 1) {
    return true
  } else {
    return false
  }
}

const onlyOne = (...args) => args.filter(Boolean).length === 1

// No Loops 1 - Small enough?
function smallEnough(a, limit){
  let value = a.reduce((a, b) => {
    return a > b ? a : b
  })
  
  return value <= limit ? true : false
}

function smallEnough(a, limit) {
  return a.every(x => x <= limit);
}

smallEnough = (a, l) => a.every(e => e <= l);

const smallEnough = (a, limit) => Math.max(...a) <= limit

// Calculate Two People's Individual Ages
function getAges(sum,difference){
  let age1 = (sum / 2) + (difference / 2)
  let age2 = (sum / 2) - (difference / 2)
  
  if (sum >= 0 && difference >= 0 && age1 >= 0 && age2 >= 0) {
    return [age1, age2]
  } else {
    return null
  }
};

const getAges = (sum, difference) =>
  sum < 0 || difference < 0 || sum < difference ? null : [(sum + difference) / 2, (sum - difference) / 2];

// Sequence generator
function sequence(n, pattern) {
  const type = typeof pattern
  const array = Array.from({ length: n })
  if (type === 'function') return array.map(pattern)
  return array.fill(pattern)
}

function sequence(n, pattern) {
  const arr = Array.from({ length: n })
  
  if (typeof pattern === 'function') {
    return arr.map(pattern);
  }

  return arr.fill(pattern)
}

function sequence(n, pattern) {
  return Array.from({length: n}, typeof pattern === "function" ? pattern : () => pattern)
}

// Milk and Cookies for Santa
function timeForMilkAndCookies(date){
  return date.getDate() === 24 && date.getMonth() === 11
}

// Sorted? yes? no? how?
function isSortedAndHow(array) {
  let ascending = [...array].sort((a, b) => a - b)
  let descending = ascending.slice().reverse()
  
  if (JSON.stringify(array) === JSON.stringify(ascending)) {
    return 'yes, ascending'
  } else if (JSON.stringify(array) === JSON.stringify(descending)) {
    return 'yes, descending'
  } else {
    return 'no'
  }
}

function isSortedAndHow(arr) {
  return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
         arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
}

// Beginner Series #3 Sum of Numbers
function getSum( a,b ) {
  let arr = [];
  arr.push(a, b);
  arr.sort((a, b) => a - b)
  let sum = 0
  
  while (arr[0] <= arr[1]) {
    sum = sum + arr[0]
    arr[0]++
  }
  
  return sum
}

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

// Binary scORe
function score(n){
  return  n===0? 0: 2**(n.toString(2).length)-1
}

function score(n){
  return n > 0 ? parseInt(new Number(n).toString(2).replace(/0/g, 1), 2) : 0;
}

// Infinitely Nested Radicals
function fn(x) {
  return (1+Math.sqrt(1+4*x))/2;
}

// Leap Years
function isLeapYear(year) {
  return ((Number.isInteger(year / 4)) && (Number.isInteger(year / 400) || !Number.isInteger(year / 100))) ? true : false
}

function isLeapYear(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

// Chain me
function chain(input, fs) {
  let sum = fs[0](input);
  
  for (i = 1; i < fs.length; i++) {
    sum = fs[i](sum);
  }
  
  return sum;
}

function chain(input, fs) {
  return fs.reduce(function(p, fn) {
    return fn(p);
  }, input);
}

function chain(input, fs) {
  fs.forEach(function(fn) { input = fn(input) });
  return input;
}

// Debug Sum of Digits of a Number
function getSumOfDigits(integer) {
  var sum = null;
  var digits = Math.floor(integer).toString().split('').map(Number);
  for(i = 0; i < digits.length; i++) {
    sum = sum + digits[i];
  }
  return sum;
}

function getSumOfDigits(integer) {
  return (integer+'').split('').reduce((sum, d) => sum + (+d || 0), 0);
}

function getSumOfDigits(integer) {
  return Array.from(String(integer), Number).reduce((a,b) => a + b)
}

// Return the Missing Element
function getMissingElement(superImportantArray){
  let arr = superImportantArray.sort((a, b) => a - b);
  let ref = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  let result = 0;
  
  ref.forEach(function(num) {
    if (!arr.includes(ref[num])) {
      result = num;
    }
  })
  
  return result;
}

function getMissingElement(superImportantArray){
  for (i = 0; i < 10; i++) {
    if (superImportantArray.indexOf(i) === -1) return i;
  }
}

