export function calculateTax(taxableIncome: number, brackets: number[][]): number {
	let incomeTax = 0

	for(const [lowerLimit, upperLimit, taxRate] of brackets) {
		if(taxableIncome <= lowerLimit) {
			break;
		} else if(taxableIncome <= upperLimit) {
			incomeTax += (taxableIncome - lowerLimit) *  taxRate
		} else {
			incomeTax += (upperLimit - lowerLimit) * taxRate
		}
	}

	return Math.trunc(incomeTax);
}