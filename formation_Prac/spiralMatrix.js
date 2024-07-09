/*
'''
Given a matrix, return an array representing the traversal of the matrix in spiral order. Starting in the top left, move right, then down, then left, then up, and then progress inward.

Some problems are "tricky" ones where you have to notice something clever. Sometimes, however, problems are all about demonstrating mastery of your language and being able to manipulate basic data structures. This problem is all about mastering basic counting loops and strategically moving around a 2-dimensional matrix.
 

EXAMPLE(S)
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

one iteration of while - 4 loops


// returns [1, 2, 3, 6, 9, 8, 7, 4, 5]

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15]
]
// returns [1, 2, 3, 6, 9, 12, 15, 14, 13, 10, 7, 4, 5,8,11]
 

Define minRow & maxRow index, as well as minCol & maxCol index

Approach # min and max index
minRow = 0
maxRow = n-1
minCol = 0
maxCol = n-1
Each iteration
    right
      
    down
    left
    up

top = 0
left = 0
right = n[i] - 1
bottom = n - 1

dir = 0 -> right
dir = 1 -> left
dir = 2 -> right to left
dir = 3 -> bottom to top
dir = 4 % 4 = 0 -> right
result = []

insight : if we have a while loop we (top <= bottom & left <= right) {
  
  // go right
  for(let i=left; i<= right; i++){
    result.push(matrix[top][i])
  }
  top++

  //go down
  for(let i=top; i<= bottom; i++){
    result.push(matrix[i][right])
  }
  right--

  // go left
  for(let i=right; i>=left; i--){
    result.push(matrix[bottom][i])
  }
  bottom--


  // go up
  for(let i=bottom; i>=top; i--){
    result.push(matrix[i][left])
  }
  left++

}

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]


top = 0 - 1 - 2
right = 2 - 1 - 0
bottom = 2 - 1 - 2
left = 0 - 1 - 2



FUNCTION SIGNATURE
function spiralOrder(matrix) { // returns a 1D array
def spiralOrder(matrix: list[list[int]]) -> list[int]:
'''
*/


function spiralOrder(matrix) {
	let [top, bottom, left, right] = [0, matrix.length-1, 0, matrix[0].length-1]
	let dir = 0;
	let result = [];
	while(top <= bottom & left <= right){
  
	  if(dir == 0){
		// go right
		for(let i=left; i<= right; i++){
		  result.push(matrix[top][i])
		}
		top++
	  } else if(dir ==1) {
		for(let i=top; i<= bottom; i++){
		  result.push(matrix[i][right])
		}
		right--
	  } else if(dir ==2) {
		for(let i=right; i>=left; i--){
		  result.push(matrix[bottom][i])
		}
		bottom--
		
	  } else {
		for(let i=bottom; i>=top; i--){
		  result.push(matrix[i][left])
		}
		left++
	  }
  
	  dir = (dir + 1) % 4;
	
	
	}
	return result;
  }
  
  const square = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
  ];
  const rect = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[10, 11, 12],
	[13, 14, 15]
  ];
  // console.log(spiralOrder(square))
  // // [1, 2, 3, 6, 9, 8, 7, 4, 5]
  // console.log(spiralOrder(rect));
  // // [1, 2, 3, 6, 9, 12, 15, 14, 13, 10, 7, 4, 5,8,11]
  
  
  function spiralOrder2(matrix) {
	let [top, bottom, left, right] = [0, matrix.length-1, 0, matrix[0].length-1]
	// let dir = 0;
	let result = [];
	while(top <= bottom & left <= right){
  
		// go right
		for(let i=left; i<= right; i++){
			result.push(matrix[top][i])
		}
		top++
	  
		for(let i=top; i<= bottom; i++){
		  result.push(matrix[i][right])
		}
		right--
   
		if(top<=bottom){
		  for(let i=right; i>=left; i--){
			result.push(matrix[bottom][i])
		  }
		  bottom--
		}
		
		if(left<=right){
		  for(let i=bottom; i>=top; i--){
			result.push(matrix[i][left])
		  }
		  left++
		}
		
	}
	return result;
  }
  
  // const square1 = [
  //   [1, 2, 3],
  //   [4, 5, 6],
  //   [7, 8, 9]
  // ];
  const rect2 = [
	[1, 2, 3,4,5],
	[6,7,8,9,10],
	[11,12,13,14,15]
  ];
  console.log(spiralOrder2(square))
  // [1, 2, 3, 6, 9, 8, 7, 4, 5]
  console.log(spiralOrder2(rect2));
  // [1, 2, 3,4,5,10,15,14,13,12,11,6,7,8,9]
  
  