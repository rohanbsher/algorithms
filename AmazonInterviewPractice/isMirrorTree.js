/*

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Input: root = [1,2,2,3,4,4,3]
Output: true

          1
         /\
        2  2
        /


Input: root = [1,2,2,null,3,null,3]
Output: false

https://leetcode.com/problems/symmetric-tree/

Test cases :

O(n) -> time
O(h) -> space will be height of the tree / recursion stack

algorithm : 
helper function that takes two nodes and checks whether it is symmetric 

*/


// helper function

class Node{

	constructor(val, left = null, right = null) {
	  this.val = val
	  this.left = left
	  this.right = right;
	}
  }
  
  let root = 
  
  function isSymmetric(root) {
	//helper function for recursive calls
	function isMirror(root1, root2) {
	  //base cases 
	  // if both the roots are null they are mirrors
	  if (root1 === null && root2 === null) return true;
	  // if one of them is null they are not mirrors
	  if (root1 === null || root2 === null) return false;
	  // step to compare the current value and left and right subtrees 
	  return (root1.val === root2.val) && 
		isMirror(root1.left, root2.right) &&
		isMirror(root1.right, root2.left)
	}
  
	return isMirror(root)
  }
  