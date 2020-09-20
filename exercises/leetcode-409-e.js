// LeetCode 409: Longest Palindrome (Easy)

/**
 * Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
 *
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 *
 * Example 1:
 * Input: s = "abccccdd"
 * Output: 7
 * Explanation:
 * One longest palindrome that can be built is "dccaccd", whose length is 7.
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const counts = {};
  let sum = 0;
  let oddPresent = false;

  for (let i = 0; i < s.length; i++) {
    counts[s[i]] = (counts[s[i]] || 0) + 1;
  }

  for (let letter in counts) {
    if (counts[letter] % 2 === 0) {
      sum += counts[letter];
    } else {
      // THIS IS WHERE YOU INCLUDE ODD COUNTS
      // toggle oddPresent to true
      oddPresent = true;
      // for now, only add the odd count minus 1, (now an even number)
      // that extra one gets added in later
      sum += counts[letter] - 1;
    }
  }

  if (oddPresent) sum += 1;

  return sum;
};

// can loop through the string and hold the count of each letter in an object
// a palindrome requires each letter to be a multiple of 2 (a - b - b - a)
// a letter than be an odd number if the one of the letters is in the middle (only one letter is capable of being an odd number)
// add all evens and 1 odd number

// EDIT: even though there are odd numbers, you can subtract 1, and add the number (now even) to the sum value, because you can choose to use 2 letters and not the third!
// (you'll add the third at the end, because you found an odd, and can add 1 odd count of a letter to the palindrom)
