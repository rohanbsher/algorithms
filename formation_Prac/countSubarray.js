/*
'''
Given an array of integers a, your task is to find how many of its contiguous subarrays of length m contain a pair of integers with a sum equal to k.

More formally, given the array a, your task is to count the number of indices 0 ≤ i ≤ a.length - m such that a subarray [a[i], a[i + 1], ..., a[i + m - 1]] contains at least one pair (a[s], a[t]), where:

* s ≠ t
* a[s] + a[t] = k

Example:

* For a = [2, 4, 7, 5, 3, 5, 8, 5, 1, 7], m = 4, and k = 10, the output is 5.
* Let's consider all subarrays of length m = 4 and see which fit the conditions:
  * Subarray a[0..3] = [2, 4, 7, 5] doesn't contain any pair of integers with a sum of k = 10. Note that although the pair (a[3], a[3]) has the sum 5 + 5 = 10, it doesn't fit the requirement s ≠ t.
  * Subarray a[1..4] = [4, 7, 5, 3] contains the pair (a[2], a[4]), where a[2] + a[4] = 7 + 3 = 10.
  * Subarray a[2..5] = [7, 5, 3, 5] contains two pairs (a[2], a[4]) and (a[3], a[5]), both with a sum of k = 10.
  * Subarray a[3..6] = [5, 3, 5, 8] contains the pair (a[3], a[5]), where a[3] + a[5] = 5 + 5 = 10.
  * Subarray a[4..7] = [3, 5, 8, 5] contains the pair (a[5], a[7]), where a[5] + a[7] = 5 + 5 = 10.
  * Subarray a[5..8] = [5, 8, 5, 1] contains the pair (a[5], a[7]), where a[5] + a[7] = 5 + 5 = 10.
  * Subarray a[6..9] = [8, 5, 1, 7] doesn't contain any pair with a sum of k = 10.
* So the answer is 5, because there are 5 contiguous subarrays with at least one pair with a sum of k = 10.

 

EXAMPLE(S)
 [2, 4, 7, 5, 3, 5, 8, 5, 1, 7], m = 4, and k = 10, result is 5
[2, 2, 2, 2, 2], m = 3, k = 4, result is 3 
 { 2: [2, 3, 4] }

FUNCTION SIGNATURE
function subarraysSumToK(array, m, k)
'''
 0  1  2  3  4  5  6  7  8  9 // ind
[2, 4, 7, 5, 3, 5, 8, 5, 1, 7]
[8, 6, 3, 5, 7, 5, 2, 5, 9, 3] // compliment
 [(0, 6), (2, 4), (3, 5), (4, 9), (5,7)]
 -  -  -  -  -  -  -
       -  -  -
          -  -  -

[2, 4, 7, 5, 3, 5, 8, 6, 1, 7]
             -  -  -  -

 currentSums = 0
 {
  2: 0,
  4: 0,
  7: 0,
  5: 1
  3: 1
  8: 1
  6: 1

 }
initialize result

create a complement dictionary
initialize with first m elements - 1

iterate over all the elements in the list up until length minus window size
  current window will be equal to current index: current_index + m

  

    complement: List[index]

    complement = k - element #6
    if complement in dictionary:
      add 1 to result
      break
    else:
      dictionary[element].append(index)
      
    remove dictoinary at current index

    loop from i up to arr.length - w
        if twoSum(i, i + w) counter++

    twoSum(s, t)

*/

function subarraysSumToK(array, m, k) {
	if (m > array.length || m === 1) return 0;
  
	// value => current_count
	const data = {};
	// the number of pairs that sum to k in the
	// current window
	let windowPairCount = 0;
  
	// Initialize window of size m
	for (let i = 0; i < m; i++) {
	  const v = array[i];
	  // does this new value make a pair?
	  if (data[k - v]) {
		windowPairCount++;
	  }
	  data[v] = data[v] ? data[v] + 1 : 1;
	}
	let result = windowPairCount > 0 ? 1 : 0;
  
	// Now slide the window across
	for (let i = 1; i < array.length - m + 1; i++) {
	  // remove the previous element from tracking
	  const prev = array[i - 1];
	  data[prev] = data[prev] - 1;
	  if (data[k - prev] || 0) {
		// Only decrement the window pair count if
		// we hit zero or if we hit one AND we have an identical
		// pair.
		if (data[prev] === 0
		  || data[prev] === 1 && prev === k - prev) {
		  windowPairCount--;
		}
	  }
  
	  // add the new one
	  const next = array[i + m - 1];
	  if (data[k - next] || 0) {
		// we have another pair!
		windowPairCount++;
	  }
	  data[next] = data[next] ? data[next] + 1 : 1;
  
	  result += windowPairCount > 0 ? 1 : 0;
	}
  
	return result;
  }