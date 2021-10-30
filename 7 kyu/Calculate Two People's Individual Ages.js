// Calculate Two People's Individual Ages
function getAges(sum,difference){
  let age1 = (sum / 2) + (difference / 2)
  let age2 = (sum / 2) - (difference / 2)

  if (sum >= 0 && difference >= 0 && age1 >= 0 && age2 >= 0) {
    return [age1, age2]
  } else {
    return null
  }
};

const getAges = (sum, difference) =>
  sum < 0 || difference < 0 || sum < difference ? null : [(sum + difference) / 2, (sum - difference) / 2];
