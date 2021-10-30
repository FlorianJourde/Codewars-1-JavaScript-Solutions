// Multiplication table for number
function multiTable(number) {
  let arr = []

  for (i = 1; i <= 10; i++) {
    let calc = `${i} * ${number}`
    let operation = i * number
    let result = calc + ' = ' + operation
    arr.push(result)
  }

  return arr.join('\n')
}

const multiTable = (number) => {
  let table = '';

  for(let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`;
  }

  return table;
}
