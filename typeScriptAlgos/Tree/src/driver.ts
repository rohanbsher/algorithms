import { Tree, TreeNode } from './tree';

/*
				1				  1  
			   / \				 / 
			  10   9			2   		 
			 / \ / \		   / \ 
			4  5 6  7		  4	  5

*/

let createTree = new TreeNode(1, new TreeNode(10, new TreeNode(4), new TreeNode(5)),
	new TreeNode(9, new TreeNode(6), new TreeNode(7)))
let createTree1 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)))

let emptyTree = new Tree()
let tree1 = new Tree(createTree)
let tree2 = new Tree(createTree1)

tree1.preOrderTraversal()
console.log()
tree2.inOrderTraversal()
// emptyTree.postOrderTraversal()




