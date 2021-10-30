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
