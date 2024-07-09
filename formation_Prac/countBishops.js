function countAttackingBishopPairs(bishops) {
	let topLeftBottomRight = {}; 
	let bottomLeftTopRight = {}; 
	let attackingPairs = 0;
  
	bishops.forEach(([x, y]) => {
	  let tlbrKey = x + y; 
	  let bltrKey = x - y; 
  
	  attackingPairs += (topLeftBottomRight[tlbrKey] || 0);
	  attackingPairs += (bottomLeftTopRight[bltrKey] || 0);
  
	  topLeftBottomRight[tlbrKey] = (topLeftBottomRight[tlbrKey] || 0) + 1;
	  bottomLeftTopRight[bltrKey] = (bottomLeftTopRight[bltrKey] || 0) + 1;
	});
  
	return attackingPairs;
  }


  function countAttackingBishopPairs2(bishops) {
    let topLeftBottomRight = {}; 
    let bottomLeftTopRight = {}; 
    let totalPairs = 0;

    // Count bishops on each diagonal
    bishops.forEach(([x, y]) => {
        let tlbrKey = x + y; // Key for the top-left to bottom-right diagonal
        let bltrKey = x - y; // Key for the bottom-left to top-right diagonal

        topLeftBottomRight[tlbrKey] = (topLeftBottomRight[tlbrKey] || 0) + 1;
        bottomLeftTopRight[bltrKey] = (bottomLeftTopRight[bltrKey] || 0) + 1;
    });

    // Apply the formula to calculate pairs for each diagonal
    Object.values(topLeftBottomRight).forEach(count => {
        if (count > 1) {
            totalPairs += count * (count - 1) / 2;
        }
    });

    Object.values(bottomLeftTopRight).forEach(count => {
        if (count > 1) {
            totalPairs += count * (count - 1) / 2;
        }
    });

    return totalPairs;
}

// Example usage
const bishops = [[0, 0], [1, 2], [2, 2], [4, 0]]; // Add your bishops' positions
console.log(countAttackingBishopPairs(bishops));
