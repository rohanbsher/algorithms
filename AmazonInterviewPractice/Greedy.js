/*

Given a rope, cut it into parts maximizing the product of their lengths.

Example
{
"n": 4
}

Output:

4
Length of the rope is 4.
All ways it can be cut into parts: 1+3, 1+1+2, 1+1+1+1, 2+2, 2+1+1.
Among these, 2+2 cut makes for the greatest product: 2*2=4.

lets say we have 
1 = 0

2
1+1 = 1

3
2 + 1 or 1 + 1 + 1 = 2

4
1+3, 1+1+2, 1+1+1+1, 2+2, 2+1+1 = 4



Rubric
/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
smallest rope being 1



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


*/

function maxProduct(n) {

	if (n <= 3) { return n - 1 }
  
	let product = 1
  
	while (n > 4) {
	  product *= 3
	  n -= 3;
	}
  
	product *= n
  
	return product
  }
  
  console.log(maxProduct(3))
  console.log(maxProduct(1))
  console.log(maxProduct(2))
  console.log(maxProduct(4))
  console.log(maxProduct(5))
  console.log(maxProduct(12))
  
  
  
  function maxProduct(n) {
  
	let memo = {};
	function helper(n) {
  
	  if (n == 1 || n==2) {
		return 1
	  }
	  let maxRes = 1;
	  if (n in memo) {
		return memo[n];
	  }
  
	  for (let i = 1; i <= n; i++){
		maxRes = max(maxRes, i * helper(n - i));
	  }
	  memo[n] = maxRes;
	  return maxRes;
	  
	}
  
	// to find time complexity of a DP solution it is total number of unique states * time taken to cal each state
	// T.C => N*N => N^2
	return helper(n);
	
  }