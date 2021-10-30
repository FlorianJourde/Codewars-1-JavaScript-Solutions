// Convert number to reversed array of digits
function digitize(n) {
  let arr = n.toString().split('').map(Number)
  return arr.reverse()
}

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}
