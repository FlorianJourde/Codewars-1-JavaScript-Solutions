// All Unique
function hasUniqueChars(str) {
  return new Set(str).size === str.length
}

function hasUniqueChars(str) {
  return str.split('').every(function (v, i, arr) {
    return arr.indexOf(v) == i;
  });
}
