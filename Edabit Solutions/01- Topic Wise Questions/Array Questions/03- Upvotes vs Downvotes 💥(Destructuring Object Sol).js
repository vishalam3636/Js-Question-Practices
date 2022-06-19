// https://edabit.com/challenge/654ABGmNS5GqscE8C

/*
❓❓❓❓ Upvotes vs Downvotes ❓❓❓❓ 

Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

📝Notes:
You can expect only positive integers for vote counts.
*/

// My Sol-01:
function getVoteCount(votes) {
  return votes.upvotes - votes.downvotes;
}

console.log(getVoteCount({ upvotes: 13, downvotes: 0 })); // 13
console.log(getVoteCount({ upvotes: 2, downvotes: 33 })); // -31
console.log(getVoteCount({ upvotes: 132, downvotes: 132 })); // 0
console.log(getVoteCount({ upvotes: 0, downvotes: 0 })); // 0
console.log(getVoteCount({ downvotes: 4, upvotes: 1 })); // -3

console.log("Others Solution");
// Other Interesting SOlution:
function getVoteCountOther(votes) {
  const { upvotes, downvotes } = votes;
  return upvotes - downvotes;
}

console.log(getVoteCountOther({ upvotes: 13, downvotes: 0 })); // 13
console.log(getVoteCountOther({ upvotes: 2, downvotes: 33 })); // -31
console.log(getVoteCountOther({ upvotes: 132, downvotes: 132 })); // 0
console.log(getVoteCountOther({ upvotes: 0, downvotes: 0 })); // 0
console.log(getVoteCountOther({ downvotes: 4, upvotes: 1 })); // -3
