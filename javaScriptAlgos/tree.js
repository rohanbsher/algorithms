
class Tree {
	constructor(val, left=null, right=null){
	  this.val = val
	  this.left = left
	  this.right = right
	}
  }
  
  
  let tree1 = new Tree(1, new Tree(2, new Tree(3), new Tree(5)), new Tree(7))
  let tree2 = new Tree(1)
  let tree3 = new Tree()
  let tree4 = new Tree(1, new Tree(2, new Tree(3, new Tree(4))))
  
  function isValThere(root, target){
  
	if(!root){
	  return 
	}
  
	let stack = [root]
  
	while(stack.length > 0){
	  let node = stack.pop()
  
	  if(node.val === target){
		return true
	  }
  
	  if(node.left){
		stack.push(node.left)
	  }
	  if(node.right){
		stack.push(node.right)
	  }
	}
  
	return false
  }
  
  
  function findHeight(root){
	if(!root){
	  return -1
	}
  
	return 1 + Math.max(findHeight(root.left), 
	findHeight(root.right))
  }
  
  // console.log(isValThere(tree1, 4))
  console.log(findHeight(tree1))
  console.log(findHeight(tree2))
  console.log(findHeight(tree3))
  console.log(findHeight(tree4))
  
  
  
  
  
  
  
  
  
  
  
  
  /*
  '''
  Cell Tower Strength
  
  You are given an array representing the positions of cell towers along a 1-dimensional line. You are given a second array representing customers' positions along the same line. Given these two inputs, you must determine the minimum signal strength *k* such that every customer is covered by at least one cell tower. All cell towers must have the exact same signal strength and cover customers to their left and right equally.
  
  These arrays can be imagined as street addresses along a road. At each address, there might be a customer, and there might also be a tower at that location.
   
  
  EXAMPLE(S)
  Let's say cell towers are at: [0, 2, 6, 10]
  and customers are at: [0, 5, 11]
  
  In this case, you only need a cell distance of 1, because customer 5 would be covered by 6 and customer 11 would be covered by 10.
  
  If the customers were at: [0, 4, 13], you'd need a distance of 3 in order for customer 13 to be covered by 10.
   
  
  FUNCTION SIGNATURE
  def search(customers: list[int], towers: list[int]) -> int:
  '''
  
  
  
  assuming array is sorted consecutively return the minimum signal strength
  
  [0, 2, 5]
  [0, 2, 5]
  min = 0
  
  [1, 3, 5]
  [0, 2, 9]
  min = 4
  
  [1, 2, 3]
   t
  [7, 9, 11]
   c
  
  [4]
  min = 8 = 11-3
  
  
  
  */
  
  // function search(customers, towers){
  //   let towerPointer = 0
  //   let minumumStrength = -Infinity
  
  //   for(let i=0 ; i<customers.length; i++){
  //       let difference = towers[towerPointer] - customers[i]
  //       if(difference > minumumStrength){
  //         minumumStrength = difference
  //       }
  //   }
  // }
  
  // console.log(search([0,2,4,6], [1,3,5,7]))
  // console.log(search([2], [2]))
  // console.log(search([3,6], [11]))
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
  
  Q. Given a non-empty binary tree, find the maximum path sum.
  
  Note:
  • A path is any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.
  
  Example:
  • Given a binary tree: 
			 1
			/ \    
		   2   3
		  /     
		-1
  
		a path is a node connected with two other nodes
  
  // returns 6 (1 + 2 + 3)
  
  */
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
  '''
  
  https://www.youtube.com/watch?v=sduu1n5uZUE
  
  You're given a 2d array with 1's and 0's. 1's represent walls, and 0's represent open, walkable space. A robot starts on the top left and goes down to the bottom right. This robot can move in any the cardinal (NSEW) direction, not diagonals.
  
  Output the shortest path a robot should take from the top left to the bottom right. If there are multiple shortest paths, any path is valid. If there is no valid path, return None/null.
   
  
  EXAMPLE(S)
  Maze:
  0 0 0 0
  1 1 0 0
  0 0 0 1
  0 1 1 0
  0 0 0 0
  
  getMazePath(maze) -> [(0, 0), (0, 1), (0, 2), (1, 2), (2, 2), (2, 1), (2, 0), (3, 0), (4, 0), (4, 1), (4, 2), (4, 3)]
  
  [
	[0, 0, 0, 0],
	[1, 1, 0, 0],
	[0, 0, 0, 1],
	[0, 1, 1, 0],
	[0, 0, 0, 0],
  ]
  
  Explanation: The robot needs to travel around the two rows of walls. We're representing the path returned by annotating it with Xs.
  x x x 0
  1 1 x 0
  x x x 1
  x 1 1 0
  x x x x
   
  
  FUNCTION SIGNATURE
  def getMazePath(maze):
  '''
  *//*
  '''
  🔎 EXPLORE
  What are some other insightful & revealing test cases?
  [
	[0, 0, 0],
	[0, 1, 0],
	[0, 0, 0]
  ]  
  #1 [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]]
  #2 [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2]]
   
  [
	[0, 0, 0],
	[0, 1, 0],
	[0, 0, 0]
  ]
  
  # [[0, 0], [1, 0], [1, 1], [2, 1], [2, 2]]
  
  [
	[0, 0, 0, 1],
	[1, 1, 0, 1],
	[0, 0, 0, 1],
	[0, 0, 0, 0],
	[0, 1, 1, 1],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
  ]
  DFS
  
  [
	[0, 0, 0, 1, 1, 1],
	[1, 1, 0, 0, 0, 1],
	[1, 0, 0, 1, 0, 1],
	[1, 0, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 1],
  ]
  
  BFS
  
  [
	[1, 0, 0],
	[0, 0, 0]
  ],
  
  -> return empty array
  
  [
	[0, 0, 0],
	[0, 0, 1]
  ]
  
  -> return empty array
  
  [
	[0, 1, 0],
	[0, 1, 0],
  ]
  
  -> return empty array
  
  
  
  🧠 BRAINSTORM
  What approaches could work?
  
  let firstRow = input.at(0);
  let lastRow = input.at(-1);
  let startCoordinate = firstRow.at(0);
  let endCoordinate = lastRow.at(-1);
  
  if they're 1, then return [];
  
  Algorithm 1:
  Recursively check if you can go right first, then down
  save
  
  Time: O(e + v)
  Space: O()
  
  vertices
  
  
  📆 PLAN
  Outline of algorithm #:
  let firstRow = input.at(0);
  let lastRow = input.at(-1);
  let startCoordinate = firstRow.at(0);
  let endCoordinate = lastRow.at(-1);
  
  for each node, check to see if you can go E, S, W and W. Store valid options in a queue.
  valid options are elements
  
  e.g. 
  [
	[0, 0, 0],
	[0, 1, 0],
	[0, 0, 0]
  ]
  
  valid options [0, 1] and [1, 0] when starting from [0, 0],
  
  
  
  🛠️ IMPLEMENT
  Write your algorithm.
   
  
  🧪 VERIFY
  Run tests. Methodically debug & analyze issues.
  
  '''
  */