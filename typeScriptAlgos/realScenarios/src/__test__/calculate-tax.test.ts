import { calculateTax } from "../calculate-tax"

describe("CalculateTax", () => {
	const taxBrackets = [[0, 10000, .10], [10000, 30000, 0.15], [30000, 60000, .25], [60000, Infinity, .35]]

	describe("calculateTax", () => {
		it("should calculate tax for a given item", () => {
			expect(calculateTax(80000, taxBrackets)).toEqual(18500);
			expect(calculateTax(0, taxBrackets)).toEqual(0);
			expect(calculateTax(10, taxBrackets)).toEqual(1);
			expect(calculateTax(9, taxBrackets)).toEqual(0);
		})
	});
});