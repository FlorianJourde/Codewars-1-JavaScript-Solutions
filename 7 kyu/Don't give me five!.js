// Don't give me five!
function dontGiveMeFive(start, end) {
  let count = 0

  for (i = start; i < end + 1; i++) {
    if (!/5/.test(i)) {
      count++
    }
  }

  return count
}
