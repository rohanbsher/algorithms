import { ReversePolishNotation } from './reverse-polish-notation';
import { calculateTax } from './calculate-tax';
import { sieveOfEratosthenes } from './find-all-primes';
	

const rpn = new ReversePolishNotation();
const primes = sieveOfEratosthenes(20)
console.log(primes);