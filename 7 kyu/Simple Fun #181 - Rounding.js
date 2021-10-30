// Simple Fun #181: Rounding
function rounding(n, m) {
  return n << 1 === m ? n : Math.round(n / m) * m
}
