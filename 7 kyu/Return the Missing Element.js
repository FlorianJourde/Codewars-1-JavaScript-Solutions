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
