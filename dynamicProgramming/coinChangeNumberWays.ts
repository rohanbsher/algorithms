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
*/
// number = 

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
const coins1: number[] = [1, 2, 5];
const amount1: number = 5;
console.log(coinChangeCombinations(coins1, amount1)); // Output: 4

const coins2: number[] = [2];
const amount2: number = 3;
console.log(coinChangeCombinations(coins2, amount2)); // Output: 0

const coins3: number[] = [10];
const amount3: number = 10;
console.log(coinChangeCombinations(coins3, amount3)); // Output: 1



