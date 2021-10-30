// Difference between years. (Level 1)
var howManyYears = function(date1, date2){
  let year1 = parseInt(date1.split('/', 1))
  let year2 = parseInt(date2.split('/', 1))
  return year2 > year1 ? year2 - year1 : year1 - year2
}

var howManyYears = function(date1, date2) {
  const year = s => +s.split('/')[0];
  return Math.abs(year(date1) - year(date2));
}
