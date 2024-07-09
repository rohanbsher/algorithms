
function sumArrayBeginningSplit(arr) {
	if (arr.length === 1)  // base case
	  return arr[0]
  
	// recursive step
	let backSum = sumArrayBeginningSplit(arr.slice(1))
	
	// merge step
	return arr[0] + backSum
  }
  
  function sumArrayEndingSplit(arr) {
	if (arr.length === 1) // base case
	  return arr[0]
  
	// recursive step
	let frontSum = sumArrayEndingSplit(arr.slice(0, arr.length - 1))
  
	// merge step
	return frontSum + arr[arr.length - 1]
  }
  
  
  function sumArrayMidpointSplit(arr) {
	if (arr.length === 1) // base case
	  return arr[0]
  
	let halfway = Math.floor(arr.length / 2)
	let firstHalf = arr.slice(0, halfway)
	let secondHalf = arr.slice(halfway)
  
	// recursive step
	let firstHalfSum = sumArrayMidpointSplit(firstHalf)
	let secondHalfSum = sumArrayMidpointSplit(secondHalf)
  
	// merge step
	return firstHalfSum + secondHalfSum
  }
  
  
  let arr = [5, 5, 5, 5, 10, 10, 10, 20, 20, 10] // sum = 100
  
  document.getElementById('sumFront').textContent = sumArrayBeginningSplit(arr)
  document.getElementById('sumBack').textContent = sumArrayEndingSplit(arr)
  document.getElementById('sumMiddle').textContent = sumArrayMidpointSplit(arr)
  
  