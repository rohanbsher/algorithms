import TreeNode from './tree';

/*
				1				  1  
			   / \				 / 
			  10   9			    2   		 
			 / \ / \		   / \ 
			4  5 6  7		  4	  5

*/

let tree = new TreeNode(1, new TreeNode(10, new TreeNode(4), new TreeNode(5)), 
		  new TreeNode(9, new TreeNode(6), new TreeNode(7)))
let tree2 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)))

console.log("Merge trees : ")
console.log("Good nodes trees : ")
console.log("Left view of trees : ")
// tree.mergeTrees(tree, tree2)
// tree.leftViewOFTree
console.log(tree.leftViewOFTree(tree))


// tree.printTree(tree)

// console.log("Pre Order Traversal: ")
// console.log("Pre Order Traversal: ")
// console.log("Pre Order Traversal: ")
// tree.preOrderTraversal(tree)
// console.log("\nIn Order Traversal: ")
// tree.inOrderTraversal(tree)
// console.log("\nPost Order Traversal:")
// tree.postOrderTraversal(tree)