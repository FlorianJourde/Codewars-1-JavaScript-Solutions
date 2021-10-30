// Binary scORe
function score(n){
  return  n===0? 0: 2**(n.toString(2).length)-1
}

function score(n){
  return n > 0 ? parseInt(new Number(n).toString(2).replace(/0/g, 1), 2) : 0;
}
