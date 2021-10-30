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
