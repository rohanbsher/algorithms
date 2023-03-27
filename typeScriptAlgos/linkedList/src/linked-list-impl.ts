type ls = LinkedList | null | undefined;

export class LinkedList {
	constructor(public val: number, public next?: ls) { }

	swapNodeByK(node: ls, k: number): ls {
		let prev: ls = null;
		let curr: ls = node;

		for (let i = 0; i < k; i++) {
			if (curr) {
				[curr.next, curr, prev] = [prev, curr.next, curr];
			} else {
				return prev;
			}
		}

		node!.next = this.swapNodeByK(curr as ls, k);

		return prev;
	}

	printlist(head: ls): void {
		if (!head) {
			return
		}

		let str = '';

		while (head) {
			str += head.val + ' '
			head = head.next
		}

		console.log(str);
	}
}
