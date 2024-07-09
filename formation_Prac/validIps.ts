/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?

0-255 allowed range and cannot have any leading 0 in front of a number
valid number ?
check if the number is actually a number or not


🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 
Backtracking approach should work where we basically 
recursively go down splitting the number into an ip address.

we increment one index at a time and check whether 
that value is good or not and keep doing recursively
until an end it reached if not return to a different 
output and try different combinations if success add it 
to the result array

edge case : 000256 = 0.0.0.256 = []
256256256256 = []

since the length of the input string in bounded 
and in the worst case we go through all the dot 
placements the time will be O(1)

space will be O(1) as the max depth it can have is 4 
levels deep

📆 PLAN
Outline of algorithm #: 






🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/


function restoreIpAddresses(s: string): string[] {
	let validIps: string[] = [];

	function backtracking(start: number = 0, parts: string[] = []) {
		// base case
		if (parts.length === 4) {
			if (start === s.length) {
				validIps.push(parts.join('.'));
			}
			return;
		}

		// base case
		if (parts.length >= 4 && start !== s.length) {
			return;
		}

		// recursive case
		for (let i = 1; i <= 3; i++) {
			if (start + i > s.length) { break; } // don't go past the end of the string

			const segment = s.substring(start, start + i); // 3  3+3=6
			if (isValidSegment(segment)) { // 
				parts.push(segment);
				backtracking(start + i, parts);
				parts.pop();
			}
		}
	}

	function isValidSegment(segment: string): boolean {
		if (segment.length > 3) return false;
		if (segment.startsWith('0') && segment.length > 1) return false;
		const num = parseInt(segment);
		return num >= 0 && num <= 255;
	}

	backtracking();
	return validIps;

};

let input: string = "25525511135"; // Output: ["255.255.11.135","255.255.111.35"]
let input2: string = "101023"; // Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
console.log(restoreIpAddresses(input))
console.log(restoreIpAddresses(input2)) 

