// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// Return true if you can finish all courses.Otherwise, return false.




// Example 1:

// Input: numCourses = 2, prerequisites = [[1, 0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.

//   Example 2:

// Input: numCourses = 2, prerequisites = [[1, 0], [0, 1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

/*

test cases : 
numCourses = 2, [] = true // if there are no prerequisites

figure out there are no cycles which will be false 
if it is a dependency chain with no cycles return true

brainstorm :

a directed graph problem where each node is a course 

so [bi, ai] there is an edge that goes from bi to ai denoting that bi is a prerequisite for ai

bi -> ai
key to solve this 
- if there is a Cycle detected it is impossible to finish all the courses.

we can use DFS to figure out a cycle in the graph

invovles going over every vertex and edge O(V + E)
space to store the map O(V + E)


outline :
  - represent course and prerequisites as directed graph (adj list)
  - use DFS (cycle detection)
  - 

*/


function finishCourses(numCourses, prerequisites) {

	// create an adjacency list
	const adjList = new Array(numCourses).fill(0).map(() => []);
  
	// populate it
	for (let [course, preReq] of prerequisites) {
	  adjList[preReq].push(course);
	}
	// adjList[1] = [0]
  
	const visited = new Array(numCourses).fill(0) // to keep a track of the visited status of each node
	// 0 - no visited, 1 - visiting, 2 - completely visited
	// if we encounter a node that is in visiting status its a cycle
  
	const order = []
	let isPossible = true; // to detect a cycle
  
	// helper - dfs to detect cycles
	function dfs(course) {
  
	  if (visited[course] === 1) { 
		isPossible = false;
		return;
	  }
	  if (visited[course] === 2) return;
  
	  visited[course] = 1
  
	// visit all the neighbors
	  for (let neighbor of adjList[course]) {
		if (isPossible) {
		  dfs(neighbor);
		}
	  }
  
	  visited[course] = 2;
	  order.push(course);
	}
  
	for (let i = 0; i < numCourses && isPossible; i++) {
	  if (visited[i] === 0) {
		dfs(i);
	  }
	}
  
	if (isPossible) {
	  return order
	} else {
	  return []
	}
  }
  
  console.log(finishCourses(2, [[1, 0]])) // take course 0 before 1 // true
  console.log(finishCourses(2, [[1, 0], [0, 1]])) // false
  console.log(finishCourses(4, [[1, 0], [2, 1], [3, 2]])) // true
  console.log(finishCourses(4, [[1, 0], [0, 2], [2, 1]])) // false
  console.log(finishCourses(4, [])) // true
  
  
  // Input: numCourses = 4, prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]]
  // Output: [0, 2, 1, 3]
  // Explanation: There are a total of 4 courses to take.To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
  // So one correct course order is[0, 1, 2, 3].Another correct ordering is[0, 2, 1, 3].
  
  
  // def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
  //         preReq = {i:[] for i in range(numCourses)}
  
  //         for crs, req in prerequisites:
  //             preReq[crs].append(req)
  
  //         cycle= set()
  //         output = []
  
  //         def dfs(cre):
  //             if cre in cycle:
  //                 return False
  
  //             if cre in output:
  //                 return True
  
  //             cycle.add(cre)
  //             for crs in preReq[cre]:
  //                 if not dfs(crs):
  //                     return False
  
  //             cycle.remove(cre)
  //             output.append(cre)
  //             return True
  
  //         for cre in range(numCourses):
  //             if not dfs(cre):
  //                 return []
  //         return output
  
  
  https://leetcode.com/problems/course-schedule-ii/description/