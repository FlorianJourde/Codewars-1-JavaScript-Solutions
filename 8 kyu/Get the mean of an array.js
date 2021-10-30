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
