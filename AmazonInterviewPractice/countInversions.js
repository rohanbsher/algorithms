/*

Problem Statement: Given an array of N integers, count the inversion of the array (using merge-sort).

What is an inversion of an array? Definition: for all i & j < size of array, if i < j then you have to find pair (A[i],A[j]) such that A[j] < A[i].

Examples
Example 1:
Input Format
: N = 5, array[] = {1,2,3,4,5}
Result
: 0
Explanation
: we have a sorted array and the sorted array has 0 inversions as for i < j you will never find a pair such that A[j] < A[i]. More clear example: 2 has index 1 and 5 has index 4 now 1 < 5 but 2 < 5 so this is not an inversion.

Example 2:
Input Format
: N = 5, array[] = {5,4,3,2,1}
Result
: 10
Explanation
: we have a reverse sorted array and we will get the maximum inversions as for i < j we will always find a pair such that A[j] < A[i]. Example: 5 has index 0 and 3 has index 2 now (5,3) pair is inversion as 0 < 2 and 5 > 3 which will satisfy out conditions and for reverse sorted array we will get maximum inversions and that is (n)*(n-1) / 2.For above given array there is 4 + 3 + 2 + 1 = 10 inversions.

Example 3:
Input Format
: N = 5, array[] = {5,3,2,1,4}
Result
: 7
Explanation
: There are 7 pairs (5,1), (5,3), (5,2), (5,4),(3,2), (3,1), (2,1) and we have left 2 pairs (2,4) and (1,4) as both are not satisfy our condition. 




                        2 6 4 0 1 5


        2 6 4                         0 1 5
    i            j
  2 6           4             0 1              5

2     6                   0          1

a[i] > a[j] -> inversion pair

brute force -> n ^ 2

merge sort -> o(NlogN)
during the merge step that we have to count the number
of inversions

key insight if(arr[i] > arr[j] && i < j) then we know all the elements remaining in the left half starting from position i will also be greater than arr[j] since left half is already sorted

*/

function countInversions(arr) {

	const tempArr = [...arr]
	return mergeSort(arr, tempArr, 0, arr.length-1)
	}
	
	function mergeSort(arr, tempArr, left, right) {
	  if (left >= right) {
		return 0 // base case no inversion
	  }
	
	  const mid = Math.floor((left + right) / 2)
	
	  let inversions = 0
	  inversions += mergeSort(arr, tempArr, left, mid); //left half
	  inversions += mergeSort(arr, tempArr, mid+1, right) //right
	
	  inversions += merge(arr, tempArr, left, mid, right)
	
	  return inversions;
	
	}
	
	function merge(arr, tempArr, left, mid, right) {
	
	  let i = left;
	  let j = mid + 1
	  let k = left;
	  let invCount = 0;
	
	  while (i <= mid && j <= right) {
		if (arr[i] <= arr[j]) {
		  tempArr[k++] = arr[i++]
		} else {
	
		  tempArr[k++] = arr[j++]
		  invCount += (mid - i + 1)
		}
	  }
	
	  while (i <= mid) {
		tempArr[k++] = arr[i++]
	  }
	
	  while (j <= right) {
		tempArr[k++] = arr[j++]
	  }
	
	  for (let i = left; i <= right; i++) {
		arr[i] = tempArr[i]
	  }
	
	  return invCount;
	}
	
	
	
	console.log(countInversions([5, 4, 3, 2, 1])) // 10
	console.log(countInversions([5,3,2,1,4])) // 7
	
	
	/*
	
	
	here is an integer array nums sorted in ascending order (with distinct values).
	
	Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become 
	
	[4,5,6,7.   ,0,1,2].
	
	Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
	
	You must write an algorithm with O(log n) runtime complexity.
	
	 
	
	Example 1:
	
	Input: nums = [4,5,6,7,0,1,2], target = 0
	Output: 4
	Example 2:
	
	Input: nums = [4,5,6,7,0,1,2], target = 3
	Output: -1
	Example 3:
	
	Input: nums = [1], target = 0
	Output: -1
	
	*/