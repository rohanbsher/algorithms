/*
You are given an array consisting of n integers which denote the position of a stall. You are also given an integer k which denotes the number of aggressive cows. You are given the task of assigning stalls to k cows such that the minimum distance between any two of them is the maximum possible.
The first line of input contains two space-separated integers n and k.
The second line contains n space-separated integers denoting the position of the stalls.

Example 1:

Input:
n=5 
k=3

max = 8
min = 1

mid = 5


stalls = [1 2 4 8 9]
Output:
3
Explanation:
The first cow can be placed at stalls[0], 
the second cow can be placed at stalls[2] and 
the third cow can be placed at stalls[3]. 
The minimum distance between cows, in this case, is 3, 
which also is the largest among all possible ways.
Example 2:

Input:
n=5 
k=3
stalls = [9 1 2 7 5]
Output:
4
Explanation:
The first cow can be placed at stalls[0],
the second cow can be placed at stalls[1] and
the third cow can be placed at stalls[4].
The minimum distance between cows, in this case, is 4,
which also is the largest among all possible ways.

dosn't have to be equi distant 

given the number of cows and number of stalls that the minumum distance b/w cows are maximized so they are as far seperate as possible



brute force will be too inefficient since the every combinations of cows being placed will have to be checked

plan use binary search to check whether the minumum distance can be achieved or not if yes try with a larger distance or smaller which is where binary search comes in

for each midpoint check if it's feasible to place all the cows such that min distance b/w cows is atleast mid

O(N LOG(N))
*/

function aggressiveCows(numOfCows, stalls) {
	// sort the stalls
	  stalls.sort((a, b) => a - b);
	  // 1 2 5 7 9 = 9 - 1 = 8 // think of a number line
	
	  let low = 1 // min possible distance
	  let high = stalls[stalls.length - 1] - stalls[0]
	  let best = 0 // max possbile min distance found
	
	  while (low <= high) {
		const mid = Math.floor((low + high) / 2)
	
		if (canPlaceCows(stalls, numOfCows, mid)) {
		  best = mid
		  low = mid + 1
		} else {
		  high = mid - 1
		}
	  }
	
	  return best
	}
	
	// helper function to check if we can place all the cows with atleast the min distance apart
	
	function canPlaceCows(stalls, numOfCows, minDist) {
	  let count = 1 // place the first cow at first stall
	  let lastPlaced = stalls[0] // where was the cow placed last
	
	  for (let i = 1; i < stalls.length; i++) {
		if (stalls[i] - lastPlaced >= minDist) {
		  count++
		  lastPlaced = stalls[i]
		  if (count === numOfCows) {
			return true;
		  }
		}
	  }
	  return false;
	}
	
	const numOfStalls = 5
	const numOfCows = 3
	const stalls = [9,1,2,7,5] // 4
	
	console.log(aggressiveCows(numOfCows, stalls))
	
	
	/*
	
	
	Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
	
	Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
	
	Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
	
	Return the minimum integer k such that she can eat all the bananas within h hours.
	
	 l = 1, r= 11
	 mid = 6 (speed)
	
	Example 1:
					1. 1.  2.   2
	Input: piles = [3, 6,  7,  11], h = 8
	Output: 4
	Example 2:
	
	Input: piles = [30,11,23,4,20], h = 5
	Output: 30
	Example 3:
	
	Input: piles = [30,11,23,4,20], h = 6
	Output: 23
	
	
	goal is to find the minumum possible eating speed 
	
	*/
	
	function minEatingSpeed(piles, h) {
	  let low = 1 
	  let high = Math.max(...piles) // max possible eating speed
	
	  let bestSpeed = high // maxPossible
	
	  while (low <= high) {
		let mid = Math.floor((low + high) / 2)
	
		if (canEatBanana(piles, h, mid)) {
		  bestSpeed = mid
		  high = mid - 1
		} else {
		  low = mid + 1
		}
	  }
	
	  return bestSpeed
	}
	
	function canEatBanana(piles, h, speed) {
	  let hours = 0
	
	  // given k speed find the hours it will take to eat current pile
	  for (let pile of piles) {
		hours += Math.ceil(pile / speed) // round up 7 / 3 = 3
		if (hours > h) return false;
	  }
	
	  return hours <= h
	}
	
	// Test cases
	console.log(minEatingSpeed([3, 6, 7, 11], 8));  // Output: 4
	console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));  // Output: 30
	console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));  // Output: 23
	
function doesTargetExist(arr1, target) {
    if (arr1.length === 0) return;

    let low = 0;
    let high = arr1.length - 1;

    while (low <= high) { // This ensures all positions are checked, even when low == high
        let mid = Math.floor((low + high) / 2);

        if (target === arr1[mid]) {
            return true; // Target found
        } else if (target < arr1[mid]) {
            high = mid - 1; // Search in the left half
            console.log("updating high value : " + high);
        } else {
            low = mid + 1; // Search in the right half
            console.log("updating low value : " + low);
        }
    }
    return false; // Target not found
}


function binarySearch(arr1, target) {
	if(arr1.length === 0) return -1;

	let low = 0;
	let high = arr1.length - 1;

	while(low <= high) {
		let mid = Math.floor((high + low) / 2);

		if(target === arr1[mid]){
			return mid
		} else if(target < arr1[mid]) {
			high = mid - 1 // if target is less than mid search the left half
		} else {
			low = mid + 1
		}
	}
	return -1
}





const arr1 = [1, 2, 3, 4, 5, 6];
console.log(binarySearch(arr1, 10)); // false -1
console.log(binarySearch(arr1, 5));  // true 4
console.log(binarySearch(arr1, 2));  // true 1





/*


You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

  n(log n)
  log(m*n)


// since the rows are sortes and the first element of each is greater than the last element

[1,3,5,7,10,11,16,20,23,30,34,60]
treat the 2d array as 1D array 
so we flatten it

low = 0 
high = m*n = 4 * 3 = 12 since arr are indexed 0 we subtract -1


*/



function searchMatrix(arr, target) {

	let m = arr.length;
	let n = arr[0].length; // num of columns will be 4
  
	// insight is to try and treat the matrix and 1d
	let low = 0
	let high = m*n - 1
  
	while (low <= high) {
	  // find the midpoint
	  let mid = Math.floor((low + high) / 2) // 11 / 2 = 5 
  
	  //[1,3,5,7,10,11,16,20,23,30,34,60] = arr[5] = 11
	  // find the index in 2d array
	  // to find the row divide by num of columns
	  let row = Math.floor(mid / n) // 5 / 4 = 1
	  let column = mid % n // 5 % 4 = 1
  
	  // access the 2d array
	  let midElement = arr[row][column]
  
	  if (target === midElement) {
		return true;
	  } else if (target < midElement) {
		high = mid - 1
	  } else {
		low = mid + 1
	  }
  
	}
	return false;
  }
  
  let matrix = [
	[1, 3, 5, 7],
	[10, 11, 16, 20],
	[23, 30, 34, 60]
  ]
  
  console.log(searchMatrix(matrix, 3)) // true
  console.log(searchMatrix(matrix, 30)) // true
  console.log(searchMatrix(matrix, 1)) // false
  console.log(searchMatrix(matrix, 60)) // false 