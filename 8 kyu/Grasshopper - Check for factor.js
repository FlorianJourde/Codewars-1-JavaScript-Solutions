// Grasshopper - Check for factor
function checkForFactor(base, factor) {
  if (base % factor !== 0) {
    return false
  } else {
    return true
  }
}

function checkForFactor(base, factor) {
  return base % factor === 0;
}
