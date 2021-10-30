// Do I get a bonus?
function bonusTime(salary, bonus) {
  if (bonus === true) {
    return `£${salary * 10}`
  } else {
    return `£${salary}`
  }
}

function bonusTime(salary, bonus) {
  return bonus ? `£${10 * salary}` : `£${salary}`;
}
