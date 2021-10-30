// Split Strings
function solution(str) {
  const matchStr = str.match(/\w{1,2}/g)

  if (str.length === 0) {
    return []
  }

  const result = matchStr.map((elm) => {
    return elm.length % 2 ? elm + '_' : elm
  })

  return result
}

function solution(str) {
  arr = [];
  for (var i = 0; i < str.length; i += 2) {
    second = str[i + 1] || '_';
    arr.push(str[i] + second);
  }
  return arr;
}

function solution(s) {
  return (s + "_").match(/.{2}/g) || []
}
