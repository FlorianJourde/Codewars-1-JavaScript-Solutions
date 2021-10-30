// Sequence generator
function sequence(n, pattern) {
  const type = typeof pattern
  const array = Array.from({ length: n })
  if (type === 'function') return array.map(pattern)
  return array.fill(pattern)
}

function sequence(n, pattern) {
  const arr = Array.from({ length: n })

  if (typeof pattern === 'function') {
    return arr.map(pattern);
  }

  return arr.fill(pattern)
}

function sequence(n, pattern) {
  return Array.from({length: n}, typeof pattern === "function" ? pattern : () => pattern)
}
