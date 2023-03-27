export interface Operators {
	[key: string]: (a: number, b: number) => number
}

export class ReversePolishNotation {

	evalRPN(tokens: string[]): number {

		const ans: Operators = {
			'+': (a: number, b: number) => a + b,
			'-': (a: number, b: number) => a - b,
			'*': (a: number, b: number) => a * b,
			'/': (a: number, b: number) => Math.trunc(a / b),
		}

		const ansArr: number[] = []

		tokens.forEach(t => {
			if (ans[t] != null) {
				const b = ansArr.pop()
				const a = ansArr.pop()
				ansArr.push(ans[t](a!, b!))
			} else {
				ansArr.push(Number(t))
			}
		})

		return ansArr.pop()!
	};
}
