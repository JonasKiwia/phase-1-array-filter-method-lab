// Code your solution here

// findMatching
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// fuzzyMatch
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.startsWith(letters));
}

// matchName
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}


const drivers = [
  { name: "Jaffary", hometown: "Nairobi" },
  { name: "Samueli", hometown: "Kisumu" },
  { name: "Sama", hometown: "Moringa" },
  { name: "Maria", hometown: "Arusha" },
  { name: "Jaffary", hometown: "Kampala" }
];

// Test cases
console.log(findMatching(["Jaffary", "Samueli", "Sama", "Maria"], "Jaffary"));


console.log(fuzzyMatch(["Jaffary", "Samueli", "Sama", "Maria"], "Sa"));


console.log(matchName(drivers, "Jaffary"));
