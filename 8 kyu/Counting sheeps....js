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
