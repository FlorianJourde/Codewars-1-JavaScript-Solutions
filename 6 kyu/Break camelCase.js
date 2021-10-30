// Break camelCase
function solution(string) {
  return string
    .split('')
    .map(char => (char === char.toUpperCase() ? ` ${char}` : char))
    .join('')
}

const breakCamelCase = string => string.replace(/([A-Z])/g, ' $1')
