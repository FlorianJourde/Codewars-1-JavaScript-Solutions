// No Loops 1 - Small enough?
function smallEnough(a, limit){
  let value = a.reduce((a, b) => {
    return a > b ? a : b
  })

  return value <= limit ? true : false
}

function smallEnough(a, limit) {
  return a.every(x => x <= limit);
}

smallEnough = (a, l) => a.every(e => e <= l);

const smallEnough = (a, limit) => Math.max(...a) <= limit
