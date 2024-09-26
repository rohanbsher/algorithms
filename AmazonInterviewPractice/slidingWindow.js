// You are given a string s and an integer k.You can choose any character of the string and change it to any other uppercase English character.You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.


//   Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

//   Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.


/*
test cases: 

k is 0 and all the characters are same then return the length of the string

abcd and k is 4 return the length of the string

string is "" return 0


approach 

use a sliding window approach and keep a track of the longest sequence of repeating characters and then maintain a window



left = 0 
right = length of the string
freqMap // count the number of times chars are being repeated


count the number of times each character is being repeated in the current window

move the right pointer

*/

function longestSubstring(s, k) {

	let freqMap = new Map();
	let left = 0
	let maxCount = 0
	let maxLength = 0
  
	for (right = 0; right < s.length; right++) {
	  let char = s[right];
  
	  // track the char at right pointer
	  freqMap.set(char, (freqMap.get(char) || 0) + 1)
  
	  // keep track of freq of most common char
	  maxCount = Math.max(maxCount, freqMap.get(char));
  
	// ABBA right = 2 left = 0 
	// if number of changes required is greater that k
	  if (right - left + 1 - maxCount > k) {
		// shink the window from left
		let charLeft = s[left]
		freqMap.set(charLeft, freqMap.get(charLeft) - 1)
		left++;
	  }
  
	  maxLen = Math.max(maxLength, right - left + 1);
	}
  
	return maxLen
  }
  
  console.log(longestSubstring("ABAB", 2))
  console.log(longestSubstring("AABABBA", 1))
  
  console.log(longestSubstring("ABB", 2))
  
  
  console.log(longestSubstring("A", 1)) // 0
  
  console.log(longestSubstring("ABCD", 4)) // 4
  
  console.log(longestSubstring("AAAA", 0)) // 4