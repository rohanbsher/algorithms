/*
'''
Given a 3x3 lock screen in the following arrangement:

1 2 3
4 5 6
7 8 9

count the total number of unlock patterns that use N numbers.

A pattern is valid if the following criteria are met:
- no number is used more than once
- a path from one number to another does not directly pass through an unused number. eg:
  - 2 -> 1 -> 3 is valid, but 1 -> 3 is not valid because it directly passes through the unused number 2

NOTE: It is possible to go from 2 to 9 (or 3 to 4) because the pattern may move between rows and colunns on diagonals.


EXAMPLE(S)
1 2 3
4 5 6
7 8 9

4 -> 1 -> 3 -> 6 is invalid because 1 -> 3 passes through the unused 2

2 -> 4 -> 1 -> 3 -> 6 is valid
1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 is valid
 
input: values betwwen 1-9
output: # of total combinations of input value

1 - 3 
1 - 7
4 - 6
7 - 9 
3 - 9
3 - 7
2 - 8
1 - 9

FUNCTION SIGNATURE
function countPatterns(numberOfKeys) {
def countPatterns(numberOfKeys: int) -> int:
'''

console.log(countPatterns(1) == 9)
console.log(countPatterns(2) == 56)
console.log(countPatterns(3) == 320)
console.log(countPatterns(4) == 1624)

x  2 3
4  x 6
7  8 9

5->1->9
*/
// [1,2,3,4,5,6,7,8,9]


function isValidNum(prevNum, currNum, visited) {
	const blocks = [
	  [],
	  [0, 0, 0, 2, 0, 0, 0, 4, 0, 5], // index 1
	  //  1. 2. 3. 4. 5. 6. 7. 8. 9
	  [0, 0, 0, 0, 0, 0, 0, 0, 5, 0], // index 2
	  [0, 2, 0, 0, 0, 0, 0, 5, 0, 6],
	  [0, 0, 0, 0, 0, 0, 5, 0, 0, 0],
	  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	  [0, 0, 0, 0, 5, 0, 0, 0, 0, 0],
	  [0, 4, 0, 5, 0, 0, 0, 0, 0, 8],
	  [0, 0, 5, 0, 0, 0, 0, 0, 0, 0],
	  [0, 5, 0, 6, 0, 0, 0, 8, 0, 0],
	];
	console.log(prevNum, currNum)
	if (blocks[prevNum][currNum] != 0) {
	  return visited.has(blocks[prevNum][currNum]);
	}
	return true;
  }
  
  function countPatterns(numberOfKeys) {
	let output = 0;
	dfs(0, new Set());
	return output;
  
	function dfs(prevNum, visited) {
	  if (visited.size === numberOfKeys) {
		output += 1;
		return;
	  }
  
	  for (let curNum = 1; curNum <= 9; curNum++) {
		if (!visited.has(curNum)) {
		  if (isValidNum(prevNum, curNum, visited)) {
			visited.add(curNum);
			// console.log(visited)
			dfs(curNum, visited);
			visited.delete(curNum);
		  }
		}
	  }
	}
  }
  
  console.log(countPatterns(1) == 9);
  console.log(countPatterns(2))
  