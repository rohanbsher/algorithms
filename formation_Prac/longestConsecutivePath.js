/*
'''
In a binary tree, find the length of the longest consecutive sequence path.

A path is any route that only goes from parent to child (and never back up!)
 

EXAMPLE(S)
    1  
    \  
      3 
     / \ 
    2   4  
   /     \   
  1       5 
 /
0
In this tree, the longest path would be 3 -> 4 -> 5. 1 is not included because 3 is not consecutive with 1. 2 is not included because it would need to travel back up to a parent to continue the path.
 

FUNCTION SIGNATURE
function longestPath(root) // returns a number
'''
 

do a dfs on the tree

check if the parent node is 1 greater that the child node increment length
*/


class Node {
	constructor(value, left=null, right=null) {
	  this.value = value;
	  this.left = left;
	  this.right = right;
	}
  }
  
  
  function longestPath(root) {
  
	let maxLen = 0;
  
	function dfs(node, parent, length) {
	  if (node === null) {
		return
	  }
  
	  if (parent !== null && node.value === parent.value + 1) {
		length = length + 1
	  } else if (parent !== null && node.value === parent.value - 1) {
		length = length + 1
	  } else {
		length = 1 // reset the length
	  }
  
	  maxLen = Math.max(length, maxLen);
  
	  dfs(node.left, node, length)
	  dfs(node.right, node, length)
	  
	}
  
	dfs(root, null, 0)
  
	return maxLen
  
  }
  
  
  function longestPath1(root) {
  
	let maxLen = 0;
  
	function dfs(node) {
	  if (node === null) {
		return [0, 0]
	  }
  
	  let inc = 1
	  let dec = 1
  
	  if (node.left !== null) {
		let [leftInc, leftDec] = dfs(node.left)
		if (node.value === node.left.value + 1) {
		  inc = leftInc + 1
		} else if (node.value === node.left.value - 1) {
		  dec = leftDec + 1
		}
	  }
  
	  if (node.right !== null) {
		let [rightInc, rightDec] = dfs(node.right)
		if (node.value === node.right.value + 1) {
		  inc = Math.max(inc, rightInc + 1)
		} else if (node.value === node.right.value - 1) {
		  dec = Math.max(dec, rightDec + 1)
		}
	  }
  
	  maxLen = Math.max(maxLen, inc, dec);
  
	  return [inc, dec]
	}
  
	dfs(root)
  
	return maxLen
  
  }
  
  let root = new Node(1)
  root.right = new Node(3)
  root.right.left = new Node(2)
  root.right.right = new Node(4)
  root.right.right.right = new Node(5)
  
  
  let root1 = new Node(1)
  root1.right = new Node(3)
  root1.right.left = new Node(2)
  root1.right.right = new Node(4)
  root1.right.right.right = new Node(5)
  root1.right.right.right.right = new Node(6)
  root1.right.right.right.right.right = new Node(7)
  
  let root2 = new Node(1)
  root2.right = new Node(3)
  root2.right.left = new Node(2)
  root2.right.left.left = new Node(1)
  root2.right.left.left.left = new Node(0)
  root2.right.left.left.left.right = new Node(1)
  root2.right.right = new Node(4)
  root2.right.right.right = new Node(5)
  
  console.log(longestPath1(root)) // 3
  console.log(longestPath1(root1)) // 5
  console.log(longestPath1(root2)) // 4
  
  // 2 -> 1 -> 0