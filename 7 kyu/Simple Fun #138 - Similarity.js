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
