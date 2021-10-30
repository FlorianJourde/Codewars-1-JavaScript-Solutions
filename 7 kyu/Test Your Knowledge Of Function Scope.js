// Test Your Knowledge Of Function Scope
let add = a => b => a + b

function add(x) {
  return function(y) {
    return x + y
  }
}
