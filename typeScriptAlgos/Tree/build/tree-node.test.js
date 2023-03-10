"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tree_1 = __importDefault(require("./Tree"));
describe('TreeNode', () => {
    const tree = new Tree_1.default(1, new Tree_1.default(2, new Tree_1.default(4), new Tree_1.default(5)), new Tree_1.default(3, new Tree_1.default(6), new Tree_1.default(7)));
    describe('preOrderTraversal', () => {
        it('should traverse the tree in pre-order and print the node values', () => {
            const spy = jest.spyOn(process.stdout, 'write').mockImplementation(() => true);
            tree.preOrderTraversal(tree);
            expect(spy).toHaveBeenCalledWith('1->2->4->');
            spy.mockRestore();
        });
    });
    // 	describe('inOrderTraversal', () => {
    // 		it('should traverse the tree in in-order and print the node values', () => {
    // 			const spy = jest.spyOn(process.stdout, 'write').mockImplementation(() => true)
    // 			tree.inOrderTraversal(tree)
    // 			expect(spy).toHaveBeenCalledWith('4->2->5->1->6->3->7->')
    // 			spy.mockRestore()
    // 		})
    // 	})
    // 	describe('postOrderTraversal', () => {
    // 		it('should traverse the tree in post-order and print the node values', () => {
    // 			const spy = jest.spyOn(process.stdout, 'write').mockImplementation(() => true)
    // 			tree.postOrderTraversal(tree)
    // 			expect(spy).toHaveBeenCalledWith('4->5->2->6->7->3->1->')
    // 			spy.mockRestore()
    // 		})
    // 	})
    // 	describe('mergeTrees', () => {
    // 		it('should merge two trees and return the merged tree', () => {
    // 			const t1 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
    // 			const t2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
    // 			const mergedTree = new TreeNode(2, new TreeNode(4), new TreeNode(6))
    // 			expect(tree.mergeTrees(t1, t2)).toEqual(mergedTree)
    // 		})
    // 	})
    // 	describe('leftViewOFTree', () => {
    // 		it('should print the left view of the tree', () => {
    // 			const spy = jest.spyOn(process.stdout, 'write').mockImplementation(() => true)
    // 			tree.leftViewOFTree(tree)
    // 			expect(spy).toHaveBeenCalledWith('1->2->4->')
    // 			spy.mockRestore()
    // 		})
    // 	})
    // 	describe('printTree', () => {
    // 		it('should print the tree in pre-order', () => {
    // 			const spy = jest.spyOn(process.stdout, 'write').mockImplementation(() => true)
    // 			tree.printTree(tree)
    // 			expect(spy).toHaveBeenCalledWith('1 - 2 - 4 - 5 - 3 - 6 - 7 - ')
    // 			spy.mockRestore()
    // 		})
    // 	})
});
