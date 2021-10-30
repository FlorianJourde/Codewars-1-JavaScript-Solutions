// Regex validate PIN code
function validatePIN (pin) {
  if (pin.length === 4 || pin.length === 6) {
    if (/^\d+$/.test(pin)) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}
