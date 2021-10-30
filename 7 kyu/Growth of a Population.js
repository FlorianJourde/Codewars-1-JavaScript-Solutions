// Growth of a Population
function nbYear(p0, percent, aug, p) {
  let x = p
  let realPercent = percent * 0.01
  let inhabitants = p0
  let years = 0

  while (inhabitants < x) {
    inhabitants += inhabitants * realPercent + aug
    years++
  }

  return years
}

function nbYear(p0, percent, aug, p) {
  for (var y = 0; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
  return y;
}
