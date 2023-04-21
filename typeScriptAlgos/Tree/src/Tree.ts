
export interface TreeNodeInterface {
	val: number
	left: TreeNodeInterface | null
	right: TreeNodeInterface | null
}

export class TreeNode implements TreeNodeInterface {
	constructor(public val: number,
		public left: TreeNodeInterface | null = null,
		public right: TreeNodeInterface | null = null) {
	}
}

export class Tree {

	private root: TreeNodeInterface | null = null

	constructor(root?: TreeNodeInterface) {
		if (root) {
			this.root = root
		}
	}

	preOrderTraversal() {
		this.helperPreOrderTraversal(this.root)
	}

	inOrderTraversal() {
		this.helperInOrderTraversal(this.root)
	}

	postOrderTraversal() {
		this.helperPostOrderTraversal(this.root)
	}

	private helperPreOrderTraversal(node: TreeNodeInterface | null): void {
		if (!node) {
			return;
		}

		console.log(node.val)
		this.helperPreOrderTraversal(node.left)
		this.helperPreOrderTraversal(node.right)
	}

	private helperInOrderTraversal(node: TreeNodeInterface | null): void {
		if (!node) {
			return
		}

		this.helperInOrderTraversal(node.left)
		console.log(node.val)
		this.helperInOrderTraversal(node.right)
	}

	private helperPostOrderTraversal(node: TreeNodeInterface | null): void {
		if (!node) {
			return
		}

		this.helperPostOrderTraversal(node.left)
		this.helperPostOrderTraversal(node.right)
		console.log(node.val)
	}

	/*
					1				  1  
				   / \				 / 
				  2   3			    2   		 
				 / \ / \		   / \ 
				4  5 6  7		  4	  5
	
	1+1 = 2  2
	
	*/

	// mergeTrees(t1: check, t2: check): check {
	// 	if (!t1) {
	// 		return t2
	// 	}

	// 	if (!t2) {
	// 		return t1
	// 	}

	// 	t1.val += t2.val
	// 	t1.left = this.mergeTrees(t1.left, t2.left)
	// 	t1.right = this.mergeTrees(t1.right, t2.right)

	// 	return t1
	// }

	// /*
	// draw a tree:
	
	// 				1
	// 			   / \
	// 			  2   3
	// 				 / \
	// 				 6  7
	// 1 -> 2 -> 
	
	
	
	// */

	// leftViewOFTree(tree: check): void {
	// 	if (!tree) {
	// 		return
	// 	}

	// 	let map = new Map<number, number>()
	// 	let level = 0

	// 	function traverse(node: check, level: number): void {

	// 		if (!node) {
	// 			return
	// 		}

	// 		if (!map.has(level)) {
	// 			map.set(level, node.val)
	// 		}
	// 		traverse(node?.left, level + 1)
	// 		traverse(node?.right, level + 1)
	// 	}

	// 	traverse(tree, 0)
	// 	console.log(map.values())
	// }

	// goodNodes(root: check): number {

	// 	if (!root) {
	// 		return 0
	// 	}

	// 	let answer = 0

	// 	function dfs(root: check, max: number): void {
	// 		if (!root) {
	// 			return
	// 		}

	// 		if (root.val >= max) {
	// 			answer++
	// 			max = root.val
	// 		}

	// 		dfs(root.left, max)
	// 		dfs(root.right, max)
	// 	}

	// 	dfs(root, root.val)

	// 	return answer
	// };

	// printTree(tree: check): void {
	// 	if (!tree) {
	// 		return
	// 	}

	// 	process.stdout.write(tree.val + " - ")
	// 	this.printTree(tree.left)
	// 	this.printTree(tree.right)
	// }
}