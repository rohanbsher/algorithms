// This generates the powers of two into an array in order,
// but below we'll iterate through this backward.
function makePowersOfTwo(max) {
	const powers = [0];
	
	for (let pow = 1; pow <= max; pow += pow) {
	  powers.push(pow);
	}
	
	return powers;
  }
  
  function findIndex(arr, x) {
	const powers = makePowersOfTwo(arr.length - 1);
  
	let i = 0;
	
	for (let pI = powers.length - 1; pI >= 0; pI -= 1) {
	  const power = powers[pI];
	  if (i + power < arr.length && x >= arr[i + power]) {
		i += power;
		
		if (arr[i] === x) return i;
	  }
	}
	  
	return -1;
  }