// Categorize New Member
function openOrSenior(data) {
  function determinateMembership(member) {
    return member[0] >= 55 && member[1] > 7 ? "Senior" : "Open";
  }
  return data.map(determinateMembership);
}
