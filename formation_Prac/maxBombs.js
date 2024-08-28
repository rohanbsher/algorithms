/*


You are given a list of bombs. The range of a bomb is defined as the area where its effect can be felt. This area is in the shape of a circle with the center as the location of the bomb.

The bombs are represented by a 0-indexed 2D integer array bombs where bombs[i] = [xi, yi, ri]. xi and yi denote the X-coordinate and Y-coordinate of the location of the ith bomb, whereas ri denotes the radius of its range.

You may choose to detonate a single bomb. When a bomb is detonated, it will detonate all bombs that lie in its range. These bombs will further detonate the bombs that lie in their ranges.

Given the list of bombs, return the maximum number of bombs that can be detonated if you are allowed to detonate only one bomb.

2 1 3

1  * * *
   B * *
   * * *
   * * *
   * * *
   * B *

each bomb is a node in the graph


Input: bombs = [[2,1,3],[6,1,4]]
x=2 y=1 r=3
x=6 y=1 r=4

x2-x1 = 4
y2-y1 = 0

is the difference in coordinates within the radius



Output: 2
Explanation:
The above figure shows the positions and ranges of the 2 bombs.
If we detonate the left bomb, the right bomb will not be affected.
But if we detonate the right bomb, both bombs will be detonated.
So the maximum bombs that can be detonated is max(1, 2) = 2.



Input: bombs = [[1,1,5],[10,10,5]]
Output: 1
Explanation:
Detonating either bomb will not detonate the other bomb, so the maximum number of bombs that can be detonated is 1.

test cases :

assume valid inputs 
[[0,0,1]]
[[1,1,1]]
[[1,1,1], [1,1,1]] -> no overlap

this a graph problem


*/

function maxBombs(bombs) {

	// create adjacency list
	const adjList = Array.from({ length: bombs.length }, () => []);
  
	// populate the adjacency list
	for (let i = 0; i < bombs.length; i++) {
	  for (let j = 0; j < bombs.length; j++) {
  
		if (i != j) { // donot grab the same bomb index
		  const [x1, y1, r1] = bombs[i]
		  const [x2, y2, r2] = bombs[j]
  
		  // calculate the distance  (x2-x1)^2 + (y2-y1)^2
		  const distanceSquared = (x2 - x1) ** 2 + (y2 - y1) ** 2
  
		  // check the distance within radius
		  // bomb j is in range of i 
		  if (distanceSquared <= r1 ** 2) {
			adjList[i].push(j)
		  }
  
		  if (distanceSquared <= r2 ** 2) {
			adjList[j].push(i)
		  }
		  // directed graph
		} 
	  }
	}
  
  
	function dfs(start, visited) {
	  visited.add(start);
	  let count = 1; // since we are at the first bomb
  
	  for (const neighbor of adjList[start]) {
		if (!visited.has(neighbor)) {
		  count += dfs(neighbor, visited)
		}
	  }
	  return count;
	}
  
	// iterate over every possible, if any bomb is unvisited, call dfs from that
  
	let maxDetonations = 0;
  
	for (let i = 0; i < bombs.length; i++) {
	  const visited = new Set()
	  
	  maxDetonations = Math.max(maxDetonations, dfs(i, visited)) // every time we return out of dfs
	}
  
	return maxDetonations
  }
  
  let bombs = [[2, 1, 3], [6, 1, 4]]
  let bombs1 = [[1,1,5],[10,10,5]]
  
  console.log(maxBombs(bombs))
  
  
  console.log(maxBombs(bombs1))
  