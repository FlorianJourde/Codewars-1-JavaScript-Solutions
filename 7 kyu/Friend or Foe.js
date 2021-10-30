// Friend or Foe?
function friend(friends) {

  let myFriends = []

  for (i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      myFriends.push(friends[i])
    }
  }
  return myFriends
}

function friend(friends) {
  return friends.filter(n => n.length === 4)
}
