// Only one
function onlyOne() {
  let count = 0

  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] == true) {
      count++
    }
  }

  if (count === 1) {
    return true
  } else {
    return false
  }
}

const onlyOne = (...args) => args.filter(Boolean).length === 1
