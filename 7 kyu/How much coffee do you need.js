// How much coffee do you need?
function howMuchCoffee(events) {
  let count = 0

  for (i = 0; i < events.length; i++) {
    if (!events[i].match(/^(cw|cat|dog|movie)*$/gi)) {
      count = count
    } else if (events[i].match(/^[A-Z]*$/)) {
      count = count + 2
    } else {
      count = count + 1
    }
  }

  if (count > 3) {
    return 'You need extra sleep'
  } else {
    return count
  }
}

function howMuchCoffee(events) {
  var coffeeCount = 0;
  events.forEach(function(entry) {
    var matches = /^((cw|cat|dog|movie)|(CW|CAT|DOG|MOVIE))$/.exec(entry);
    coffeeCount += matches ? (matches[2] ? 1 : (matches[3]? 2:0)):0;

  });
  return coffeeCount > 3 ? "You need extra sleep":coffeeCount;
}
