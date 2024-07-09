function rob(nums: number[]): number {
    let dp = Array.from({length : nums.length}, () => new Array(nums.length).fill(0))
    let dp[0][0]= 1;

    for(let i=1; i<nums.length; i++){
        for(let j=i; j<i+1; j++){
			
        }
    }
};

/*
Explore test cases:
planning to rob houses along a street 
each house 1, house 2, house 3($20)

    2   7   9   3   1    
2   t   f   f   f   f
7   f   f   f   f   f
9   f   f   f   f   f
3   f   f   f   f   f
1   f   f   f   f   f

let value = 
for(let i of nums){
    for(let j of nums){
        if (i-1 and j-1 are true) {
            skip
            dont' rob
        } else {
            value += dp[i][j]
        }
    }
}

*/