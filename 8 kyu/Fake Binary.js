// Fake Binary
function fakeBin(x) {
  let result = []

  for (i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      let zero = x[i].replace(/\d/, 0)
      result.push(zero)
    } else {
      let one = x[i].replace(/\d/, 1)
      result.push(one)
    }
  }

  return result.join('')
}

function fakeBin(x) {
  return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

function fakeBin(x) {
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}
