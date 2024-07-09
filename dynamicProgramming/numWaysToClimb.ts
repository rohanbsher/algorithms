/*
Given an input N representing n number of stairs, compute the number of ways to reach the n'th stair if you can climb either 1 or 2 stairs at a time.
 

EXAMPLE(S)
Input: 1
Output: 1
Explanation: There is only one way to climb one stair: (1)

Input: 2
Output: 2
Explanation: There are 2 ways to climb 2 stairs: (1,1) and (2)

Input: 4
Output: 5
Explanation: Here are the ways to climb 4 stairs: (1,1,1,1), (1,1,2), (1,2,1), (2,2)


FUNCTION SIGNATURE
func numWaysToClimb(input: n) -> Int
'
Rubric
/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
so we are given a 


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

4

1 or 2 steps

1 1 1 1
			 	4
				/\
			   3
		      /\   /\
			 2  \
			/\   \
		   1  0  /\
                2  1
			   /\
			  1  0
			
*/



function numWaysToClimb(n: number) : number {
	
	if(n<=1){
		return 1 // becuase there is only one way to reach a one stair
	}



	
	return 0;
}