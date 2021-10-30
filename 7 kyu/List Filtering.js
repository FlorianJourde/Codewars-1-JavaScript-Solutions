// List Filtering
function filter_list(l) {
  let result = []

  for (i = 0; i < l.length; i++) {
    if (Number.isInteger(l[i])) {
      result.push(l[i])
    }
  }

  return result
}

function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}
