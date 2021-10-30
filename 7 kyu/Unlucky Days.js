// Unlucky Days
function unluckyDays(year){
  const names = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  const fridays13 = months.map(month => {
    const date = new Date(year, month - 1, 1)
    let count = 0

    while (date.getMonth() === month - 1) {
      const day = `${date.getDate()}-${names[date.getDay()]}`

      if (day === '13-fri') count++
      date.setDate(date.getDate() + 1)
    }

    return count
  })

  return fridays13.reduce((total, friday) => total + friday, 0)
}

function unluckyDays(year){
  let unlucky = 0;
  for (var i = 0; i < 12; i++) {
    if(new Date(year, i, 13).getDay() === 5){
      unlucky++;
    }
  }
  return unlucky;
}
