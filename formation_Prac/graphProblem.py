// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.



// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

// Example 2:

// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

// Example 3:

// Input: numCourses = 3, prerequisites = []
// Output: [0,2,1]

/*

assumptions 
can we have -ve values ?
No

Numcourses minimum be will 1

numCourses = 5, preReq = []
outPut = [2,3,4,0,1]

numCourses = 5, preReq = [[1,2], [2,1]] // Not a valid input
outPut = [] 


numCourses = 5, preReq = [[1, 2], [4, 3], [4, 2]] 
outPut = [0,1,2,3,4] 

numCourses = 5, preReq = [[4, 3], [4, 2]] 
outPut = [2,3,4,1,0]


algorithm : 
// Input: numCourses = 4, prerequisites = [[1,0],[3,1], [3,2], [2,0], [2, 1]]
// Output: [0,2,1,3]

map = 1 -> course (0)
    = 2 -> 0
    = 3 -> 1
    = 3 -> 2


popluate the result array :

keep a track of which course comes first 
  ensure that there is no cycle in the course ordering

tree -> 0  root set to first bi element

queue -> []
numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]

[1 -> 0]
[2 -> 0]
[3 -> [1, 2]]

0 -> []
1 -> 0 
2 -> 0 
3 -> 1, 2

// 1. create our adj list 
// 2. for loop that goes thru the keys of our adj list
// 3. perform dfs on each prereq to validate its path 
` // 3a. if valid, take courses in the correct order 
  // 3b. if invalid (aka cycle), then return empty list 


*/



/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {

};






def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
  preReq = { i: [] for i in range(numCourses) }

  for crs, req in prerequisites:
    preReq[crs].append(req)

  cycle = set()
  output = []
          
  def dfs(cre):
    if cre in cycle:
      return False

    if cre in output:
      return True

    cycle.add(cre)

    for crs in preReq[cre]:
      if not dfs(crs):
          return False

    cycle.remove(cre)
    output.append(cre)
    return True

  for cre in range(numCourses):
    if not dfs(cre):
      return []
  return output