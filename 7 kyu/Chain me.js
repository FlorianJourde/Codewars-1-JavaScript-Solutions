// Chain me
function chain(input, fs) {
  let sum = fs[0](input);

  for (i = 1; i < fs.length; i++) {
    sum = fs[i](sum);
  }

  return sum;
}

function chain(input, fs) {
  return fs.reduce(function(p, fn) {
    return fn(p);
  }, input);
}

function chain(input, fs) {
  fs.forEach(function(fn) { input = fn(input) });
  return input;
}
