// Mumbling
function accum(s) {
  let count = 0
  let accum = []

  for (i = 0; i < s.length; i++) {
    count++
    let str = s[i].toUpperCase() + (s[i].toLowerCase().repeat(count - 1))
    accum.push(str)
  }

  return accum.join('-')
}

function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
