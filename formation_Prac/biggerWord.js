/*
'''
Given a word, return a word using all letters from the original word that is lexicographically after the given word. This new word must meet two criteria:

- It must be greater than the original word
- It must be the smallest word that meets the first condition
 

EXAMPLE(S)
See: https://www.hackerrank.com/challenges/bigger-is-greater/problem
 

Example

Sample Input :
ab
bb
hefg
dhck = 4839 => 4893
dkhc = 4983 => 8349

dhck

split the string 


Sample Output :
ba
"no answer"
hegf 
dhkc = 4893
hcdk


walk through 

ab

ab -> ba 
hefg -> hegf 

FUNCTION SIGNATURE
func biggerWord(input: String) -> String?

brute force - generate mulitple permutations

generating permutations using the integers values of the numbers in the word and then find the next greatest.

problem: 

we have to find the next biggest permutation. 

984562 = 984652 = 984625






'''
*/

function biggerWord(input) {
	let words = input.split('');
	const inputLen = input.length;
	// dhck = 4839 => 4893 =
	i =  2(3)
	j =  3(9)
	
	//dkhc = 4983 => 8943
	i = 0
	j = 2
  
	let i = inputLen - 2 // 4-2 = 2 = c
	while (i >= 0 && words[i] >= words[i + 1]) { // find the right most character that is greater than its next character 
	  i--
	}
  
	let j = inputLen - 1 // 3 = k 
  
	while (words[j] <= words[i]) { // check to see if there is any character that is greater that pivot
	  j--
	}
  
	// swap the characters
	[words[i], words[j]] = [words[j], words[i]]
  
	// whatever is on the right after i + sort it 
  
	return words.join('');
  
  }
  
  
  function biggerIsGreater(w) {
	let i = w.length - 1;
	while (i > 0 && w[i - 1] >= w[i]) {
	  i -= 1;
	}
  
	if (i <= 0) {
	  return null; // no answer
	}
  
	let j = w.length - 1;
	while (w[j] <= w[i - 1]) {
	  j -= 1;
	}
  
	const letters = w.split('');
  
	[letters[j], letters[i - 1]] = [letters[i - 1], letters[j]];
  
	return letters.slice(0, i).join('') + letters.slice(i).sort().join();
  }
  
  
  function biggerIsGreater(w) {
	let i = w.length - 1;
	while (i > 0 && w[i-1] >= w[i]) {
	  i -= 1;
	}
  
	if (i <= 0) {
	  return null; // no answer
	}
  
	let j = w.length - 1;
	while (w[j] <= w[i-1]) {
	  j -= 1;
	}
  
	const letters = w.split('');
  
	[letters[j], letters[i-1]] = [letters[i-1], letters[j]];
  
	return letters.slice(0, i).join('') + letters.slice(i).sort().join();
  }
  