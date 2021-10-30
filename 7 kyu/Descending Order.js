// Descending Order
function descendingOrder(n){
  return parseInt(n.toString().split('').sort((a, b) => b - a).join(''))
}

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}
