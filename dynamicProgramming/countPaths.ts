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