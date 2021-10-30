// Leap Years
function isLeapYear(year) {
  return ((Number.isInteger(year / 4)) && (Number.isInteger(year / 400) || !Number.isInteger(year / 100))) ? true : false
}

function isLeapYear(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}
