// Given an array nums of distinct integers, return all the possible permutations.You can return the answer in any order.

//   Example 1:

// Input: nums = [1, 2, 3]
// Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

// Example 2:

// Input: nums = [0, 1]
// Output: [[0, 1], [1, 0]]

// Example 3:

// Input: nums = [1]
// Output: [[1]]


/*

test : [] - []
[0] - [0]
[1 1 1] - [1, 1, 1]
[1 1 2 ]- [ 1, 2, 1], [2, 1, 1]

// no duplicates

if an array has n elements find n! 3 = 3*2*1 = 6 permutations

one way to solve this is using backtracking

alogrithm 

base case : if there is only one element return the array itself

Backtracking :
  [1, 2, 3] for every i position swap with the first element
  generate premutations for remaining elements
  backtracking and undo the swap
  add valid elements in the array

  O(n!) time
  O(n) space

*/


function permutation(nums) {
	const result = []; // store valid combinations
  
	function backtracking(start) {
	  if (start === nums.length) { // reached the end base case
		result.push([...nums]);
		return;
	  }
  
	  for (let i = start; i < nums.length; i++) {
		[nums[start], nums[i]] = [nums[i], nums[start]]; // replace
		backtracking(start + 1);
		[nums[start], nums[i]] = [nums[i], nums[start]];
	  }
	}
  
	backtracking(0);
  
	return result;
  }
  
  console.log(permutation([1, 2, 3]));
  
  
  
  // Given a binary tree, find the lowest common ancestor(LCA) of two given nodes in the tree.
  
  // According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
  
  // Example 1:
  
  // Input: root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 1
  // Output: 3
  // Explanation: The LCA of nodes 5 and 1 is 3.
  
  // https://assets.leetcode.com/uploads/2018/12/14/binarytree.png
  
  
  class TreeNode{
  
	constructor(val) {
	  this.val = val
	  this.left = this.right = null
	}
  
  }
  
  
  function lca(root, p, q) {
  
	// base case 
	if (root === null || root === p || root === q) {
	  return root;
	}
  
	let left = lca(root.left, p, q)
	let right = lca(root.right, p, q)
  
	if (left !== null && right !== null) {
	  return root;
	}
  
	return left !== null ? left : right
  }
  
  const root = new TreeNode(3)
  root.left = new TreeNode(5)
  root.right = new TreeNode(1)
  
  const p = root.right
  const q = root.left
  
  console.log(lca(root, p, q).val)
  
  
  /*
  def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
	  if not root or root == p or root == q:
		return root
  
	  l = self.lowestCommonAncestor(root.left, p, q)
	  r = self.lowestCommonAncestor(root.right, p, q)
  
	  if l and r:
		return root
	  return l or r
	  
  
  def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
		  
		  def recurse_tree(current_node):
  
			  # If reached the end of a branch, return False.
			  if not current_node:
				  return False
  
			  # Left Recursion
			  left = recurse_tree(current_node.left)
  
			  # Right Recursion
			  right = recurse_tree(current_node.right)
  
			  # If the current node is one of p or q
			  mid = current_node == p or current_node == q
  
			  # If any two of the three flags left, right or mid become True.
			  if mid + left + right >= 2:
				  self.ans = current_node
  
			  # Return True if either of the three bool values is True.
			  return mid or left or right
  
		  # Traverse the tree
		  recurse_tree(root)
		  return self.ans
  
		  
  
  
  https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
  
  */