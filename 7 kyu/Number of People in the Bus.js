// Number of People in the Bus
var number = function(busStops){
  let sum = 0

  for (i = 0; i < busStops.length; i++) {
    sum = sum + busStops[i][0] - busStops[i][1]
  }

  return sum
}

const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

var number = function(busStops){
  var totalPeople = 0;
  for (var i=0; i<busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
}
