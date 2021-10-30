// Find the calculation type
function calcType(a, b, res) {
  if (a + b === res) {
    return 'addition'
  } else if (a * b === res) {
    return 'multiplication'
  } else if (a - b === res) {
    return 'subtraction'
  } else if (a / b === res) {
    return 'division'
  }
}

const calcType = (a, b, res) =>
  a + b === res ? 'addition' :
    a - b === res ? 'subtraction' :
      a * b === res ? 'multiplication' :
        a / b === res ? 'division' :
          null;

function calcType(a, b, res) {
  switch (res) {
    case a + b:
      return 'addition';
      break;
    case a - b:
      return 'subtraction';
      break;
    case a / b:
      return 'division';
      break;
    case a * b:
      return 'multiplication';
  }
}
