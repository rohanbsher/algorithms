/*

Problem Statement: Given a String, find the length of longest substring without any repeating character.

Examples:

Example 1:

Input: s = ”abcabcbb”

Output: 3

Explanation: The answer is abc with length of 3.

Example 2:

Input: s = ”bbbbb”

Output: 1

Explanation: The answer is b with length of 1 units.


"ghiloprte" = 9
"ad" = 2


brute force will be to generate all substrings and check if each has unqiue characters- - O(n^2) * n = O(n^3)

sliding window approach - O(n)

basically have the left and right pointer start at the same beginning of string

expand the sliding wind

ow Right until a duplicate character is found then move the left pointer towards right
to until the window only contains only unique characters 

track the max window size

ahelbb
l
     r

siliding window we use two pointers

*/

function longestSub(word) {

	let charSet = new Set() // track unique chars in current window
	let left = 0;
	let maxLengt = 0;
  
	// move right 
	// abcdee
	// duplicate e = delete b
	for (let right = 0; right < word.length; right++) {
	  // if duplicate is found
	  while (charSet.has(word[right])) {
		charSet.delete(word[left]) // remove the char at left pointer
		left++;
	  }
  
	  // add current char to set
	  charSet.add(word[right])
	  maxLengt = Math.max(maxLengt, right - left + 1)
  
	}
	return maxLengt;
  }
  
  
  
  /*
  
  Problem Statement: You are given an array of ‘N’ integers. You need to find the length of the longest sequence which contains the consecutive elements.
  
  Examples
  Example 1:
  Input:
   [100, 200, 1, 3, 2, 4]
  
  Output:
   4
  
  Explanation:
   The longest consecutive subsequence is 1, 2, 3, and 4.
  
  Input:
   [3, 8, 5, 7, 6]
  
  Output:
   4
  
  Explanation:
   The longest consecutive subsequence is 5, 6, 7, and 8.
  
  
   */
  
  console.log(longestSub("abcabcbb")) // 3
  console.log(longestSub("bbbbb")) // 1
  console.log(longestSub("pwwkew")) // 3
  console.log(longestSub("")) // 0
  console.log(longestSub("aabbcc")) // 2
  