import { describe, expect, it, beforeEach } from '@jest/globals';
import { sieveOfEratosthenes } from '../find-all-primes'

describe('sieveOfEratosthenes', () => {
	it('should return an empty array when the upper bound is less than 2', () => {
	  expect(sieveOfEratosthenes(1)).toEqual([]);
	  expect(sieveOfEratosthenes(0)).toEqual([]);
	  expect(sieveOfEratosthenes(-10)).toEqual([]);
	});
  
	it('should return an array of prime numbers between 2 and the upper bound', () => {
	  expect(sieveOfEratosthenes(2)).toEqual([2]);
	  expect(sieveOfEratosthenes(5)).toEqual([2, 3, 5]);
	  expect(sieveOfEratosthenes(10)).toEqual([2, 3, 5, 7]);
	  expect(sieveOfEratosthenes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
	  expect(sieveOfEratosthenes(100)).toHaveLength(25);
	});
  
	it('should return the same result for the same input value', () => {
	  const primes1 = sieveOfEratosthenes(20);
	  const primes2 = sieveOfEratosthenes(20);
	  expect(primes1).toEqual(primes2);
	});
  });
  