/*

You are given an m x n grid. You start at the top left corner at array[0][0], and want to move to the bottom right corner array[m-1][n-1]. You can only move down or right in the grid. Given m and n, return the number of unique paths from the top left to the bottom right.

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] integer m

[input] integer n

[output] integer

Number of paths from top left to bottom right

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}

*/

function reverseString(input: String): String{
	if(input === "") {
		return "";
	}

	return reverseString(input.substring(1)).concat(input[0])
}

console.log(reverseString("helloWorld") === "dlroWolleh")


function solution(m, n) {
    
    let dp = Array.from({ length: m }, () => new Array(n).fill(0));
    console.log(dp)
    
    for(let i=0; i<m; i++){
        dp[i][0] = 1
    }
    for(let i=0; i<n; i++){
        dp[0][i] = 1
    }
    
    
    for(let i=1; i < m; i++) {
        for(let j=1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    
    return dp[m-1][n-1]
    
}

// function solution 


/*
// function recursion(m,n,row,column, memo){
        
    //     if(m.length >= row || n.length >= column){
    //         return 0
    //     }
        
    //     //we have reached end bottom right
    //     if(m.length-1 === row || n.length-1 === column){
    //         return 1
    //     }
        
    //     let key = `${row}_${column}`
    //     if(memo[key]){
    //         return memo[key]
    //     }
        
    //     let movedown = recursion(m,n,row+1,column, memo)
    //     let moveright = recursion(m,n,row, column+1, memo)
        
    //     memo[key] = movedown + moveright;
    //     return memo[key]
    // }
    
    
    // return recursion(m,n,0,0,{})





given a grid m * n 


1 2 3
4 5 6
7 8 9

we have to move through a grid 
lets intialize it with 0

0   0   0
0   0   0
0   0   0

if we do it recursively 
we would 

pass the array m and then array n where we can call the moving down or right methods if they are within valid indexs 

function rec(m, n, row, column)
    base case :
        when the row >= m.length and column >= n.length
        return 0
        
        when row === m.length-1 and column === n.length-1
        return 1
        
        
    recrusive step
    movedown = rec(m, n, row+1, column)
    moveright = rec(m, n, row, column+1)
    
    return movedown + moveright
    


*/