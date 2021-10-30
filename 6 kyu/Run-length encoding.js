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
