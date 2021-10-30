// Sum of a sequence
const sequenceSum = (begin, end, step) => {
  var sum = 0;

  for (i = begin; i <= end; i += step) {
    sum += i;
  }

  return sum;
};
