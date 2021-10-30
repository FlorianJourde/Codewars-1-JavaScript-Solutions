// Remove the minimum
function removeSmallest(numbers) {
  let result = numbers.slice(0);
  let smallestNumber = Math.min.apply(Math, result);
  let indexOfSmallestNumber = result.indexOf(smallestNumber);
  result.splice(indexOfSmallestNumber, 1);
  return result
}

function removeSmallest(numbers) {
  const result = numbers.slice(0);
  result.splice(numbers.indexOf(Math.min(...numbers)), 1);
  return result;
}
