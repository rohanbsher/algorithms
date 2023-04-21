import { TreeNode, Tree } from '../tree';

describe('Tree', () => {
	it('should perform pre-order traversal', () => {
		const tree = new Tree(new TreeNode(1, new TreeNode(2), new TreeNode(3)));
		const spy = jest.spyOn(console, 'log');

		tree.preOrderTraversal();

		expect(spy).toHaveBeenCalledTimes(3);
		expect(spy.mock.calls[0][0]).toBe(1);
		expect(spy.mock.calls[1][0]).toBe(2);
		expect(spy.mock.calls[2][0]).toBe(3);

		spy.mockRestore();
	});

	it('should perform in-order traversal', () => {
		const tree = new Tree(new TreeNode(1, new TreeNode(2), new TreeNode(3)));
		const spy = jest.spyOn(console, 'log');

		tree.inOrderTraversal();

		expect(spy).toHaveBeenCalledTimes(3);
		expect(spy.mock.calls[0][0]).toBe(2);
		expect(spy.mock.calls[1][0]).toBe(1);
		expect(spy.mock.calls[2][0]).toBe(3);

		spy.mockRestore();
	});

	it('should perform post-order traversal', () => {
		const tree = new Tree(new TreeNode(1, new TreeNode(2), new TreeNode(3)));
		const spy = jest.spyOn(console, 'log').mockImplementation(() => { });

		tree.postOrderTraversal();

		expect(spy).toHaveBeenCalledTimes(3);
		expect(spy.mock.calls[0][0]).toBe(2);
		expect(spy.mock.calls[1][0]).toBe(3);
		expect(spy.mock.calls[2][0]).toBe(1);

		spy.mockRestore();
	});


});
