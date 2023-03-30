export function sieveOfEratosthenes(upperBound: number): number[] {
	// Create a set of all numbers between 2 and the upperBound.
	const nums = new Set(Array.from({ length: upperBound - 1 }, (_, i) => i + 2));
  
	// For each number between 2 and the square root of the upperBound, remove all multiples of that number from the set.
	const maxFactor = Math.floor(Math.sqrt(upperBound));
	for (let i = 2; i <= maxFactor; i++) {
	  if (nums.has(i)) {
		for (let j = i ** 2; j <= upperBound; j += i) {
		  nums.delete(j);
		}
	  }
	}
  
	// Return the remaining numbers in the set as the prime numbers.
	return Array.from(nums);
  }
  