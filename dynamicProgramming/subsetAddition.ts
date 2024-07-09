/*
'''
❓ PROMPT
Given a set of numbers S, and a sum K, write a function to compute whether there exists a subset of S whose elements add up to K.

Each element of S is unique and may only be used once in computing the sum.

Example(s)
doesSubsetSumExist([1,2,3], 6) == true (1+2+3=6)
doesSubsetSumExist([1,2,3], 5) == true (2+3=5)
doesSubsetSumExist([1,2,9], 4) == false (no sum exists)
 

🔎 EXPLORE
List your assumptions & discoveries:
I have a set of numbers and i have to find out whether there exists a subset with where elements add up to k

[1,2,3] => total = 6 | 5 

1+2+3 | 2+3

Insightful & revealing test cases:
can't be decimal and has to be testable


🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 
recursive algo



📆 PLAN
Outline of algorithm #:
nums, total

		1 2 3
		  /\
		1
	  /  \
	12    2
	/     /\
  123	 23 3

recursive(nums, total, index) // use the index to travel through the array

for(let num of nums) {
	recusive = 
}

 

🛠️ IMPLEMENT
function doesSubsetSumExist(nums, sum) {
def doesSubsetSumExist(nums: list[int], sum: int) -> bool:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''

			123 
			/\

*/

function doesSubsetSumExist(nums: number[], sum: number, idx: number, memo: Record<string, boolean> = {}): boolean {
	if(sum === 0){
		return true;
	}
	if(sum < 0 || idx >= nums.length){
		return false;
	}

	let key = `${idx}_${sum}`
	if(memo.hasOwnProperty(key)){
		return memo[key]
	}

	let include = doesSubsetSumExist(nums, sum-nums[idx], idx+1, memo)

	let exclude = doesSubsetSumExist(nums, sum, idx+1, memo)

	memo[key] = include || exclude
	console.log(memo)
	return memo[key]
}

console.log(doesSubsetSumExist([1,2], 3, 0, {}));