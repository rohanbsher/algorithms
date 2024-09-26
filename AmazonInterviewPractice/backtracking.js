/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]

 
 "234" = 3 ^ 3 = 17

*/










function letterComb(digits) {


	// create a mapping
	let digitMap = {
	  2: ['a', 'b', 'c'],
	  3: ['d', 'e', 'f'],
	  4: ['g', 'h', 'i'],
	  5: ['j', 'k', 'l'],
	  6: ['m', 'n', 'o'],
	  7: ['p', 'q', 'r', 's'],
	  8: ['t', 'u', 'v'],
	  9: ['w', 'x', 'y', 'z']
	};
  
	if (digits.length === 0) {
	  return [];
	}
  
	const result = [];
  
	function backTrack(currentCombination, nextDigits) {
  
	  // base case if there are no digits add to current combinations
	  if (nextDigits.length === 0) {
		result.push(currentCombination)
	  } else {
		// find the next digits
		let currDigit = nextDigits[0]
  
		//grab the letters mapped to that digit
		let letters = digitMap[currDigit];
  
		for (let letter of letters) {
		  // currentCombination.push(letter)
		  backTrack(currentCombination + letter, nextDigits.slice(1))
		  // currentCombination.pop()
		}
	  }
  
	}
  
	backTrack("", digits)
  
	return result
  }
  
  console.log(letterComb("2345")) // 3 or 4 depending on the digit raise to power ^ n 3 * 3 * 3 * 3 
  
  // https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
  
  /*
  
  Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
  
   
  
  Example 1:
  
  Input: n = 3
  Output: ["((()))","(()())","(())()","()(())","()()()"]
  Example 2:
  
  Input: n = 1
  Output: ["()"]
  
  
  */
  
  function parentheses(numOfPairs) {
  
	let result = [];
  
	function backTrack(currentCombi, open, close) {
  
	  //base case valid combin
	  if (currentCombi.length === 2 * numOfPairs) {
		result.push(currentCombi);
		return;
	  }
  
	  if (open < numOfPairs) {
		backTrack(currentCombi + '(', open + 1, close)
	  }
  
	  if (close < open) {
		backTrack(currentCombi + ')', open, close + 1)
	  }
	}
  
	backTrack("", 0, 0)
	return result
  }
  
  console.log(parentheses(1))
  console.log(parentheses(2))
  console.log(parentheses(3))
  console.log(parentheses(4))