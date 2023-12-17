/*
This problem is pretty inefficient becuase the number of calls grow 
so rapidly since for every call there are multiple subcalls which are computed 
many multiple times
*/
function fibRecursive(n: number): number {
	callCountRec++;
	if (n === 1 || n === 2) {
		return 1;
	}

	return fibRecursive(n - 1) + fibRecursive(n - 2);
}

let callCountRec = 0;
let callCount = 0;
let callDpCount = 0;
console.log(`fibRecursive of ${10} is ` + fibRecursive(10) + " call " + callCountRec);
// console.log(`fibRecursive of ${12} is ` + fibRecursive(12))

function fibMemoize(n: number): number {
	let memo: { [key: number]: number; } = { 1: 1, 2: 1 };

	function fib(n: number) {
		callCount++;
		if (memo[n] != undefined) {
			return memo[n];
		}
		memo[n] = fib(n - 1) + fib(n - 2);
		return memo[n];
	}
	return fib(n);
}

console.log(`fibMemo of ${10} is ` + fibMemoize(10) + " call " + callCount);

// console.log(`fibRecursive of ${12} is ` + fibRecursive(12))


function fibDp(n: number) {
	const table: { [key: number]: number; } = { 1: 1, 2: 1 };
	callDpCount++;

	for (let i = 3; i <= n; i++) {
		table[i] = table[i - 1] + table[i - 2];
	}
	return table[n];
}

console.log(`fibDp of ${10} is ` + fibDp(10) + " call " + callDpCount);