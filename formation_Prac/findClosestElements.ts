function findClosestElements(arr: number[], k: number, x: number): number[] {

	//first solution using a custom comprator
	// arr.sort((a,b) => Math.abs(a-x) - Math.abs(b-x))
	// let result = arr.slice(0,k)
	// return result.sort((a,b) => a-b);
	let left = 0;
	let right = arr.length - k;

	while (left < right) {
		let mid = Math.floor((left + right) / 2);

		if (x - arr[mid] > arr[mid + k] - x) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}

	return arr.slice(left, left + k);

};

/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
boundary case :
[1,5,10,15] if k = 3 and x = 20
the k closer elements are [5,10,15]

[7,7,7,7] k=2 x=7
[7,7]

[1,2,3] k=3 x=4 [1,2,3]
[1,3,8,10] k=2 x=6 [3,8]


🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 
use a binary seach to find the x element and scope out k closest integers to that value
so given 1 2 3 and x = 2 and k being 3
use binary seach to find element 2 and pick its index = 1 and subtract and add 1 element from left and right
until k%resultArr.length == 1


📆 PLAN
Outline of algorithm #: 


🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
