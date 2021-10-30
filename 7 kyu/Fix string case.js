// Fix string case
function solve(s) {
  let solve = s
  let countUpper = 0
  let countLower = 0

  for (i = 0; i < solve.length; i++) {
    if (solve[i] == solve[i].toUpperCase()) {
      countUpper++
    } else {
      countLower++
    }
  }

  if (countLower >= countUpper) {
    return solve.toLowerCase()
  } else {
    return solve.toUpperCase()
  }
}

const solve = s => s.replace(/[A-Z]/g, '').length < s.length / 2 ? s.toUpperCase() : s.toLowerCase()
