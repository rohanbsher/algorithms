import { ReversePolishNotation } from '../reverse-polish-notation';
import { describe, expect, it, beforeEach } from '@jest/globals';

describe('ReversePolishNotation', () => {
	let rpn: ReversePolishNotation;

	beforeEach(() => {
		rpn = new ReversePolishNotation();
	});

	it('should evaluate RPN expressions', () => {
		expect(rpn.evalRPN(['2', '1', '+', '3', '*'])).toBe(9);
		expect(rpn.evalRPN(['5', '1', '2', '/', '*'])).toBe(0);
		expect(rpn.evalRPN(['4', '13', '5', '/', '+'])).toBe(6);
		expect(rpn.evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])).toBe(22);
	});

});
