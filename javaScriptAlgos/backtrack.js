
// let v1Results = []
let v1Results = []

function printSubsequences(word, subseq="") {
	if (word.length === 0) {
	  console.log("\"" + subseq + "\"")
	   return
	}
   // abcd 
	printSubsequences(word.substring(1, word.length), subseq+word[0]) // include the char
	printSubsequences(word.substring(1, word.length), subseq) // omit the char
}

printSubsequences("ABCD")