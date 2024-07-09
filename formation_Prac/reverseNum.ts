
function reverse(num : number): number { // 123

	let reversed: number = 0;
  
	while (num !== 0) { 
  
	  let mod = num % 10 //
  
	  reversed = reversed * 10 + mod // 321
  
	  num = Math.floor(num / 10) // 0
  
	}
  
  
	return reversed
  }





function reverse2(num: Number): string {

	let str: string = num.toString();
  
	let reverse = str.split('').reverse().join('');
  
	return reverse
  }
  
  console.log(reverse(123))
  console.log(reverse(111))
  console.log(reverse(10100))
  console.log(reverse(0))
  
  