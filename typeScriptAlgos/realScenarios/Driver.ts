import { ReversePolishNotation } from './ReversePolishNotation';

const rpn = new ReversePolishNotation();

// Test 1: Simple addition
const tokens1 = ['2', '3', '+'];
const expected1 = 5;
const result1 = rpn.evalRPN(tokens1);
console.log(`Test 1 - Expected: ${expected1}, Result: ${result1}`);

// Test 2: Complex expression
const tokens2 = ['4', '13', '5', '/', '+'];
const expected2 = 6;
const result2 = rpn.evalRPN(tokens2);
console.log(`Test 2 - Expected: ${expected2}, Result: ${result2}`);

// Test 3: Division with negative result
const tokens3 = ['-7', '3', '/'];
const expected3 = -2;
const result3 = rpn.evalRPN(tokens3);
console.log(`Test 3 - Expected: ${expected3}, Result: ${result3}`);

// Test 4: Multiplication with decimal result
const tokens4 = ['5', '1', '2', '/', '*'];
const expected4 = 0;
const result4 = rpn.evalRPN(tokens4);
console.log(`Test 4 - Expected: ${expected4}, Result: ${result4}`);
