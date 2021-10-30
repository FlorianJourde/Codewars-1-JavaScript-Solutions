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
