// Format a string of names like 'Bart, Lisa & Maggie'.
function list(names) {
  let count = 0
  let nameArray = []

  names.forEach(function (el) {
    nameArray.push(Object.values(el))
  })

  if (nameArray.length > 1) {
    return `${nameArray.slice(0, -1).join(', ')} & ${nameArray.slice(nameArray.length - 1)}`
  } else if (nameArray.length = 1) {
    return nameArray.toString()
  }
}

function list(names) {
  return names.reduce(function (prev, current, index, array) {
    if (index === 0) {
      return current.name;
    }
    else if (index === array.length - 1) {
      return prev + ' & ' + current.name;
    }
    else {
      return prev + ', ' + current.name;
    }
  }, '');
}

var list = (names) => names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")
