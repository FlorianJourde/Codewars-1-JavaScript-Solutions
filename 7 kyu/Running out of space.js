// Running out of space
function spacey(array){
  let acc = [];
  let result = [];

  for (i = 0; i < array.length; i++) {
    acc.push(array[i]);
    result.push(acc.join(''));
  }

  return result;
}

function spacey(array) {
  let string = ''
  return array.map((e) => string += e)
}
