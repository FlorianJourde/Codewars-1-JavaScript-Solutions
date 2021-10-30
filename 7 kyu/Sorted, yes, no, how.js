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
