



/*
function findTargetInBST(root: TreeNode | null, k: number): boolean {

    let map = new Map()
    
    function dfs(root: TreeNode, k): boolean{
        if(!root){
            return false
        }

        if(map.has(root.val)){
            return true
        }
        map.set(k-root.val, 1)
        

        return dfs(root.left, k) || dfs(root.right, k)
    }
    
    return dfs(root, k)    
    
};














type check = TreeNode | null

interface check1{
  left: TreeNode | null
  right: TreeNode | null
}

class TreeNode{
  constructor(public val: number, public left: check=null, public right: check = null){
    this.val = val
    this.left = left
    this.right = right
  }
}

function bstLeastCommonAncestor(root: check, node1: number, node2: number){  
    if(!root){
      return
    }

    if(node1 === root.val || node2 === root.val){
      return root.val
    }

    let left: number = bstLeastCommonAncestor(root.left, node1, node2)!
    let right: number = bstLeastCommonAncestor(root.right, node1, node2)!

    if(left && right){
      return root.val
    } else if(!left){
      return right
    } else { 
      return left
    }
}
// n1 = 1  n2 = 15


      10
     /  \
    5    20
   /     / \
  1     15  23



let tree = new TreeNode(10, 
  new TreeNode(5, new TreeNode(1)), 
  new TreeNode(20, new TreeNode(15), new TreeNode(23)))

// console.log(bstInOrder(tree))
console.log(bstLeastCommonAncestor(tree, 20, 15))























// You're a coder - you know how important it is to have a closing parenthesis for every opening parenthesis! Given n pairs of parentheses, write a function that generates all of the possible combinations of regular parentheses, sorted in lexicographical order.

// Example

// For n = 4, the output should be

// solution(n) = 
// [
//   "(((())))", "((()()))",
//   "((())())", "((()))()", 
//   "(()(()))", "(()()())", 
//   "(()())()", "(())(())", 
//   "(())()()", "()((()))", 
//   "()(()())", "()(())()", 
//   "()()(())", "()()()()"
// ]
// Input/Output

// [execution time limit] 5 seconds (ts)

// [input] integer n

// A number representing the pairs of parentheses. A pair is considered to be an opening parenthesis ( and a closing parenthesis ).

// Guaranteed constraints:
// 1 ≤ n ≤ 8.

// [output] array.string

// An array containing strings representing all possible combinations of well-formed parentheses.






function solution(n: number): string[] {
    
    let result: string[] = []
    
    function backtrack(paren: string, open: number, close: number){
        if(paren.length === n * 2){
            result.push(paren);
            return;
        }
        
        if(open < n){
            backtrack(paren + '(', open+1, close);
        }
        
        if(close < open){
            backtrack(paren + ')', open, close+1);
        }
    }
    
    backtrack('', 0, 0);
    
    return result
}























// finds the max path
function maxPathSum(root: TreeNode | null): number {
    let maxPath = -Infinity

    function dfs(root: TreeNode): number {
        //base case
        if(!root){
            return 0
        }

        let left = Math.max(dfs(root.left), 0)
        let right = Math.max(dfs(root.right), 0)

        maxPath = Math.max(maxPath, root.val + left + right)

        return root.val + Math.max(left, right)
    }

    dfs(root)

    return maxPath === -Infinity ? 0 : maxPath
};















function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {

    if(!p && !q){
        return true
    }

    if(!p || !q){
        return false
    }

    if(p.val !== q.val){
        return false
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    
};













function inorderTraversal(root: TreeNode | null): number[] {
    const result = [];
    function traverse(root: TreeNode | null): number[] {
        if (root) {
            traverse(root.left);
            result.push(root.val);
            traverse(root.right);
        }
        return result;
    }
    return traverse(root);
};

















function minDepth(root: TreeNode | null): number {

    //baseCase
    // if the tree is empty return 0
    if(!root){
        return 0 
    }
    // [1, null, 3]
    // if the root has no children we've reached the end of tree
    if(!root.left && !root.right){
        return 1
    } 
    
    let left = minDepth(root.left)
    let right = minDepth(root.right)

    if(left === 0){
        left = Infinity
    } else if(right === 0){
        right = Infinity
    }
    
    return 1 + Math.min(left, right)
    
};














// return a sum array from both elemnts and center if length is odd

function solution(array: number[]): number[] {

    let [left, right] = [0, array.length-1]
    
    let ansArr: number[] = []
    while(left<right) {
        ansArr.push(array[left] + array[right])
        
        left++
        right--
    }
    if(left === right){
        ansArr.push(array[left])
    }

    return ansArr
}












// return indicies of two compliment pairs that add up to the target value input arr = [1,2,3,5] target = 5  |   output = [1, 2]

function solution(array: number[], target: number): number[] {

    const seenValueOnIndex = new Map<number, number>(); 
    
    for(let i=0 ; i<array.length; i++) {
        let difference = target - array[i]
        if(seenValueOnIndex.has(difference)){
            return [seenValueOnIndex.get(difference), i]
        }
        seenValueOnIndex.set(array[i], i)
    }
   
  return [];
}










// flip an array in place

function solution(array: number[]): number[] {

    let i = 0
    let j = array.length-1;
    while(i<j){
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
        
        i++
        j--
    }
    
    return array

}












// reversing an array in blocks 

function solution(array: number[], k: number): number[] {

   if (k <= 1 || k > array.length) {
    // If k is 1 or less, or greater than the length of the array, do nothing
    return array;
  }

  let result: number[] = [];

  for (let i = 0; i < array.length; i += k) {
    const block = array.slice(i, i + k);
    if (block.length === k) {
      // If the block is full, reverse it and add it to the result
      result.push(...block.reverse());
    } else {
      // If the block is not full, add it to the result as is
      result.push(...block.reverse());
    }
  }

  return result;
}

















function subdomainVisits(cpdomains: string[]): string[] {

    // we have strings that are separated by commas
    // [] -> 
    // split the array based on space 
    // split the second half based on period
    // 
    
    let domains = new Map()
    let retStr: string [] = []
    
    for(let i=0; i<cpdomains.length; i++){
        let [count, domainName] = cpdomains[i].split(' ');
        
        let subDomain = domainName.split('.')
        
        for(let j=0; j<subDomain.length; j++){
            let sub = subDomain.slice(j).join('.')
            domains.set(sub, (domains.get(sub) || 0) + parseInt(count))
        }    
    }
    
    for(let [key, value] of domains){
        retStr.push(`${value} ${key}`)
    } 
    
    return retStr

};















class Logger {
    dict = new Map<string, number>()
    constructor() {
    }

    shouldPrintMessage(timestamp: number, message: string): boolean {
    
        if(this.dict.get(message) != null){
            if(this.dict.get(message)+10 <= timestamp){
                this.dict.set(message, timestamp)
                return true
            } else {
                return false
            }
        } else {
            this.dict.set(message, timestamp)
            return true
        }
        
    }
}











// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
 

function removeElements(head: ListNode | null, val: number): ListNode | null {
    if(!head){
        return head
    }
    
    let prev = new ListNode(-Infinity, head)
    let curr = prev
    while(curr.next){
        if(curr.next.val === val) {
             curr.next = curr.next.next
        } else {
        curr = curr.next
        }
    }
    return prev.next
    
};

*/