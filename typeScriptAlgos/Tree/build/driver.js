"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tree_1 = __importDefault(require("./tree"));
/*
                1				  1
               / \				 /
              10   9			    2
             / \ / \		   / \
            4  5 6  7		  4	  5

*/
let tree = new tree_1.default(1, new tree_1.default(10, new tree_1.default(4), new tree_1.default(5)), new tree_1.default(9, new tree_1.default(6), new tree_1.default(7)));
let tree2 = new tree_1.default(1, new tree_1.default(2, new tree_1.default(4), new tree_1.default(5)));
console.log("Merge trees : ");
console.log("good nodes trees : ");
// tree.mergeTrees(tree, tree2)
// tree.printTree(tree)
// tree.leftViewOFTree
console.log(tree.goodNodes(tree));
// tree.printTree(tree)
// console.log("Pre Order Traversal: ")
// console.log("Pre Order Traversal: ")
// console.log("Pre Order Traversal: ")
// tree.preOrderTraversal(tree)
// console.log("\nIn Order Traversal: ")
// tree.inOrderTraversal(tree)
// console.log("\nPost Order Traversal:")
// tree.postOrderTraversal(tree)
