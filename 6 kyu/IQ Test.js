// IQ Test
function iqTest(numbers) {
  numbers = numbers.split(' ').map(function (el) { return parseInt(el) })

  let odd = numbers.filter(function (el) { return el % 2 === 1 })
  let even = numbers.filter(function (el) { return el % 2 === 0 })

  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1)
}

function iqTest(numbers) {
  numbers = numbers.split(' ')

  var evens = []
  var odds = []

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] & 1) {
      odds.push(i + 1)
    } else {
      evens.push(i + 1)
    }
  }

  return evens.length === 1 ? evens[0] : odds[0]
}
