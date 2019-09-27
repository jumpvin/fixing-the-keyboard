// Write a function that returns the broken key(s) of a keyboard. 
// Broken keys should be ordered by when they first appear in the sentence.
// Only one broken key per letter should be listed.
// Letters will all be in lower case.
// If there is no broken key it should return -1.

// The function looks like:
// findBrokenKeys(correct phrase, what you actually typed)

// Examples: 
// findBrokenKeys("hakuna matata", "hqkunq mqtqtq") => return ["a"]


findBrokenKeys = (str1, str2) => {
  // write your code HERE
  let broken = [];
  for (let i = 0; i< str1.length; i++) {
    if (str1[i] === str2[i]){} else { if(!broken.includes(str1[i])) broken.push(str1[i])}
  }
  return broken.length? broken: -1;



};

module.exports = findBrokenKeys;