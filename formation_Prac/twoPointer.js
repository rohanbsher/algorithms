/*

Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]
 


Test case :

Rubric
/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?

if there is a no quad that adds to the target sum return []

[] => 0 = []
[1,2,3] -> 50 = []


🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()




📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
a+b+c == target sum
*/


function fourSum(nums, target) {

	const map = new Map()
	const result = new Set()
  
  // go through the array find all the pairs and sum them up in regards to their corresponding indicies
	for (let i = 0; i < nums.length; i++) {
	  for (let j = i + 1; j < nums.length; j++) {
		let sum = nums[i] + nums[j]
		if (!map.has(sum)) {
		  map.set(sum, [])
		}
		map.get(sum).push([i, j])
	  }
	}
  
  // [1,1,2] = sum 2 => [0,1]
  
	for (let i = 0; i < nums.length; i++) {
	  for (let j = i + 1; j < nums.length; j++) {
  
		let sum = nums[i] + nums[j]
		let complement = target - sum
  
		if (map.has(complement)) {
  
		  for (const pair of map.get(complement)) {
			const [k, l] = pair
  
			// check to make sure that the index is not the same 
			// if (k > j) {
			  const quad = [nums[i], nums[j], nums[k], nums[l]]
			//   quad.sort((a, b) => a - b); // sort them to handle duplicates
			//   result.add(quad.toString()) // 2,2,2,2
			// }
			result.add(i)
			result.add(j)
			result.add(k)
			result.add(l)
			if (result.size === 4) {
			  
			}
		  }
		}
	  }
	}
  
	console.log(result)
	return Array.from(result).map(quad => quad.split(',').map(Number));
  }
  
  
  // Input: nums = [1, 0, -1, 0, -2, 2], target = 0
  // Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
  // Example 2:
  
  console.log(fourSum([[1, 0, -1, 0, -2, 2]], 0))