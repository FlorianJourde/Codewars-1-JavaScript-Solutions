// Two to One
function longest(s1, s2) {
  let arr = []

  for (i = 0; i < s1.length; i++) {
    if (!arr.includes(s1[i])) {
      arr.push(s1[i])
    }
  }

  for (i = 0; i < s2.length; i++) {
    if (!arr.includes(s2[i])) {
      arr.push(s2[i])
    }
  }

  return arr.sort().join('')
}

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}

function longest(s1, s2) {
  s3 = s1 + s2;
  s4 = s3.split("");
  s4 = s4.sort().filter(function(element, index, array){
    return element !== array[index - 1];
  });
  return s4.join("");
}
