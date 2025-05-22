// Q1: Write a function that takes person age as a number as input and determines, person is eligible or not for voting.
function isEligibleForVoting(age) {
  if (age >= 18) {
    console.log("Eligible for voting");
  } else {
    console.log("Not eligible for voting");
  }
}

// Example
isEligibleForVoting(20); // Eligible for voting