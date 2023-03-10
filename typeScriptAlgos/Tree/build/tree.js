"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
    preOrderTraversal(node) {
        if (!node) {
            return;
        }
        process.stdout.write(node.val + "->");
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
    }
    inOrderTraversal(node) {
        if (!node) {
            return;
        }
        this.inOrderTraversal(node.left);
        process.stdout.write(node.val + "->");
        this.inOrderTraversal(node.right);
    }
    postOrderTraversal(node) {
        if (!node) {
            return;
        }
        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        process.stdout.write(node.val + "->");
    }
    /*
                    1				  1
                   / \				 /
                  2   3			    2
                 / \ / \		   / \
                4  5 6  7		  4	  5
    
    1+1 = 2  2
    
    */
    mergeTrees(t1, t2) {
        if (!t1) {
            return t2;
        }
        if (!t2) {
            return t1;
        }
        t1.val += t2.val;
        t1.left = this.mergeTrees(t1.left, t2.left);
        t1.right = this.mergeTrees(t1.right, t2.right);
        return t1;
    }
    /*
    draw a tree:
    
                    1
                   / \
                  2   3
                     / \
                     6  7
    1 -> 2 ->
    
    
    
    */
    leftViewOFTree(tree) {
        if (!tree) {
            return;
        }
    }
    goodNodes(root) {
        if (!root) {
            return 0;
        }
        let answer = 0;
        function dfs(root, max) {
            if (!root) {
                return;
            }
            if (root.val >= max) {
                answer++;
                max = root.val;
            }
            dfs(root.left, max);
            dfs(root.right, max);
        }
        dfs(root, root.val);
        return answer;
    }
    ;
    printTree(tree) {
        if (!tree) {
            return;
        }
        process.stdout.write(tree.val + " - ");
        this.printTree(tree.left);
        this.printTree(tree.right);
    }
}
exports.default = TreeNode;
