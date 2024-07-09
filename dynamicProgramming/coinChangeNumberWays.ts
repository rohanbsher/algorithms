/*

'''
Coin Change Number of Ways

You are given coins of different denominations and a total amount of money. Write a function to compute the "number of combinations" that make up that amount.
 

EXAMPLE(S)
Input: amount = 5, coins = [1, 2, 5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1

Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.

Input: amount = 10, coins = [10] 
Output: 1
 

FUNCTION SIGNATURE
func coinChangeCombinations(coins: [Int], amount: Int) -> Int
'''


function coinChangeCombinations(coins: number[], amount: number): number {
	// Initialize a DP array to store the number of combinations for each amount.
	const dp: number[] = new Array(amount + 1).fill(0);

	// There is one way to make the amount 0 (no coins).
	dp[0] = 1;

	// Iterate through each coin and update the DP array.
	for (const coin of coins) {
		for (let i = coin; i <= amount; i++) {
			dp[i] += dp[i - coin];
		}
	}

	return dp[amount];
}



// Example usage:
// const coins1: number[] = [1, 2, 5];
// const amount1: number = 5;
// console.log(coinChangeCombinations(coins1, amount1)); // Output: 4

// const coins2: number[] = [2];
// const amount2: number = 3;
// console.log(coinChangeCombinations(coins2, amount2)); // Output: 0

// const coins3: number[] = [10];
// const amount3: number = 10;
// console.log(coinChangeCombinations(coins3, amount3)); // Output: 1



function countCombinations(coins: number[], amount: number): number {
	// Calculate the total of a combination
	function total(combination: number[]): number {
		return combination.reduce((acc, count, index) => acc + count * coins[index], 0);
	}

	// Recursive function to generate and count valid combinations
	function findCombinations(index: number, currentCombination: number[]): number {
		if (index === coins.length) {
			return total(currentCombination) === amount ? 1 : 0;
		}

		let count = 0;
		const coin = coins[index];
		const maxNum = Math.floor(amount / coin);

		for (let num = 0; num <= maxNum; num++) {
			count += findCombinations(index + 1, [...currentCombination, num]);
		}

		return count;
	}

	return findCombinations(0, []);
}

// Example usage
// console.log(countCombinations([1, 2, 5], 5));  // For coins of 1, 2, and 5 and amount 5
// 1+1+1+1+1, 1+2+2, 1+1+1+2, 5 = 4

function countWaysRecur(coins: number[], amount: number, index: number) : number {
	// console.log(`amount = ${amount} |  index = ${index}`)
	//base case there is a path to add up the numbers to make the amount
	if (amount === 0) {
		return 1;
	}
	// base case there is no path
	if (amount < 0 || index >= coins.length) {
		return 0;
	}

	let includeCoin: number = countWaysMemo(coins, amount - coins[index], index);
	let excludeCoin: number = countWaysMemo(coins, amount, index + 1);

	return includeCoin + excludeCoin;
}



function countWaysMemo(coins: number[], amount: number, index: number, cache: Record<string, number> = {}) : number {
	// console.log(`amount = ${amount} |  index = ${index}`)
	let key = amount + ',' + index;``
	if(cache[key] != undefined){
		return cache[key]
	}
	//base case there is a path to add up the numbers to make the amount
	if (amount === 0) {
		return 1;
	}
	// base case there is no path
	if (amount < 0 || index >= coins.length) {
		return 0;
	}

	let includeCoin: number = countWaysMemo(coins, amount - coins[index], index, cache);
	let excludeCoin: number = countWaysMemo(coins, amount, index + 1, cache);

	cache[key] = includeCoin + excludeCoin;
	return cache[key]
}

const startTime = Date.now();
console.log(countWaysRecur([1, 2, 5], 3000, 0), 4)
const endTime = Date.now();
console.log(`Time taken Recur: ${endTime - startTime} milliseconds`);
// console.log(countWays([1, 2], 3, 0, []))

const startTime2 = Date.now();
console.log(countWaysMemo([1, 2, 5], 3000, 0, {}), 4)
const endTime2 = Date.now();
console.log(`Time taken Memo: ${endTime2 - startTime2} millis`);











Q. Given coins of different denominations (e.g. cent, dime, quarter in U.S. currency) 
and a total amount of money, calculate the number of combinations to make up the target 
amount. You may assume there are infinite number of each kind of coin.

Examples:
• Given: amount = 2, coins = [1, 2, 3] // returns 2
• Possible Combinations: (2 = 2), (2 = 1+1)
• Given amount = 5, coins = [1, 2, 5] // returns 4
• Possible Combinations: (5 = 1 + 1 + 1 + 1 + 1), (5 = 2 + 1 + 1 + 1), (5 = 2 + 2 + 1), (5 = 5)


/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
[],5 -> 0
[1], 2 -> 1
[1, 2], 2 -> 1+1,2


🧠 BRAINSTORM
What approaches could work?

we are optimizing for a solution that has overlapping subproblems where we are trying 
to determine the amount of a specific coin that will take up to add up till a given 
amount.



Recursion with memo -> O(n^m) 
DP -> O(n*m) where n is the length of coins array, and m is the amount left
O()

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





function coinRecurCombinations(coins: number[], amount: number): number {
	return 0
}

/*

[1,2,5] 5 
1+1+1+1+1, 1+2+2, 1+1+1+2, 5 = 4 ways

dp = [0,0,0,0]

if amount > coin value = copy the above value
else copy the above value + amount - currentCoin

	0 1 2 3 4 5
1	1 1 1 1 1 1
2	1 0 1 0 
5	1


coins = 1,2,5 | amount = 5

i = 1
j = 1, 2, 3, 4, 5
dp = [1, 1, 1, 1, 1, 1]

i = 2
j = 2, 3, 4, 5
dp = [1, 1, 2, 2, 3, 3]

i = 5
j = 5
*/


function coinDpCombinations(coins: number[], amount: number): number {

	let dp: number[] = new Array(amount + 1).fill(0); //fill the array with 1 + coins length
	dp[0] = 1; // one way of making 0 exlude the coins

	for (let coin of coins) {
		for (let currentAmount = coin; currentAmount <= amount; currentAmount++) {
			dp[currentAmount] += dp[currentAmount-coin]
		}
	}

	return dp[amount];
}

console.log(coinDpCombinations([1, 5, 10, 25], 1), 1)
console.log(coinDpCombinations([1, 5, 10, 25], 3), 1)
console.log(coinDpCombinations([1, 5, 10, 25], 5), 2)
console.log(coinDpCombinations([1, 5, 10, 25], 26), 13)
console.log(coinDpCombinations([1, 5, 10, 25], 12), 4)
