// Function raisinAlarm
// Input: cookie(array of strings)
// Output: "Raisin alert!" if a raisin is present, "All good!" otherwise

const raisinAlarm = function (cookie) {
  if (cookie.includes("🍇")) { // 1. If cookie includes "🍇", return "Raisin alert!"
    return "Raisin alert!"
  } else {
    return "All good!" // 2. Else, return "All good!"
  }
}; // End Function
//Test
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
console.log(raisinAlarm(["🍇", "🍇"]));
//Output
Raisin alert!
Raisin alert!
All good!
Raisin alert!

// Function raisinAlarmArray
// Input: cookies(array of arrays of strings)
// Output: Array of responses, one for each input array

const raisinAlarmArray = function (cookies) { // 1. Start function raisinAlarmArray with parameter cookies.
  results = []; // 2. Create an empty array called results.
  for (let i = 0; i < cookies.length; i++) { // 3. Use a for loop to iterate through each cookie in cookies:
    let cookie = cookies[i]; // 4. Set cookie variable equal to the current cookie in the loop.
    let result = raisinAlarm(cookie);// 5. Call raisinAlarm function with the cookie as an argument and assign the result to the result variable.
    results.push(result);// 6. Add the result to the end of the results array using the push method.
  }
  return results;  // 7. Return the results array.
}; // End Function

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);

//Output
[ 'Raisin alert!', 'Raisin alert!', 'All good!' ]
