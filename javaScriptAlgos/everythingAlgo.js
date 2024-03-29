
/*

function linearizeRowMajor(matrix) {

  let result = []

  for(let i=0; i<matrix.length; i++){
    // console.log("here")
    result = result.concat(matrix[i])
  }

  return result
}

function linearizeColumnMajor(matrix) {
  let result = []

  let row = matrix.length
  let column = matrix[0].length
  let left = 0
  let top = 0

  while(left<column){
    for(let i=0; i<row; i++){
      result.push(matrix[i][left])
    }
    left++
  }

  return result
}

let matrix = [
  [ 1,  2,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15]
];

console.log(linearizeRowMajor(matrix))
console.log(linearizeColumnMajor(matrix))









iterative solution to Inorder Traversal

'''
function solution(root) {
    
    if(!root){
        return []
    }
    
    let stack = []
    let returnArr = []
    let curr = root
    
        1
        /\
       2  3
       /\
      5 7
    
    while(stack.length > 0 || curr != null){
        while(curr){
            stack.push(curr)
            curr = curr.left
        }
        
        curr = stack.pop() // 1 7
        returnArr.push(curr.value)
        curr = curr.right
    }
    
    return returnArr
    
}













'''
Find Nodes Occurring K Times

Given a binary tree and an integer (k), find and return an array of unique nodes that occur **at least (k) times** in the tree.

For example, if Node(5) occurs 3 times in the tree, and (k) = 3, your result array would include the value of Node(5) (simply **5** in this case).
 

EXAMPLE(S)
    2
 2     3
7 3  14 9

k = 2, should return [2, 3]

   12
 3    3
1 _  6 _

k = 2, should return [3]

       12
    3      3
  1  _    6  _
9  _     _ _

k = 1, should return [12, 3, 1, 6, 9]
 

FUNCTION SIGNATURE
function findNodesOccuringKTimes(head, k) {
'''

use map and we loop through the tree
push to array



class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}


function findNodesOccuringKTimes(tree, k) {
  if(!tree){
    return []
  }

  let trackFrequency = new Map()
  let nodesRepeatingKTimes = new Set();

  function dfs(root){
    if(!root){
      return
    }

    trackFrequency.set(root.val, (trackFrequency.get(root.val) || 0) +1)
   
    if(trackFrequency.get(root.val) >= k){
      nodesRepeatingKTimes.add(root.val)
    }

    dfs(root.left)
    dfs(root.right)
  }

  dfs(tree)
  
  return Array.from(nodesRepeatingKTimes)
}





















You're holding a silent auction with 650 bidders, assigning each bidder a numbered sign between 1-650. A person raises their sign when they want to make an offer.

However, they sometimes hold the sign upside-down, and the auctioneer
mistakes their number for a different number. For example, bidder #6 
raises their sign upside-down and could be mistaken for bidder #9.

Write a function that underlines all numbers from 1-650 that can be
misinterpreted for another number within that range when rotated 180 degrees.
 

EXAMPLE(S)
The number 6 should be underlined because it can be misinterpreted for the number 9 and vice versa.
 
underLineMistakenNumbers(650):

1,2,3,4,5,6,7,8,9,10
Numbers that can be mistaken: 1,6,8,9,0
Numbers that can't be mistaken: 2,3,4,5,7 

If number contains a number that can't be mistaken or trailing zeros: disregard


601

109


6, 9, 16, 18, 19,
61, 66, 68, 81, 86,
89, 91, 98, 99, 109,
119, 161, 191, 601, 611


Pseudocode:
1. check for trailing zero | in-bound
  - 160 = (160%10 === 0) will determine if it has trailing zero
2. variable 6 - 9 
3. string - reverse that string and switch 6-9
601
result string: "109"
901

string = ""
string = value + string // preprend
=  9
09
109

string.reverse().join('')

4. compare the string and ch
if flipped == original -> can't be mistaken
else (flipped != original) -> can be mistaken -> print

-- if flipped out of bounds, continue

166
991



FUNCTION SIGNATURE
function underlineMistakenNumbers(upperBound) {
def underlineMistakenNumbers(upperBound: int) -> None:
'''


function underlineMistakenNumbers(upperBound) {
  const result = [];

  for(let i = 1; i <= upperBound; i++){
    if(i % 10 === 0) continue;
    let reverseNum = reverse(i);
    if(reverseNum > upperBound) continue;
    if(reverseNum !== i) result.push(i)
  }
  return result
}

function reverse(i) {
  let strNum = String(i)
  let rev = strNum.split("").reverse();
  let notmistakenNums = new Set(['2', '3', '4', '5', '7']);

  for(let j = 0; j < rev.length; j++) {
    if(notmistakenNums.has(rev[j])) {
      return i; 
    }
    
    if(rev[j] == '6') {
      rev[j] = '9';
    } else if(rev[j]  == '9') {
      rev[j] = '6'
    }
  }

  return Number(rev.join("")) 
}

console.log(underlineMistakenNumbers(650))



//-------BACKTRACKING--------
function underlineMistakenNumbers(upperBound) {
  function getNumDigits(n) {
    let count = 0
    while (n > 0) {
      count++
      n = Math.floor(n / 10)
    }
    return count
  }

  function generatePermutations(length) {
    const digits = ["0", "1", "6", "8", "9"]
    const results = new Set()

    function backtrack(numberStr) {
      if (numberStr.length > 0)
        results.add(Number(numberStr))

      if (numberStr.length < length)
        for (const digit of digits)
          backtrack(numberStr + digit)
    }

    backtrack("")
    return results
  }

  function underlineMistakenNumber(num) {
    if (num % 10 === 0)
      return

    for (const digit of String(num))
      if (!flippable.has(Number(digit)))
        return

    let flippedStr = ""
    for (const digit of String(num)) {
      if (digit === "6")
        flippedStr = "9" + flippedStr
      else if (digit === "9")
        flippedStr = "6" + flippedStr
      else
        flippedStr = digit + flippedStr
    }

    const flippedNum = Number(flippedStr)

    if (flippedNum === num || flippedNum > upperBound)
      return

    count++
    console.log(count + ": " + num)
  }

  const nums = generatePermutations(getNumDigits(upperBound))
  const flippable = new Set([1, 6, 8, 9, 0])
  let count = 0
  for (const num of nums)
    if (num < upperBound)
      underlineMistakenNumber(num)
}

underlineMistakenNumbers(650)


















class Node {
  constructor(val, left=null, right=null){
    this.val = val
    this.left = left
    this.right = right
  }
}

// Sum all the paths down till the leaf node

function sumAllTreePathDigits(root, prev_total=0){
  if(!root){
    return 0
  }

  let curr_total = (prev_total * 10) + root.val
  
  if(!root.left && !root.right){
    return curr_total
  }

  let left = sumAllTreePathDigits(root.left, curr_total)
  let right = sumAllTreePathDigits(root.right, curr_total)
  
  return left + right
}

// Test Case 1: None
console.log(sumAllTreePathDigits(null) === 0);

// Test Case 2: One Node
let one_node = new Node(5);
console.log(sumAllTreePathDigits(one_node) === 5);

// Test Case 3: One Path
//        1
//      1
//    1
//  1
let one_path = new Node(1, new Node(1, new Node(1, new Node(1))));
console.log(sumAllTreePathDigits(one_path) === 1111);

// Test Case 4: Complete Tree
//       1
//    2      3
//  4   5  6   7
let complete_tree = new Node(1,
  new Node(2,
    new Node(4),
    new Node(5)),
  new Node(3,
    new Node(6),
    new Node(7)));
console.log(sumAllTreePathDigits(complete_tree) === 522);

// Test Case 5: Partial tree with 4 levels
//        3
//    2       4
// 1    7     3  6
//  5  3  8  2    0
let partial_4_levels = new Node(3,
  new Node(2,
    new Node(1,
      null,
      new Node(5)),
    new Node(7,
      new Node(3),
      new Node(8))),
  new Node(4,
    new Node(3,
      new Node(2),
      null),
    new Node(6,
      null,
      new Node(0))));
console.log(sumAllTreePathDigits(partial_4_levels) === 16658);

// Test Case 6: Uneven Tree
//        3
//     2     4
//  1   5      6
//     3        8
let uneven_tree = new Node(3,
  new Node(2,
    new Node(1),
    new Node(5,
      new Node(3))),
  new Node(4,
    null,
    new Node(6,
      null,
      new Node(8))));
console.log(sumAllTreePathDigits(uneven_tree) === 7042);

// Test Case 7: Tree with only left child nodes
//        4
//      3
//    2
//  1
let left_child_tree = new Node(4, new Node(3, new Node(2, new Node(1))));
console.log(sumAllTreePathDigits(left_child_tree) === 4321);

// Test Case 8: Tree with only right child nodes
//  1
//    2
//      3
//        4
let right_child_tree = new Node(1, null, new Node(2, null, new Node(3, null, new Node(4))));
console.log(sumAllTreePathDigits(right_child_tree) === 1234);


























var maxPathSum = function(root) {
    let maxPathSum = -Infinity

    function dfs(root){
        if(!root){
            return 0
        }
        

        let leftSum = dfs(root.left)
        let rightSum = dfs(root.right)

        let currPathSum = Math.max(leftSum+root.val, rightSum+root.val, leftSum+rightSum+root.val, root.val)

        maxPathSum = Math.max(currPathSum, maxPathSum)

        return Math.max(root.val, leftSum + root.val, rightSum + root.val)
    }
    dfs(root)

    return maxPathSum
};



















var deepestLeavesSum = function(root) {
    let sumOfDeepestLeaves = 0
    let level = 0
    let deepestLevelSum = 0     

    let queue = [root]

    while(queue.length > 0){
        let levelSize = queue.length
        let levelSum = 0

        for(let i=0 ; i<levelSize; i++){
            let node = queue.shift()
            levelSum += node.val

            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        deepestLevelSum = levelSum
    }
    return deepestLevelSum
};



















 Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order starting from the top left element.




function solution(m) {
    
    let spiralMatrix = []
    
    if(m.length < 1){
        return spiralMatrix
    }
    
    let matrixLength = m.length-1
    let matrixRow = m[0].length-1
    
    let top = 0, left = 0, right = matrixRow, bottom = matrixLength
    
    while(top <= bottom && left <= right){
        
        for(let i=left; i <= right; i++){
            spiralMatrix.push(m[top][i])
        }
        top++
        
        for(let i=top; i <= bottom; i++){
            spiralMatrix.push(m[i][right])
        }
        right--
        
        if(top <= bottom) {
            
            for(let i=right; i >= left; i--){
                spiralMatrix.push(m[bottom][i])
            }
            bottom--
        }
        
        if(left <= right) {
            
            for(let i=bottom; i>= top; i--) {
                spiralMatrix.push(m[i][left])
            }
            left++
        }
    }
     
    return spiralMatrix
    
}


























function solution(array) {
    
    // merge sort - ascending order
    // [6 5 4 3 2 1]
    // [ 6 5 4] [3 2 1]
    // [6] [5 4] [3] [2 1]
    // [6] [5] [4] [3] [2] [1]
    // [6] [4 5] [3] [1 2]
    // [4 5 6] [1 2 3]
    // [1 2 3 4 5 6]
    
    if(array.length <= 1){
        return array
    }
    
    let midPoint = Math.floor(array.length/2)
    let leftArr = solution(array.slice(0, midPoint))
    let rightArr = solution(array.slice(midPoint, array.length))
    
    return merge(leftArr, rightArr)
    
    function merge(leftArr, rightArr){
        let arr3 = []
        let leftIdx = 0
        let rightIdx = 0
        
        while(leftArr.length > leftIdx && rightArr.length > rightIdx){
            if(leftArr[leftIdx] <= rightArr[rightIdx]){
                arr3.push(leftArr[leftIdx])
                leftIdx++
            } else {
                arr3.push(rightArr[rightIdx])
                rightIdx++
            }
        }
        
        return arr3.concat(leftArr.slice(leftIdx)).concat(rightArr.slice(rightIdx))
    }
    
    
    
}


















//Given a linked list, make a copy of the list from the kth position (from the head) to the end of the list.


//
// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }


//
function solution(head, k) {
    
    let copyFromKthPos = []
    let node = head
    let counter = 1
    
    while(node) {
        
        if(counter >= k){
            copyFromKthPos.push(node.value)
        }
        
        node = node.next
        counter++
    }
   
    if(counter <= k){
        return [-1]
    }
    
    
    return copyFromKthPos
}

















//  Given a linked list, count the number of nodes from the kth position (from the head) to the end of the list.
//
function solution(head, k) {
   
   if(k<1){
       return 0
   }
   
   
   let countLengthOfList = 1
   let numOfNodes = -1
   
   while(head){
       if(countLengthOfList >= k){
           numOfNodes++
       }
       
       head = head.next
       countLengthOfList++
   }
   
   if(countLengthOfList <= k){
       return -1
   } 
   
   return numOfNodes+1
}













Given a linked list, return the kth element from the end of the list.

You may assume all elements have a positive integer value.
If K exceeds the length of the list, return -1 instead.

function solution(list, k) {
    
    let arr = []
    
    while(list){
        arr.push(list.value)
        list = list.next
    }
    
    if(k<1 || k>arr.length){
        return -1
    }
    
    return arr[arr.length-k]
    
}




































// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(list, k) {
    
    let arr = []
    
    while(list){
        arr.push(list.value)
        list = list.next
    }
    
    if(k<1 || k>arr.length){
        return -1
    }
    
    return arr[arr.length-k]
    
}















// valuesRepeatedExactlyKTimes
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }


function solution(root, k) {
    let valuesRepeatedExactlyKTimes = -1
    let mapValueWithFreq = new Map()
    
    function dfs(root){
        if(!root){
            return 
        }
        
        mapValueWithFreq.set(root.value, (mapValueWithFreq.get(root.value) || 0) +1)
        
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    
    
    mapValueWithFreq.forEach((value, key) => {
        if(value === k) {
            if(key < valuesRepeatedExactlyKTimes || valuesRepeatedExactlyKTimes < 1){
                valuesRepeatedExactlyKTimes = key
            }
        }
    })
    
    console.log(mapValueWithFreq)
    
    return valuesRepeatedExactlyKTimes
}















/// numOfOddElements
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(root) {
    
    let numOfOddElements = 0
    
    function dfs(root){
        if(!root) {
            return
        }
        
        if(root.value % 2 !== 0) {
            numOfOddElements++
        }
        
        dfs(root.left)
        dfs(root.right)
    }
    
    dfs(root)
    
    return numOfOddElements
}















reverse a string

function solution(string) {
    return string.split('').reverse().join('')
}









check if string is capital 

function solution(s) {
    
    if(s === s.toUpperCase()){
        return true
    } else if (s[0] === s[0].toUpperCase() && s.slice(1) === s.slice(1).toLowerCase()){
        return true
    }
    
    return false
}








Given a string s consisting of Latin letters and digits, change each of its digit to the corresponding number of ones.

function solution(s) {
    
    let returnStr = ''
    
    for(let i=0; i<s.length; i++){
        if(Number.isInteger(parseInt(s[i]))){
            const repeat1 = '1'.repeat(s[i])
            returnStr += repeat1
        } else {
            returnStr += s[i]            
        }
    }
    
    return returnStr
}


















'''

function solution(n) {
    
    let fizzBuzzArr = []
    
    for(let i=1; i <= n; i++) {
        let divisibleByThree = (i % 3 === 0)
        let divisibleByFive = (i % 5 === 0)
        
        if(divisibleByThree && divisibleByFive){
            fizzBuzzArr.push("FizzBuzz")
        } else if (divisibleByThree) {
            fizzBuzzArr.push('Fizz')
        } else if (divisibleByFive) { 
            fizzBuzzArr.push('Buzz')
        } else {
            fizzBuzzArr.push((i).toString())
        }
    }
    
    console.log(fizzBuzzArr)
    
    return fizzBuzzArr    
        
}
















Given two binary numbers represented as strings a and b, return their sum as a binary string.

function solution(a, b) {
    
    let numA = parseInt(a, 2)
    let numB = parseInt(b, 2)
    
    let add = numA + numB

    return add.toString(2)    
}















// keep summing of all digits until they reach 1 digit 

function solution(num) {
    
    let sumOfAllDigits = addDigits(num)
    
    // 999 = 27 = 9
    // 99999999999 = 109 = 11 = 2
    
    while(sumOfAllDigits > 10){
        sumOfAllDigits = addDigits(sumOfAllDigits)
    }
   
    return sumOfAllDigits

}

function addDigits(changeNum) {
    let sumDigits = 0
    while(changeNum > 0){
        sumDigits += changeNum % 10
        changeNum = Math.floor(changeNum / 10)
    }
    
    return Number(sumDigits)
}


















convert a number to its binary representation :  Number(n.toString(2))

Given a positive hexadecimal integer represented as a string, convert it to a decimal form as an integer : return parseInt(n, 16)







function isDigitPalindrom(num) {
    
    /*
    121
    121 % 10 = 1
    121 / 10 = 12
    
    12
    12 % 10 = 2
    12 / 10 = 2
    
    2
    2 % 10 = 2
    2 / 10 = 0
    
    121
    
    num = 121
    let plaindromeNum = 121
    
    121 === 121
    
    
    use a while loop to create an array of all the numbers modulo
    we're grabbing from the back so we will have the number from back
    
    convert the number array to num and compare
    
    
    
    let tempNum = num
    let plaindromeNum = [];
    
    while(tempNum > 0) {
        plaindromeNum.push(tempNum % 10) 
        tempNum = Math.floor(tempNum/10)
    }

    let convertedNum = Number((plaindromeNum.map(i => i)).join(''))
    
    return num === convertedNum; 
}   





























Given a linked list of numbers and a pivot k, partition the linked list so that all nodes less than k come before nodes greater than or equal to k.

EXAMPLE(S)
Given the linked list 5 -> 1 -> 8 -> 0 -> 3 and k = 5, the solution could be
1 -> 0 -> 3 -> 5 -> 8

or any of the following:
0 -> 1 -> 3 -> 5 -> 8
0 -> 3 -> 1 -> 5 -> 8
1 -> 3 -> 0 -> 5 -> 8
3 -> 0 -> 1 -> 5 -> 8
3 -> 1 -> 0 -> 5 -> 8
 

FUNCTION SIGNATURE
def partition(head: Node, k: int) -> Node:
'''
*/

// joined using Google meet
/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
valid case = 1 -> 1 -> 2 k=2 | ans = 1 - 1 - 2

0 - 1 - 0 - 2 k=1  | ans = 0 - 0 - 1 - 2

empty list = null

0 0 0 0 k = 2  | ans = 0 0 0 0 => assume the pivot k is in list

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(N)
Space: O(N)

Brute => 
create a new list 
loop through the existing list and basically if the value is less
than list.

1 - 4 - 7 - 5 - 8 => 1 - 3 - 4 - 5  | k = 5
        s   
                  f

4 - 1 - 5 - 8 - 6 => 1 - 4 - 5 - 6 - 8 | k = 5
        s
                  f

if(f === null){
  return head
}

if(s < k){
  s = s.next
  f = f.next
} else {
    if (f < k){
      swap s and k
      s = s.next
      f = f.next
    } else {
      f = f.next
    }
}


if(s<k){
  move s to next pointer
}

if(l < k)

newList = 1 3 4
greaterThanOrEqual = [5, 6]

until there is something in greaterThanOrEqual push to newList
basically push it to the list

loop over the array greaterThanOrEqual and push to newList

1 3 4 5 6





📆 PLAN
Outline of algorithm #: 

if(f === null){
  return head
}

if(s < k){
  s = s.next
  f = f.next
} else {
    if (f < k){
      swap s and k
      s = s.next
      f = f.next
    } else {
      f = f.next
    }
}

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

class Node {
  constructor(val, next=null){
    this.val = val
    this.next = next
  }

  toString() {
    let result = String(this.val);
    if (this.next) {
      result += ` -> ${this.next.toString()}`;
    }
    return result;
  }
}




let list = new Node(6, new Node(4, new Node(5, new Node(1))))


function partition(list, pivot) {

  // 1 //no element=null
  if(!list || !list.next){
    return list
  }

  let s = list
  let f = list.next

/*

5 -> 1 -> 8 -> 0 -> 3 and k = 0
s
               f

*/

  while(s && f){
    console.log(s.val + "   " + f.val)
    if(s.val < pivot){ 
      s = s.next
      f = f.next
    } else {
      if(f.val <= pivot){
        // s is not less than pivot
        // f is less than pivot
        // swap
        let temp = s.val
        s.val = f.val
        f.val = temp

        s = s.next
        f = f.next
      } else {
        f = f.next
      }
    }
  }

return list
}

// 5 -> 1 -> 8 -> 0 -> 3 and k = 0
//the solution could be 0 -> 5 -> 1 -> 8 -> 3

let list2 = new Node(5, new Node(-1, new Node(8, new Node(0, new Node(3)))))
let list3 = new Node(9, new Node(5, new Node(8, new Node(0, new Node(3)))))
console.log(partition(list2, -1).toString()) // 1 4 5 6
console.log(partition(list3, 9).toString()) // 1 4 5 6

// space = O(1) constant
// time = O(N) linear

/*
2 pointers approach
This solution is significantly harder but definitely recommended. Use two-pointers. one is the curr pointer and one is holding onto the first node with a greater than value. As you're iterating curr, if the value is greater than pivot, just keep moving. If the value is less than the pivot, swap the value with the node at the other pointer and then move both pointers forward. You will need to handle the special case at the front of the list.
Make sure their solution works if everything is greater than or equal to the pivot (and the other way around)

*/



















class Node {
  constructor(val, left=null, right=null){
    this.val = val
    this.left = left
    this.right = right
  }
}

// queue = 8 5 12 3 6 11 13

/*
        8    -  n
      /   \
     5     12
    / \    / \
   3   6  11 13
*/

// let treee = new Node(8, 
//     new Node(5, new Node(3, new Node(6)))
//               ,new Node(12, new Node(11), new Node(13)))
let tree = new Node(8)
let leftTree = new Node(5, new Node(3), new Node(6))
let rightTree = new Node(12, new Node(11), new Node(13))
tree.left = leftTree
tree.right = rightTree

// BFS = print 8 bfs(5) print 5 bfs(3) print 3
// go deep first 
function bfs(tree){
  if(!tree){
    return
  }  

  console.log(tree.val) // 8 5 3 6 12 11 13
  bfs(tree.left)
  bfs(tree.right)
}



// DFS
// go breadth first ==

function dfs(tree){
  if(!tree){
    return
  }
  let queue = [tree] // 5

  while(queue.length > 0){
    let node = queue.shift()

    console.log(node.val)

    if(node.left){
      queue.push(node.left)
    }

    if(node.right){
      queue.push(node.right)
    }
  }

}


// console.log(bfs(tree))

console.log(dfs(tree))


















function has_cycle(head) {

  if(!head) {
    return false
  }

  let fast = head
  let slow = head

  // 1 - 3 - 4 - 8 - null
  //             f
  //             s   
 
  while(fast && fast.next) {
    fast = fast.next.next
    slow = slow.next

    if(slow === fast) {
      return true;
    }
  }

  return false;
}

console.log(has_cycle(head) == true)
console.log(has_cycle(head2) == false)




/*
'''
Given a linked list and an integer k, reverse the list in groups of k.
 

EXAMPLE(S)
Input:
1→2→3→4→5→6
K=2

Output:
2→1→4→3→6→5
 

FUNCTION SIGNATURE
def reverseKGroup(head: ListNode, k: int) -> ListNode
'''


class Node{
  constructor(val, next=null){
    this.val = val
    this.next = next
  }
}

curr.next = null <- 1 

1 - 2 - 3 - 4
p    c 

function reverseKGroup(head, k){

  let prev = null
  let curr = head

  for(let i=0; i<k; i++){
    if(!curr){
      return prev
    }

    [curr.next, curr, prev] = [prev, curr.next, curr]
  }

  head.next = reverseKGroup(curr, k)
  return prev

}

let list = new Node(1, new Node(2, new Node(3, new Node(4))))
// console.log(reverseKGroup(list, 2))

function printlist(list){

  while(list){
    console.log(list.val)
    list = list.next
  }
}

printlist(list)
console.log('new List')
printlist(reverseKGroup(list, 2))
*/























/*
Given a binary tree, return the deepest node (furthest away child). 

Follow-up: If the Fellow did it recursively, ask them to do it iteratively or vice versa.


EXAMPLE 1:
    a
   / \
  b   c
 /
d

returns d

EXAMPLE 2:
    a
   / \
  b   c

returns b or c

EXAMPLE 3:
    a

returns a

EXAMPLE 4:
    a - 1
     \ 
      b - 2
       \
        c - 3
         \
          d - 4

returns d

Edge cases:
- One node tree: just return the root
- Empty tree: invalid input, don't worry about it
- Tree like a linked list


Approach 1 - BFS:
- Push each node from each level from top to bottom to queue
- At each level, we push currNode to the nodes []
while(queue.length > 0){
  maxVal = queue[0]
  queue.shift() // remove the first element 
}
- let maxVal = queue[0] // FIFO
- At the end, we can return the last index of the nodes []

Approach 2 (iterative):
- Traverse through tree
  - push node onto stack
  - pop node from stack
  - increment plus one
  - push left and right children if not null
  - Compare maxHeight with current height
    - If greater
      - store new height as maxHeight and node as maxNode
- return maxNode



FUNCTION SIGNATURE
function deepestNode(root)

EXAMPLE 1:
    a
   / \
  b   c
 /
d

returns d

maxVal = d
queue = []





class Node {
  constructor(val, left=null, right=null){
    this.val = val
    this.left = left
    this.right = right
  }
}

function deepestNode(root) {
  if (!root) return null;
  let maxVal = null;
  const queue = [root];
  // queue = dequeue()
  while (queue.length > 0) { // O(n) iterations of the loop
    maxVal = queue[0];
    const current = queue.shift(); // every shift is O(n)
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return maxVal;
}

// Time: O(n ^ 2)
// Space: O(n)

// <- nodes coming off the front || queue || <- nodes going in the back

let tree = new Node('a', new Node('b', new Node('d')), new Node('c'))
let tree1 = new Node('a', new Node('b'), new Node('c'))
let tree2 = new Node('a')
let tree3 = new Node('a', new Node('b', new Node('c', new Node('d'))))
let tree4 = new Node('a',
              new Node('b',
                new Node("v"),
                new Node('y')),
                 
              new Node('d'))

console.log(deepestNode(null), null)
console.log(deepestNode(tree), "d")
console.log(deepestNode(tree1), "c")
console.log(deepestNode(tree2), "a")
console.log(deepestNode(tree3), "d")
console.log(deepestNode(tree4), "y")

















/*
'''
❓ PROMPT
We've been given a list of employees at the company, each person's seniority is denoted by a number, eg: Junior => 3, Senior => 5, and so on.

For each person on the list, we want to find an adjacent employee that outranks them in the list to become their mentor. Return a new list of the same length corresponding to the level of the mentor.

If someone can't find an adjacent superior, they should not be assigned a mentor so it should return their own level.

Example(s)
head = 3 -> 1 -> 3
assignMentors(head) == [3,3,3]

head = 5 -> 6 -> 9
assignMentors(head) == [6,9,9]

head = 2 -> 2 -> 2
assignMentors(head) == [2,2,2]

head = 2 -> 7 -> 4 -> 3 -> 5
assignMentors(head) == [7,7,7,5,5]
 

🔎 EXPLORE
List your assumptions & discoveries:
0 1 0 -> 1 1 1
1 5 1 -> 5 5 5
5 1 1 -> 5 5 1
1 2 3 -> 2 3 3

Insightful & revealing test cases:
// 4 5 6 7 8
// 

currNode = 4
nextNode = 5

if(currNode < nextNode) then update currNode
else if (currNode > nextNode) the update nextNode

we basically can see from the test case that as we go from left to right of the list

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n) // every element in the list
Space: O(1) // we're updating the list in place
 

📆 PLAN
Outline of algorithm #: 
 
0 - 1 - 0 = 1 - 1 - 1

currNode - 
nextNode - 


🛠️ IMPLEMENT
function assignMentors(head) {
def assignMentors(head: Node) -> list[int]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''


class Node{
  constructor(val, next=null){
    this.val = val
    this.next = next
  }
}

// function assignMentors(head) {
//   if(!head){
//     return head
//   }
//   let arr = [head.val]

//   function compareAdjacentMentors(head){
//     if(!head.next){
//       return
//     }

//     compareAdjacentMentors(head.next)

//     // 0 1 0 0= 1 1 1
//     // 1 1 1
//     //[1, ]
//     // console.log(head.val + "  --  " + head.next.val)
//     if(head.val < head.next.val){
//       head.val = head.next.val
//       arr.push(head.next.val)
//     } else if(head.next.val < head.val){
//       head.next.val = head.val
//       arr.push(head.val)
//     }

//   }

//   compareAdjacentMentors(head)
//   return arr
// }


function assignMentors(head) {
  const results = []

  const dummy = new Node(Number.MIN_VALUE, head)
  let prev = dummy
  let curr = head

  while (curr) {

    results.push(Math.max(
      curr.val,
      prev.val,
      curr.next ? curr.next.val : Number.MIN_VALUE
    ))

    prev = curr
    curr = curr.next
  }

  return results
}

console.log(assignMentors(null) === null || JSON.stringify(assignMentors(null)) =="[]")

let head = new Node(1) // 1
console.log(JSON.stringify(assignMentors(head)) == "[1]")

head = new Node(3, new Node(1, new Node(3))) // 3 -> 1 -> 3
console.log(JSON.stringify(assignMentors(head)))// == "[3,3,3]")

head = new Node(5, new Node(6, new Node(9))) // 5 -> 6 -> 9
console.log(JSON.stringify(assignMentors(head)))// == "[6,9,9]")

head = new Node(2, new Node(2, new Node(2))) // 2 -> 2 -> 2
console.log(JSON.stringify(assignMentors(head)))// == "[2,2,2]")

// 2 -> 7 -> 4 -> 3 -> 5
head = new Node(2, new Node(7, new Node(4, new Node(3, new Node(5)))))
console.log(JSON.stringify(assignMentors(head)))// == "[7,7,7,5,5]")

// 8 -> 7 -> 5 -> 4 -> 3
head = new Node(8, new Node(7, new Node(5, new Node(4, new Node(3)))))
console.log(JSON.stringify(assignMentors(head)) == "[8,8,7,5,4]")

// 5 -> 6 -> 7 -> 8 -> 9
head = new Node(5, new Node(6, new Node(7, new Node(8, new Node(9)))))
console.log(JSON.stringify(assignMentors(head)) == "[6,7,8,9,9]")

head = new Node(9, new Node(6, new Node(5))) // 9 -> 6 -> 5
console.log(JSON.stringify(assignMentors(head)) == "[9,9,6]")













/*
'''
 Convert a sorted array into a balanced binary search tree.
 

EXAMPLE(S)
Input:  [1, 2, 3, 4, 5] =>
Output:
        3
   2        5
1        4

or
        3
    2       4
1              5

or
    3
1       5
  2   4

or
   3
1     4
   2     5
 
 Considerations
  - If input is empty, return null


  [1, 2, 3, 4, 5]
   L
   M     
   H


              3
           2
         1
  
FUNCTION SIGNATURE
function arrayToBST(arr) {
def arrayToBST(arr: list[int]) -> Node:
'''
*/

// class Node {
//   constructor(val, left=null, right=null){
//     this.val = val
//     this.left = left
//     this.right = right
//   }
// }

// function arrayToBST2(arr) {
//   if (!arr) {
//     return null;
//   }
  
//   const helper = (low, high) => {
//     // base case
//     if (low > high) {
//       return null;
//     }
//     // calculate mid
//     let mid = Math.floor((low + high) / 2);
//     // initialize node with mid val
//     let node = new Node(arr[mid]);
//     node.left = helper(low, mid - 1)
//     node.right = helper(mid + 1, high);

//     return node;
//   }

//   return helper(0, arr.length - 1);
// }

// function arrayToBST(arr) {
//   function helper(start, count) {
//     if (count === 0) {
//       return null;
//     }

//     const middle = start + Math.floor(count / 2);
//     const root = new Node(arr[middle])
//     root.left = helper(start, middle - start);
//     root.right = helper(middle + 1, count - (middle - start + 1));

//     return root;
//   } 

//   return helper(0, arr.length);
// }


// console.log(isCorrect(arrayToBST([])))
// console.log(isCorrect(arrayToBST([1])))
// console.log(isCorrect(arrayToBST([1,2])))
// console.log(isCorrect(arrayToBST([1,2,3,4,5])))
// console.log(isCorrect(arrayToBST([1,2,10,20,35,50,420,609])))
// console.log(isCorrect(arrayToBST([-100,-50,-25,-20,-10,-1,0,1,2,10,20])))

// /*******************************************/
// /** This code is intentionally obfuscated **/
// /*******************************************/
// function isCorrect(r){return b(r)&&v(r);}
// function gH(r){if(r == null)return 0;
// let lH=gH(r.left);if(lH==-1)return -1;
// let rH=gH(r.right);if(rH==-1)return -1;
// if(Math.abs(lH-rH)>1)return -1;return Math.max(lH,rH)+1;}
// function b(r){return gH(r)!=-1;}
// function v(r){return v(r,Number.
// MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER);}
// function v(r,m,M){if(r==null)return true;
// if(r.val>=M||r.val<=m)return false;
// return v(r.left,m,r.val)&&v(r.right,r.val,M);}



























You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).
 

EXAMPLE(S)
Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]

Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]
 

FUNCTION SIGNATURE
def swapNodes(self, head: ListNode, k: int) -> ListNode:
'''


// k will be smaller than the length of list
// assumptions indexing 1

// Explore test cases
// [1,2,3,4,5]; k=3 => [1,2,3,4,5]
// [1,2,3,4,5]; k=4 => [1,4,3,2,5]
// [] => []
// [1,2,3,4,5,6] k:9 => []

Wrong test case
// [1,2,3,4,5,6,7,8,9] k:2 => [1,8,3,5,5,4,7,2,9]

//Brainstrom different solutions
1,2,3,4,5 k=3
        f
    e
b

1,2,3,4,5,6,7,8 k=4 
              f
        e
      b

1,2,3,4,5,6,7,8 k=2
        f
    e
b

e - 1
f - k 

Space : O(1) constant
Time : O(N) linear

//pseudocode
-- check for edge cases-- 
we'll have fast slow beginning and their indexs pointer

let fast 
let fastIdx = 1
let end 
let endIdx = 1
let beginning
let begIdx = 1

1. move fast pointer until, fastIdx = k
2. while fast.next (fast has not reached end of the list), move fast & end pointer 
3. Once fast is at end of the list, move beginning pointer until begIdx = k 
4. swap node values at beginning & end 
5. return head of original list 

plan & implement
verify




class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}


function swapNodes(list, k) {

  if(!list){
    return null
  }

  let head = list

  let fast = head
  let fastIdx = 1
  let slow = head
  let begin = head

  while(fastIdx !== k){
    fast = fast.next
    begin = begin.next
    fastIdx++
  }

  while(fast.next){
    fast = fast.next
    slow = slow.next
  }

  [begin.value, slow.value] = [slow.value, begin.value]

  return list
}

const printList = (head) => {
  while(head != null){
          console.log(head.value)
          head = head.next;
      }
}



let list = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))

let list1 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6, new Node(7)))))))

let list2 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))

let n = swapNodes(list, 3)
let n1 = swapNodes(list1, 4)
let n2 = swapNodes()
// console.log(swapNodes(list, 3))
// printList(n)
// printList(n1)
// printList(n2)
















// base case being depth is one 
// insert at root and append the left subtree

//base case being depth === n-1

// add a row to tree and shift the nodes down respectively

var addOneRow = function(root, val, depth) {

    //base case
    if(depth === 1){
        let node = new TreeNode(val)
        node.left = root
        return node
    }

    insert(root, val, depth, n=1)

    return root

};

const insert = (root, val, depth, n=1) => {
        if(!root){
            return 
        }

        if(n === depth-1) {
            let left = root.left
            root.left = new TreeNode(val)
            root.left.left = left

            let right = root.right
            root.right = new TreeNode(val)
            root.right.right = right
        } else {
            insert(root.left, val, depth, n+1)
            insert(root.right, val, depth, n+1)
        }
    }




















//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

// check right view of a binary tree
function solution(t) {

    let output = []
    let map = new Map()
    
    function dfs(root, lvl){
        if(!root){
            return 
        }
        
        if(!map.has(lvl)){
            map.set(lvl, root.value)
            output.push(root.value)
        }
        
        dfs(root.right, lvl+1)
        dfs(root.left, lvl+1)
    }
    
    dfs(t, 0)
    return output
    
//     1 - 0
//    / \
//   2   3 - 1
//  /   
// 4
// [1 3 4]
}
















// O(N!) time, O(N) space; N = length of input
function generatePermutations(list) {
  let output = []

  if(list.length === 0){
    return 0
  }

  if(list.length === 1){ // 
    return [list[0]]
  }

  function backtrack(list, seq){

    if(seq.length === list.length){
      output.push(seq)
      return
    }

    for(let i=0; i<list.length; i++){
      if(!seq.includes(list[i])){
        seq.push(list[i])
        backtrack(list, [...seq])
        seq.pop()
      }
    }


// bk([1])
//   bk([1,2])
//     bk([1,2,3])
// bk([1,3])
//   bk([1,3,2])
// []
// bk([2])
  }


  backtrack(list, [])
  return output
}













// Checks if matrix is monotonically increasing

function solution(matrix) {
    
    // let columnIsMonotonic = true
    // let rowIsMonotonic = true

    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length-1; j++){
            console.log(" we're in array " + matrix[i] + " at value " + matrix[i][j])
            if(matrix[i][j] > matrix[i][j+1]){
                return false
            }
        }
        
        if((i+1 < matrix.length) && matrix[i][0] > matrix[i+1][0]){
            return false
        }
    }
    
    return true
}
















function plusOne(digits: number[]): number[] {

    // 999    000
    let i = digits.length-1
    while(i >= 0){
        let addOne = digits[i] + 1
        if(addOne === 10){
            digits[i] = 0
            
            if(i === 0){
                digits.unshift(1)
            }
        } else {
            digits[i] = addOne
            break;
        }
        i--
    }
    return digits
};





function bubbleRecursive(arr, i, j) {
  if(i == arr.length-1)
    return arr

  if(j == arr.length-i-1) {
    i++
    j=0
    
  }

  if (arr[j+1] < arr[j]) {
    const tmp=arr[j]
    arr[j]=arr[j+1]
    arr[j+1]=tmp
    }
  
  return bubbleRecursive(arr, i, j+1)

}


// const array = [3,2,1,5,5,7]
// bubbleRecursive(array, 0, 0)
// console.log(array)
console.log(bubbleRecursive([-1, 8, 2, 4, 3], 0, 0))









function reverseList(node){

  if(!node || !node.next){
    return node
  }

  let revHead = reverseList(node.next) // 1 2 3 4 5 

  // console.log("Node.next.next" + )
  node.next.next = node
  node.next = undefined

  return revHead

}

console.log(reverseList(list))










function reverseTwoLinkedListReturnSum(l1, l2) {
    
    let l1Arr = []
    let l2Arr = []
    
    let str1 = ""
    let str2 = ""
    
    while(l1){
        l1Arr.push(l1.value)
        str1 += l1.value
        l1 = l1.next

    }
    
    // console.log(str1)
    // console.log(Number.parseInt(str1))
    
    while(l2){
        l2Arr.push(l2.value)
        str2 += l2.value
        l2 = l2.next
    }

    let update1 = l1Arr.reverse().join('')
    let update2 = l2Arr.reverse().join('')
    
    let answer = parseInt(update1) + parseInt(update2)
    let returnLL = new ListNode()
    let node = returnLL
    
    
    let ans = Array.from(String(answer), Number).reverse()
    // let finalAns = ans.reverse
    
    console.log(ans)
    
    for(let i=0; i<ans.length; i++){
        node.next = new ListNode(ans[i])
        node = node.next
        // node = node.next
    }
    
    return returnLL.next

}











// function covertBase(num) {
    
    fucntion covertBase(){

    let val = num.toString(7)
    
    return parseInt(val)

}





function checkPerfectSquare(num) {

    let square = Math.sqrt(num)
    
    return Number.isInteger(square)

}









function findClosestValueInBst(tree, target) {
  // Write your code here.

  let closeVal = Infinity
  let output = 0

  let node = tree

  while(node){
    let diff = Math.abs(target - node.value)
    
    if(closeVal > diff){
      closeVal = diff
      output = node.value
    }
    
    if(node.value < target){
      node = node.right
    } else {
      node = node.left
    }
    
  }

  return output
  
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.findClosestValueInBst = findClosestValueInBst;











// Cows and bulls


var getHint = function(secret, guess) {
    
    let xNumOfBulls = 0
    let yNumOfCows = 0 
    let a = "A"
    let b = "B"

    let secretMap = new Map()
    let guessArr = []

    for(let i=0; i<secret.length; i++){
        if(secret[i] === guess[i]){
            xNumOfBulls++
        } else{
            secretMap[secret[i]] = (secretMap[secret[i]] || 0) + 1
            guessArr.push(guess[i])
        }
    }

    for(const key of guessArr){
        if(secretMap[key] && secretMap[key] > 0){
            secretMap[key] = secretMap[key] - 1
            yNumOfCows++
        }
    }

    return xNumOfBulls + a + yNumOfCows + b;
};










function removeFromList(head, target) {
  if (!head) {
    return null
  }
  if (head.value === target) {
    return head.next
  }
  head.next = solution(head.next, target)
  return head
  }



function sumByLevel(root) {

  let sums = []
  function helper(root, level){
      if(!root){
          return level
      }
      
      if(sums.length > level){
          sums[level] += root.value
      } else {
          sums[level] = root.value
      }
      
      helper(root.left, level + 1)
      helper(root.right, level + 1)
  }
  
  helper(root, 0)
  return Math.max(...sums)

}

// Expected Runtime
// Time: O(N) to iterate through the length N array
// Space: O(N) to store up to N elements

function removeDuplicateFellows(fellows){

  let removeDup = new Set(fellows) 
  let arr = Array.from(removeDup)
  return arr

}

console.log(removeDuplicateFellows(["oliver", "pixel", "oliver", "pinky"]))

console.table([
  JSON.stringify(removeDuplicateFellows(
  ["oliver", "pixel", "oliver", "pinky"])) 
  === JSON.stringify(["oliver", "pixel", "pinky"]),

  JSON.stringify(removeDuplicateFellows([])) === "[]",

  JSON.stringify(removeDuplicateFellows(["Oliver", "oliver"]))
  === JSON.stringify(["Oliver", "oliver"]),

  JSON.stringify(removeDuplicateFellows(["pinky"]))
  === JSON.stringify(["pinky"]),

  JSON.stringify(removeDuplicateFellows(["pinky", "pinky", "pinky"]))
  === JSON.stringify(["pinky"]),

  JSON.stringify(removeDuplicateFellows(["pinky", "paavo"]))
  === JSON.stringify(["pinky", "paavo"]),
])



/*
function fibRecurisve(k){

  if(k === 0){
    return 0
  } else if(k < 3){
    return 1
  }

  return fib(k-1) + fib(k-2)

}

function fib(k){

  if(k === 0){
    return 0
  } else if(k < 3){
    return 1
  }

  let prev = 0
  let curr = 1
  for(let i=curr; i<k; i++){
    [prev, curr] = [curr, prev + curr]
  }
  console.log(curr)
  return curr

}
// 0 1 2 3 4 5 6  7  8  9
// 0 1 1 2 3 5 8  13 21 34
console.log(fib(2) === 1)
console.log(fib(3) === 2)
console.log(fib(4) === 3)
console.log(fib(9) === 34)


/*

function parenBit(word){ 

  let sub = ""

  function helper(word, startRec){
    if(word.length < 1){
    return
    }

    if(word[0] === "("){
      sub += "("
      return helper(word.slice(1, word.length), true)
    } else if(word[0] === ")") {
      sub += ")"
      startRec = false
    }

    if(startRec){
      sub += word[0]
      return helper(word.slice(1, word.length), true)
    }

    helper(word.slice(1, word.length), false)

  }
  helper(word, false)

  return sub

}

console.log(parenBit("(asdas") === "")
console.log(parenBit("asdas(gga)asd"))
console.log(parenBit("(asas)"))
console.log(parenBit("()"))


console.table([
  parenBit("xyz(abc)123") === "(abc)",
  parenBit("x(hello)") === "(hello)",
  parenBit("(xy)1") === "(xy)",
  parenBit("not really (possible)") === "(possible)",
  parenBit("(abc)") === "(abc)",
  parenBit("(abc)xyz") === "(abc)",
  parenBit("(abc)x") === "(abc)",
  parenBit("(x)") === "(x)",
  parenBit("()") === "()",
  parenBit("res (ipsa) loquitor") === "(ipsa)",
  parenBit("hello(not really)there") === "(not really)",
  parenBit("ab(ab)ab") === "(ab)",
  parenBit("ab(ab)ab") === "(ab)",
])


 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    
    let node = head

    while(node){
        if(node.next && node.val === node.next.val){
            node.next = node.next.next
        } else {
            node = node.next
        }
    }

    return head
};



function strCopies(word, sub, times){

  let count = 0

  function findCopies(word, sub){
    if(word.length < sub.length){
      return
    }

    // console.log(word)
    if(word.slice(0,sub.length) === sub){
      count++
      findCopies(word.slice(sub.length, word.length), sub)
    } else {
      findCopies(word.slice(sub.length, word.length), sub)
    }
  }

  findCopies(word, sub)

  // console.log(count)
  return count === times
}

console.log(strCopies("catcowcat", "cat", 2) == true)
console.log(strCopies("catcowcat", "cow", 2) == false)
console.log(strCopies("catcowcat", "cow", 1) == true)
console.log(strCopies("iiijjj", "i", 3) == true)
console.log(strCopies("iiijjj", "i", 4) == false)
console.log(strCopies("iiijjj", "ii", 2) == false)
console.log(strCopies("iiijjj", "ii", 3) == false)
console.log(strCopies("iiijjj", "x", 3) == false)
console.log(strCopies("iiijjj", "x", 0) == true)
console.log(strCopies("iiiiij", "iii", 3) == false)
console.log(strCopies("iiiiij", "iii", 4) == false)
console.log(strCopies("ijiiiiij", "iiii", 2) == false)
console.log(strCopies("ijiiiiij", "iiii", 3) == false)
console.log(strCopies("dogcatdogcat", "dog", 2) == true)


class Node {
  constructor(val, next=null) {
    this.val = val
    this.next = next
  }
}



function firstIndexInLL(node, target){

  let index = 0;
  while(node){
    if(node.val === target){
      return index
    }
    index++
    // console.log(index)
    node = node.next
  }
  return -1

}


let list1 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))
let list2 = new Node(2)
let list3 = new Node(-1, new Node(-2, new Node(-3, new Node(-4, new Node(-5)))))
let list4 = new Node(1, new Node(2, new Node(3, new Node(2, new Node(1)))))

console.log(firstIndexInLL(null, 12) === -1)
console.log(firstIndexInLL(list1, 9) === -1)
console.log(firstIndexInLL(list1, 3) === 2)
console.log(firstIndexInLL(list2, 2) === 0)
console.log(firstIndexInLL(list2, 1) === -1)
console.log(firstIndexInLL(list3, -2) === 1)
console.log(firstIndexInLL(list4, 2) === 1)
console.log(firstIndexInLL(list4, 1) === 0)


function firstRepeatedElement(arr){

  if(arr.length < 1 || !arr){
    return null
  }

  const elementSet = new Set()

  for(let i=0; i<arr.length; i++){
    // console.log(arr[i])
    if(elementSet.has(arr[i])){
      // console.log(arr[i])
      return arr[i]
    }
    elementSet.add(arr[i])
  }


}


console.log(firstRepeatedElement([1, 2, 3, 2, 1, 1]) == 2)

console.log(firstRepeatedElement([1, 1, 3, 2, 1, 1]) == 1)

console.log(firstRepeatedElement([1, 2, 3, 4, 3, 4]) == 3)
console.log(firstRepeatedElement([]) == null)

*/




function firstRepeatedElement(arr){

  if(arr.length < 1 || !arr){
    return null
  }

  const elementSet = new Set()

  for(let i=0; i<arr.length; i++){
    // console.log(arr[i])
    if(elementSet.has(arr[i])){
      // console.log(arr[i])
      return arr[i]
    }
    elementSet.add(arr[i])
  }


}


console.log(firstRepeatedElement([1, 2, 3, 2, 1, 1]) == 2)

console.log(firstRepeatedElement([1, 1, 3, 2, 1, 1]) == 1)

console.log(firstRepeatedElement([1, 2, 3, 4, 3, 4]) == 3)
console.log(firstRepeatedElement([]) == null)



// function generatePasswords(validCharacters, minLength, maxLength) {
//   const passwords = [];
//   const letters = [];

//   function permute() {
//     if (letters.length > maxLength)
//       return; // base case

//     if (letters.length >= minLength && letters.length <= maxLength) {
//       passwords.push(letters.join(''));
//     }

//     for (let i = 0; i < validCharacters.length; i++) {
//       letters.push(validCharacters[i]); // append
//       permute();
//       letters.pop(); // undo after recursion
//     }
//   }

//   permute();

//   return passwords;
// }




// console.log(JSON.stringify(generatePasswords(["a","b","c","d"], 0, 0))
// === JSON.stringify([""]))
// console.log(JSON.stringify(generatePasswords(["a","b","c","d"], 0, 1))
// === JSON.stringify(["","a","b","c","d"]))
// console.log(JSON.stringify(generatePasswords(["a","b","c","d"], 1, 1))
// === JSON.stringify(["a","b","c","d"]))
// console.log(JSON.stringify(generatePasswords(["a","b"], 3, 3))
// === JSON.stringify(["aaa","aab","aba","abb","baa","bab","bba","bbb"]))
// console.log(JSON.stringify(generatePasswords(["a"], 2, 4))
// === JSON.stringify(["aa","aaa","aaaa"]))
// console.log(JSON.stringify(generatePasswords(["a"], 2, 4))
// === JSON.stringify(["aa","aaa","aaaa"]))
// console.log(JSON.stringify(generatePasswords(["a","b","c"], 2, 3))
// === JSON.stringify(["aa","aaa","aab","aac","ab","aba","abb","abc",
//   "ac","aca","acb","acc","ba","baa","bab","bac","bb","bba","bbb","bbc",
//   "bc","bca","bcb","bcc","ca","caa","cab","cac","cb","cba","cbb","cbc",
//   "cc","cca","ccb","ccc"]))
// console.log(JSON.stringify(generatePasswords(["a","b","c","d"], 2, 3))
// === JSON.stringify(["aa","aaa","aab","aac","aad","ab","aba","abb",
//   "abc","abd","ac","aca","acb","acc","acd","ad","ada","adb","adc",
//   "add","ba","baa","bab","bac","bad","bb","bba","bbb","bbc","bbd",
//   "bc","bca","bcb","bcc","bcd","bd","bda","bdb","bdc","bdd","ca",
//   "caa","cab","cac","cad","cb","cba","cbb","cbc","cbd","cc","cca",
//   "ccb","ccc","ccd","cd","cda","cdb","cdc","cdd","da","daa","dab",
//   "dac","dad","db","dba","dbb","dbc","dbd","dc","dca","dcb","dcc",
//   "dcd","dd","dda","ddb","ddc","ddd"]))

// console.log(generatePasswords(["a","b","c","d"], 3, 4).length === 320)
// console.log(generatePasswords(["a","b","c","d"], 3, 5).length === 1344)


 /* create a function that returns a string of current temperature values in celsius for location: Jagraon, Punjab, India */
// function getWeather() {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Jagraon,IN&appid=2de143494c0b295cca9337e1e96b00e0', true);
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4) {
//       var resp = JSON.parse(xhr.responseText);
//       var temp = resp.main.temp;
//       var tempC = Math.round(temp - 273.15);
//       var weather = resp.weather[0].main;
//       var weatherDiv = document.createElement('div');
//       weatherDiv.innerHTML = 'The weather in Jagraon, Punjab, India is ' + tempC + '&deg;C and ' + weather + '.';
//       document.body.appendChild(weatherDiv);
//     }
//   }
//   xhr.send();
// }

// console.log(getWeather())

/*

We're given a tree, and we want to find all of the nodes in the tree that have siblings (other nodes under their parent).

Return an array of nodes representing each sibling in any order. No only children can be in your result array.

Function Signature: 
function findSiblingNodes(root)

// */

// class TreeNode {
//   constructor(value, left = null, right = null) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//   }
// }


// // recursion
// function findSiblingNodes(root){
//   let siblings = []
//   let node = root
//   findSiblingsBfs(node, siblings)
//   // findSiblingsDfs(node, siblings)
//   return siblings
// }

// function findSiblingsDfs(root, siblings){
//   if(!root){
//     return []
//   }

//   if(root.left && root.right){
//     siblings.push(root.left.value)
//     siblings.push(root.right.value)
//   }
//   findSiblings(root.left, siblings)
//   findSiblings(root.right, siblings)
// }


// function findSiblingsBfs(root, siblings = []){
//   if(!root){
//     return []
//   }

//   let queue = [root]

//   // FiFO [12, 2 , 3]
//   while(queue.length > 0){
//     let node = queue.shift()

//     if(node.left && node.right){
//       siblings.push(node.left.value)
//       siblings.push(node.right.value)
//     }
//     if(node.left){
//       queue.push(node.left)
//     }
//     if(node.right){
//       queue.push(node.right)
//     }
//   }

//   return siblings
// }



// // test cases

// /*

// Example 1

//            1
//        2       3
//      _   4   _   _
    
// should return [2, 3]

// */

// const a = new TreeNode(1);
// const b = new TreeNode(2);
// const c = new TreeNode(3);
// const d = new TreeNode(4);
// a.left = b;
// a.right = c;
// b.right = d;

// /*

// Example 2


//            12
//        3       4
//     1    _   6   _
    
// should return [3, 4]

// */

// const e = new TreeNode(12);
// const f = new TreeNode(3);
// const g = new TreeNode(4);
// const h = new TreeNode(1);
// const i = new TreeNode(6);

// e.left = f;
// e.right = g;
// f.left = h;
// g.left = i;

// /*

// Example 3


//            12
//        3       4
//     1    _   6   _
//   9  7      _ _
    
// should return [3, 4, 9, 7]

// */

// const j = new TreeNode(12);
// const k = new TreeNode(3);
// const l = new TreeNode(4);
// const m = new TreeNode(1);
// const n = new TreeNode(6);
// const o = new TreeNode(9);
// const p = new TreeNode(7);

// j.left = k;
// j.right = l;
// k.left = m;
// m.left = o;
// m.right = p;
// l.left = n;

// console.log(findSiblingsBfs(null), "[]");
// console.log(findSiblingsBfs(a), "[2, 3]");
// console.log(findSiblingsBfs(e), "[3, 4]");
// console.log(findSiblingsBfs(j), "[3, 4, 9, 7]");




class ListNode {
  constructor(value = 0, next = null) {
      this.value = value
      this.next = next
  }
}

function findMax(node){

  if(!node){
    return 
  }
}

// // function findMax(node) {
// //   let maxVal = -Infinity
// //   console.log("yoyo")

// //   function findMaxVal(node){
// //     if(!node){
// //       return
// //     }

// //     if(node.value > maxVal){
// //       maxVal = node.value
// //     }
// //     return findMaxVal(node.next)
// //   }

// //   findMaxVal(node)

// //   return maxVal
// // }

// function findMax(node) {

//   if (!node.next) {

//     return node.value;

//   } else {

//     const biggestValueInRest = findMax(node.next);



//     return (node.value > biggestValueInRest ? node.value

//       : biggestValueInRest);

//   }

// }


// Test Cases

// var LL1 = new ListNode(1, new ListNode(4, new ListNode(5, new ListNode(1))))

// var LL2 = new ListNode(7, new ListNode(1, new ListNode(5, new ListNode(1))))

// var LL3 = new ListNode(-1, new ListNode(-3, new ListNode(-5, new ListNode(0, new ListNode(-11)))))

// console.log(findMax(LL1)) // 5

// console.log(findMax(LL2)) // 7

// console.log(findMax(LL3)) // 0

// console.log(findMax(new ListNode(1))) // 1




// function changePi(word){

//   function replacePi(word){f

//     if(word.length === 0){
//       return ""
//     }
    
//     if(word.slice(0,2) === 'pi'){
//       return "3.14" + replacePi(word.slice(2))
//     }

//     return word[0] + replacePi(word.slice(1)) 

//   }

//   return replacePi(word)

// }


// console.log(changePi("xpi") === "x3.14")
// console.log(changePi("xpipi") === "x3.143.14")
// console.log(changePi("") === "")
// console.log(changePi("x") === "x")
// console.log(changePi("pi") === "3.14")
// console.log(changePi("xpix") === "x3.14x")

// class ListNode {

//   constructor(value = 0, next = null) {

//       this.value = value

//       this.next = next

//   }

// }



// function search(head, target) { 

//   while(head){
//     if(head.value === target){
//       return true
//       break
//     }
//     head = head.next
//   }

//   return false

// }



// // Test Cases

// let LL1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(10)))))))

// console.log(search(null, 1)) // false

// console.log(search(LL1, 2)) // true

// console.log(search(LL1, 4)) // false

// console.log(search(LL1, -1)) // false

// console.log(search(LL1, 10)) // true

// console.log(search(LL1, 11)) // false




// let letterToDigit = {
//   'A':'2', 'B':'2', 'C':'2',
//   'D':'3', 'E':'3', 'F':'3',
//   'G':'4', 'H':'4', 'I':'4',
//   'J':'5', 'K':'5', 'L':'5',
//   'M':'6', 'N':'6', 'O':'6',
//   'P':'7', 'Q':'7', 'R':'7', 'S':'7',
//   'T':'8', 'U':'8', 'V':'8',
//   'W':'9', 'X':'9', 'Y':'9', 'Z':'9',
//   }

// let digitToLetters = {
//   '2':['A','B','C'],
//   '3':['D','E','F'],
//   '4':['G','H','I'],
//   '5':['J','K','L'],
//   '6':['M','N','O'],
//   '7':['P','Q','R','S'],
//   '8':['T','U','V'],
//   '9':['W','X','Y','Z']
// }

// function decodePhoneNumber(phoneNum){

//   let ans = "";
//   for(let i=0; i<phoneNum.length; i++){
//     if(letterToDigit[phoneNum[i]]){
//       ans += letterToDigit[phoneNum[i]]
//     } else{
//       ans += phoneNum[i]
//     }
//   }

//   return ans
// }

// console.log(decodePhoneNumber('1-800-U-B-SMART'))
// console.log(decodePhoneNumber("1-800-U-B-SMART") == "1-800-8-2-76278")
// console.log(decodePhoneNumber("1.800.I.C.BUTTS") == "1.800.4.2.28887")
// console.log(decodePhoneNumber("1-888-GET-RICH") == "1-888-438-7424")
// console.log(decodePhoneNumber("555-U-HUNGRY!") == "555-8-486479!")



// function array10x(arr, index){

//   if(!arr || index < 0 || arr.length < 2){
//     return false
//   }

//   // 2, 20 , 1

//   function is10x(arr, currIndex){

//     if(currIndex >= arr.length-1){
//       return false
//     }

//    return arr[currIndex++] === 10*arr[currIndex] || is10x(arr, currIndex++)
//   } 

//   return is10x(arr, index)
  

// }

// console.log(array10x([1, 2, 20], 0) == true)
// console.log(array10x([3, 30], 0) == true)
// console.log(array10x([3], 0) == false)
// console.log(array10x([], 0) == false)
// console.log(array10x([3, 3, 30, 4], 0) == true)
// console.log(array10x([2, 19, 4], 0) == false)




// /**
//  * @param {string} s
//  * @return {string}
//  */
//  var reverseVowels = function(s) {
    
//   /*
//   Method 1: time O(n), space O(n). Technically O(3n): 1 for splitting, 1 for pointer iteration and 1 for joining as string
//       split into array
//       two pointers, one that starts from beginning and another at end
//       continue until each pointer has found a vowel, then swap elements in array
//       stop when startPointer >= stopPointer
//       convert back to string
      
//   Can we do it in faster O(n)?
//       Can't help but require space O(n) in JS because strings are immutable
//       Not sure if two pointer method is possible without splitting into arrays because you'd have to be able to insert in the middle of a string since one pointer is at the beginning of the string and the other is at the end
  
//   */
  
//   if (s.length <= 1) return s;
  
//   let arr = s.split('');
//   console.log(arr);
//   let start = 0;
//   let end = arr.length-1;
  
//   while (start < end) {
//       while (!isVowel(arr[start]) && start < arr.length) {
//           // console.log(isVowel(arr[start]));
//           start++; 
//           // console.log(start);
//       } // start = 2

//       while (!isVowel(arr[end]) && end >= 0) {
//           end--;
//       } // end = -1
      
//       if (start < end) {
//           [arr[start],arr[end]] = [arr[end],arr[start]]   
//       }
//       start++;
//       end--;
//   }
//   console.log(arr.join(''))
  
//   return arr.join('');
  
// };
  
// function isVowel(char) {
//   if (char === 'a' 
//       || char === 'A'
//       || char === 'e'
//       || char === 'E'
//       || char === 'i'
//       || char === 'I'
//       || char === 'o'
//       || char === 'O'
//       || char === 'u'
//       || char === 'U') {
//       return true;
//   } else {
//       return false;
//   }
// }

// // console.log(reverseVowels('hello'));





// /**
//  * @param {string} s
//  * @return {string}
//  */
//  var reverseVowels = function(s) {
    
//   let strArr = s.split('')
//   let vowel = []

//   for(let i=0; i<strArr.length; i++){
//       if(isVowel(strArr[i])){
//           vowel.push(strArr[i])
//       }
//   }

//   console.log(vowel)



// };

// function isVowel(letter){
//   let vowelMap = [{'a' : 1},{'e' : 1},{'i' : 1},{'o' : 1},{'u' : 1},{'A' : 1},{'E' : 1},{'I' : 1},{'O' : 1},{'U' : 1}]

//   return vowelMap[letter]
// }







// class TreeNode {
//   constructor(val, left = null, right = null) {
//     this.val = val
//     this.left = left
//     this.right = right
//   }
// }




// function bunnyEars(num){

//   if(num === 0){
//     return 0
//   }

//   if(num > 0){
//     return 2 + bunnyEars(num-=1)
//   }

// }

// console.log(bunnyEars(5))
// console.log(bunnyEars(3))
// console.log(bunnyEars(1))
// console.log(bunnyEars(0))
// console.log(bunnyEars(8))

// }

// function treeIsImmediatelyDistinct(root){

//   const helper = (root, parent) =>{
//     if(!root){
//       return true
//     }

//     if(parent === root.val){
//       return false
//     }

//     return helper(root.left, root.val) && helper(root.right, root.val)

//   }

//   return helper(root)
// }

// console.log(treeIsImmediatelyDistinct(new TreeNode(1, new TreeNode(2), new TreeNode(2))))

// console.log(treeIsImmediatelyDistinct(null) === true)

// //    1
// //  1   2
// // 3 4    6
// let root = new TreeNode(1,
//   new TreeNode(1,
//      new TreeNode(3),
//      new TreeNode(4)
//   ),
//   new TreeNode(2,
//       null,
//       new TreeNode(6)
//   )
// )
// console.log(treeIsImmediatelyDistinct(root) === false)

// //    1
// //  2   2
// // 5 9
// root = new TreeNode(1,
//   new TreeNode(2,
//      new TreeNode(5),
//      new TreeNode(9)
//   ),
//   new TreeNode(2)
// )
// console.log(treeIsImmediatelyDistinct(root) === true)

// //  2
// // 5 9
// root = new TreeNode(2,
//   new TreeNode(5),
//   new TreeNode(9))
// console.log(treeIsImmediatelyDistinct(root) === true)

// // 2
// root = new TreeNode(2)
// console.log(treeIsImmediatelyDistinct(root) === true)

// //  1
// // 5 1
// root = new TreeNode(1,
//   new TreeNode(5),
//   new TreeNode(1))
// console.log(treeIsImmediatelyDistinct(root) === false)

// //  1
// // 2 2
// root = new TreeNode(1,
//   new TreeNode(2),
//   new TreeNode(2))
// console.log(treeIsImmediatelyDistinct(root) === true)

// //    1
// //  2
// // 1
// root = new TreeNode(1,
//   new TreeNode(2,
//      new TreeNode(1)
//   )
// )
// console.log(treeIsImmediatelyDistinct(root) === true)

// //    1
// //  1
// // 1 1
// root = new TreeNode(1,
//   new TreeNode(1,
//      new TreeNode(1),
//      new TreeNode(1)
//   )
// )
// console.log(treeIsImmediatelyDistinct(root) === false)

// //    6
// //  8
// // 4 8
// root = new TreeNode(6,
//   new TreeNode(8,
//      new TreeNode(4),
//      new TreeNode(8)
//   )
// )
// console.log(treeIsImmediatelyDistinct(root) === false)

// //    6
// //   8
// //  4
// // 8
// root = new TreeNode(6,
//   new TreeNode(8,
//      new TreeNode(4,
//       new TreeNode(8)
//      )
//   )
// )
// console.log(treeIsImmediatelyDistinct(root) === true)

// //    6
// //   8
// //  4
// // 6
// root = new TreeNode(6,
//   new TreeNode(8,
//      new TreeNode(4,
//       new TreeNode(6)
//      )
//   )
// )
// console.log(treeIsImmediatelyDistinct(root) === true)


// goldilockFlapjacks([2, -1, 3, -3, 2, -1]) => [true, 4]


// function goldilockFlapjacks(pancakes) {
//   let isValid = true;
//   let maxHeight = 0;
//   let currHeight = 0;

//   for (let i = 0; i < pancakes.length; i++) {
//     currHeight = currHeight + pancakes[i];
//     if (currHeight <= 0) {
//       isValid = false;
//     }
//     maxHeight = Math.max(maxHeight, currHeight);
//   }
//   if (maxHeight > 4) {
//     isValid = false;
//   }
//   return [isValid, maxHeight];
// }


// console.table([
//   JSON.stringify(goldilockFlapjacks([2])) === JSON.stringify([true, 2]),
//   JSON.stringify(goldilockFlapjacks([-2])) === JSON.stringify([false, 0]),
//   JSON.stringify(goldilockFlapjacks([4])) === JSON.stringify([true, 4]),
//   JSON.stringify(goldilockFlapjacks([5])) === JSON.stringify([false, 5]),
//   JSON.stringify(goldilockFlapjacks([4, -2, 1, -2])) === JSON.stringify([true, 4]),
//   JSON.stringify(goldilockFlapjacks([2, -1, 1, -1, 1])) === JSON.stringify([true, 2]),
//   JSON.stringify(goldilockFlapjacks([4, -2, 1, -2, 4])) === JSON.stringify([false, 5]),
//   JSON.stringify(goldilockFlapjacks([4, -2, 1, -2, -4])) === JSON.stringify([false, 4])
// ])


// function find_left_peaks(arr){

//   if(!arr){
//     return []
//   }

//   let stack = []

//   for(let val of arr){
//      // 1 2 
//     while(stack[stack.length-1] < val){
//       // console.log("stack is ") 
//       // console.log(stack)
//       let pop = stack.pop()
//       // console.log("pop value : " + pop)
//     }
//     stack.push(val)
//   }
//   return stack
// }


// console.log(find_left_peaks([1, 2, 5, 3, 1, 2]))
// console.log(find_left_peaks())
// console.log(find_left_peaks([5, 3, 1, 2]))


// console.table([
//   JSON.stringify(find_left_peaks([]))
//   === JSON.stringify([]),
//   JSON.stringify(find_left_peaks([1, 2, 5, 3, 1, 2]))
//   === JSON.stringify([5, 3, 2]),
//   JSON.stringify(find_left_peaks([3, 2, 1]))
//   === JSON.stringify([3, 2, 1]),
//   JSON.stringify(find_left_peaks([1, 2, 3]))
//   === JSON.stringify([3]),
//   JSON.stringify(find_left_peaks([10, 4, 6, 3, 5]))
//   === JSON.stringify([10, 6, 5]),
//   JSON.stringify(find_left_peaks([1,2,3,5,5,5,4,5,3,2,1]))
//   === JSON.stringify([5, 5, 5, 5, 3, 2, 1]),
//   JSON.stringify(find_left_peaks([1,2,3,5,5,5,4,6,5,3,2,1]))
//   === JSON.stringify([6, 5, 3, 2, 1]),
//   JSON.stringify(find_left_peaks([5,5,5,5,5]))
//   === JSON.stringify([5, 5, 5, 5, 5])
// ])







// // let finalVal = 0

// const sumNodesWithEvenParent = root => {

//   let finalVal = 0

//   const helper = (node, parentVal) => {

//     if(!node){
//       return
//     }
  
//     helper(node.left, node.val)
//     helper(node.right, node.val)
  
//     if(parentVal % 2 === 0){
//       finalVal += node.val
//     }
  
//   }

//   helper(root)
//   console.log(finalVal)
//   return finalVal

// }


// console.log(sumNodesWithEvenParent(null) === 0)

// //     6
// //  7     8
// // 2 7   1 3
// let root = new TreeNode(6,
//   new TreeNode(7,
//      new TreeNode(2),
//      new TreeNode(7)
//   ),
//   new TreeNode(8,
//       new TreeNode(1),
//       new TreeNode(3)
//   )
// )
// console.log(sumNodesWithEvenParent(root) === 19)

// //  2
// // 5 9
// root = new TreeNode(2,
//   new TreeNode(5),
//   new TreeNode(9))
// console.log(sumNodesWithEvenParent(root) === 14)

// // 2
// root = new TreeNode(2)
// console.log(sumNodesWithEvenParent(root) === 0)

// // 1
// root = new TreeNode(1)
// console.log(sumNodesWithEvenParent(root) === 0)

// //  1
// // 5 9
// root = new TreeNode(1,
//   new TreeNode(5),
//   new TreeNode(9))
// console.log(sumNodesWithEvenParent(root) === 0)

// //  1
// // 2 2
// root = new TreeNode(1,
//   new TreeNode(2),
//   new TreeNode(2))
// console.log(sumNodesWithEvenParent(root) === 0)

// //    1
// //  2   2
// // 9   4 1
// root = new TreeNode(1,
//   new TreeNode(2,
//      new TreeNode(9)
//   ),
//   new TreeNode(2,
//       new TreeNode(4),
//       new TreeNode(1)
//   )
// )
// console.log(sumNodesWithEvenParent(root) === 14)

// //    1
// //  1
// // 1 1
// root = new TreeNode(1,
//   new TreeNode(1,
//      new TreeNode(1),
//      new TreeNode(1)
//   )
// )
// console.log(sumNodesWithEvenParent(root) === 0)

// //    6
// //  8
// // 4 2
// root = new TreeNode(6,
//   new TreeNode(8,
//      new TreeNode(4),
//      new TreeNode(2)
//   )
// )
// console.log(sumNodesWithEvenParent(root) === 14)


// const immediateParentSum = root => {
//   helper(root)
//   return root
// }

// const helper = (node, parentVal) => {

//   if(!node){
//     return
//   }

//   helper(node.left, node.val)
//   helper(node.right, node.val)

//   if(parentVal){
//     node.val += parentVal
//     console.log(node.val)
//   }

// }

// console.table([immediateParentSum(null) === null])

//    1
//  1   2
// 3 4    6
// let root = new TreeNode(1,
//   new TreeNode(1,
//      new TreeNode(3),
//      new TreeNode(4)
//   ),
//   new TreeNode(2,
//       null,
//       new TreeNode(6)
//   )
// )
// immediateParentSum(root)
// console.table([
//   root.val === 1,
//   root.left.val === 2,
//   root.left.left.val === 4,
//   root.left.right.val === 5,
//   root.right.val === 3,
//   root.right.right.val === 8
// ])

// //     9
// //  3     11
// // 1 5  10
// root = new TreeNode(9, 
//   new TreeNode(3, 
//     new TreeNode(1),
//     new TreeNode(5)
//   ),
//   new TreeNode(11,
//     new TreeNode(10)
//   )
// )
// immediateParentSum(root)
// console.table([
//   root.val === 9,
//   root.left.val === 12,
//   root.left.left.val === 4,
//   root.left.right.val === 8,
//   root.right.val === 20,
//   root.right.left.val === 21
// ])

// //  1
// // 2 4
// root = new TreeNode(1,
//   new TreeNode(2),
//   new TreeNode(4)
// )
// immediateParentSum(root)
// console.table([
//   root.val === 1,
//   root.left.val === 3,
//   root.right.val === 5
// ])

// //    1
// //  3   4
// // 3
// root = new TreeNode(1,
//   new TreeNode(3,
//     new TreeNode(3)
//   ),
//   new TreeNode(4)
// )
// immediateParentSum(root)
// console.table([
//   root.val === 1,
//   root.left.val === 4,
//   root.right.val === 5,
//   root.left.left.val === 6,
// ])

// root = new TreeNode(9)
// immediateParentSum(root)
// console.table([
//   root.val === 9
// ])

/*

Problem

Given a string of random words, figure out if each word cancels itself out.
For example, what no no what cancels itself out (and is balanced). For every word in this arrangement, there is a word that cancels it out, in order.
Function Signature: 
function theLastWord(str)
Target runtime and space complexity:
O(n), where n = length of string
Examples:
For example, what no no what cancels itself out (and is balanced). For every word in this arrangement, there is a word that cancels it out, in order.

Test Cases:
'what what what what what what' => true
'what' => false
'what what what what what' => false
'what what no no yes yes' => true
'what no no what' => true
'what no' => false
'what no what no' => false not in order


if we maintain a stack and push words and pop

' ' => false

*/


// function theLastWord(str){
  
// if(!str){
//   return false
// }

// let strArr = str.split(" ")
// let stack = []

// for(let val of strArr){
//   if(stack.length > 0 && val === stack[stack.length - 1]){
//     stack.pop()
//   } else {
//     stack.push(val)
//   }
// }

// return stack.length === 0
// }



// console.log(theLastWord('what what no no') === true)

// console.log(theLastWord('what what what what no no no no') === true)

// console.log(theLastWord('what no') === false)

// console.log(theLastWord('what what what') === false)


// console.log(theLastWord('') === false)





// class Node{
//   constructor(val, left=null, right=null){
//     this.val = val
//     this.left = left
//     this.right = right
//   }
// }
// function hasSingleChildren(root) {
//   const parents = []

//   function dfs(node) {
//     if (!node) return

//     if (node.left && !node.right) {
//       parents.push(node.val)
//     } else if (!node.left && node.right) {
//       parents.push(node.val)
//     }
    
//     dfs(node.left)
//     dfs(node.right)
//   }

//   dfs(root)
//   console.log(parents)
//   return parents
// }
// //     12
// //  3     4
// // 1 _   6 _
// let root = new Node(12,
//   new Node(3,
//     new Node(1)),
//   new Node(4,
//     new Node(6)))
// console.log(JSON.stringify(new Set(hasSingleChildren(root)))
// === JSON.stringify(new Set([3,4])))

// //     12
// //   3     4
// //  1 _   6  _
// // 9 _   _ _
// root.left.left.left = new Node(9)
// console.log(JSON.stringify(new Set(hasSingleChildren(root)))
// === JSON.stringify(new Set([3,1,4])))

// function binarySearch(arr, target){

//   let i = 0
//   let j = arr.length - 1
//   let middle = 0

//   let finalAns = ""
//   let targetIndex = -1

//   while(i<j && targetIndex === -1){
//     console.log(middle)
//     middle = Math.floor((i + j) / 2)
//     if(arr[middle] === target){
//        finalAns += " target val " +  arr[middle] + " at index "+ middle
//        targetIndex = middle
//     } else if(arr[middle] < target){
//         i = middle+1
//     } else{
//         j = middle-1
//       }
//   }
//   return finalAns
// }

  
//   function binarySearcha(array, target) {

//     let first = 0;

//     let last = array.length - 1;

//     let targetIndex = -1;

//     let middle;

 

//     while (targetIndex === -1 && first <= last) {

//         middle = Math.floor((first + last) / 2);

//         if (array[middle] === target) {

//             targetIndex = middle;

//         } else if (array[middle] > target) {

//             last = middle - 1;

//         } else {

//             first = middle + 1;

//         }

//     }

//     return array[targetIndex];

// }


// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11], 9))

// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11], 2))

// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11], 4))








//       class Node {
//         constructor(val, left=null, right=null) {
//           this.val = val
//           this.left = left
//           this.right = right
//         }
//       }
      
//       function isDirectReport(person, manager, employee) {
//         if (!person) {
//           return false
//         }
      
//         if (person.val === manager) {
//           if (person.left?.val === employee || person.right?.val === employee) {
//             return true
//           }
//           return false // optimization, no further traversals can return true
//         }
      
//         return isDirectReport(person.left, manager, employee)
//           || isDirectReport(person.right, manager, employee)
//       }



// //     1
// //   2   3
// //      4  5
// //     6  
// let ceo = new Node(1,
//   new Node(2),
//     new Node(3,
//       new Node(4,
//         new Node(6)),
//       new Node(5)
//   ))

// // 5
// let solo = new Node(5)

// //   5
// // 10
// let partner = new Node(5,
//         new Node(10)
//       )

// console.table([
// isDirectReport(null, 1, 2) === false,
// isDirectReport(solo, 1, 2) === false,
// isDirectReport(partner, 5, 5) === false,
// isDirectReport(partner, 5, 10) === true,
// isDirectReport(ceo, 1, 2) === true,
// isDirectReport(ceo, 1, 4) === false,
// isDirectReport(ceo, 2, 1) === false,
// isDirectReport(ceo, 2, 3) === false,
// isDirectReport(ceo, 3, 1) === false,
// isDirectReport(ceo, 3, 5) === true,
// isDirectReport(ceo, 4, 5) === false,
// isDirectReport(ceo, 4, 6) === true,
// isDirectReport(ceo, 1, 1) === false,
// isDirectReport(ceo, 4, 4) === false
// ])



// class ListNode {

//     constructor(value = 0, next = null) {

//         this.value = value

//         this.next = next

//     }

// }



// function arrayify(head) {

//     let ptr = head

//     var array = []

//     while (ptr != null) {

//         array.push(ptr.value)

//         ptr = ptr.next

//     }

//     return array

// }



// function remove(node, target) { 

//     // Write your code here.
//     let newLl = new ListNode() //sentinel
//     let head = newLl
    
//     if(!node){
//       return null
//     }
//     while(node){
//       if(node.value !== target){
//         newLl.next = new ListNode(node.value)
//         newLl = newLl.next
//       }
//       node = node.next
//     }
//     return head.next

// }



// Test Cases


// 2  3  3  3 5target = 3
// 2 5

// 3  3  3  t = 3
// []

// returning head

// if we find the target delete that node and point the previous pointer to deleted nodes next pointer

// LL 
// array + LL
  // 2 3 4 3 3 5

// we just create new LL and keep adding to 


// var LL1 = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(1, new ListNode(3, new ListNode(2, new ListNode(2)))))))

// var LL2 = remove(null, 1);

// console.log(arrayify(LL2)) // []

// LL1 = remove(LL1, 1);

// console.log(arrayify(LL1)) // [4, 2, 3, 2, 2] 

// LL1 = remove(LL1, 2);

// console.log(arrayify(LL1)) // [4, 3]

// LL1 = remove(LL1, 3);

// console.log(arrayify(LL1)) // [4]

// LL1 = remove(LL1, 4);

// console.log(arrayify(LL1)) // []



// NOTE: If you're removing the head node, you need to reassign LL1 or it will still point to the old head! 







// function pruneIterative(root, target){

//   if(!root){
//     return 
//   }

//   let stack = [root]

//   while(stack.length > 0){
//     let node = stack.pop()

//     if(node.val === target){
//       if(node.right){
//         node.right = null
//       }
//       if(node.left){
//         node.left = null
//       }
//       node.val = null
//       node = null
//       break;
//     }

//     if(node.right){
//       stack.push(node.right)
//     }
//     if(node.left){
//       stack.push(node.left)
//     }
//   }

// }

// let tree = new Node(1,
//   new Node(2,
//     new Node(4),
//     new Node(5),
//   ),
//   new Node(3,
//     new Node(6),
//     new Node(7),
//   ))

// console.log(prune(tree, 3))
// console.log(tree.right === null)


// console.log(prune(node, 5))











/*
var preorderTraversal = function(root) {
    
    if(!root){
        return []
    }
    
    let stack = [root]
    let output = []
    
    while(stack.length > 0){
        let node = stack.pop()
        if(node){
         output.push(node.val)   
        }
        console.log(output)
        if(node.right != null){
            stack.push(node.right)
        }
        
         if(node.left != null){
            stack.push(node.left)
        }
    }
    
    return output
    
    
};

*/








// const bunnyEarsTwist = num => {

//   if(num === 0){
//     return 0
//   }

//   if(num % 2 === 0){
//     return 3 + bunnyEarsTwist(num-1)
//   } else {
//     return 2 + bunnyEarsTwist(num-1)
//   }


// }

// console.log(bunnyEarsTwist(2))
// console.log(bunnyEarsTwist(0))
// console.log(bunnyEarsTwist(1))
// console.log(bunnyEarsTwist(5))


// class Node{
//   constructor(val, left = null, right = null){
//     this.val = val
//     this.left = left
//     this.right = right
//   }
// }

// const flip = root => {
  
//   if(root){
//     let temp = root.left
//     root.left = root.right
//     root.right = temp
//   } else {
//     return
//   }

//   flip(root.left)
//   flip(root.right)
// }




// let root = new Node(5)
// flip(root)
// console.log(root.val === 5)

// //    5
// // 10   5
// root = new Node(5,
//   new Node(10),
//   new Node(5))
// flip(root)
// console.log(
//   root.val === 5,
//   root.left.val === 5,
//   root.right.val === 10,
//   root.left.left === null, // verify leaf node
//   root.left.right === null, // verify leaf node
//   root.right.left === null, // verify leaf node
//   root.right.right === null // verify leaf node
// )

// //    6
// //  6   6
// // 6 6
// root = new Node(6,
//   new Node(6,
//     new Node(6),
//     new Node(6)),
//   new Node(6))
// flip(root)
// console.log(
//   root.val === 6,
//   root.left.val === 6,
//   root.right.val === 6,
//   root.left.left === null, // verify leaf node
//   root.left.right === null, // verify leaf node
//   root.right.left.val === 6,
//   root.right.right.val === 6,
//   root.right.left.left === null, // verify leaf node
//   root.right.left.right === null, // verify leaf node
//   root.right.right.left === null, // verify leaf node
//   root.right.right.right === null // verify leaf node
// )

// //     5
// //  10   1
// // 1  7
// root = new Node(5,
//   new Node(10,
//     new Node(1),
//     new Node(7)),
//   new Node(1))
// flip(root)
// console.log(
//   root.val === 5,
//   root.left.val === 1,
//   root.left.left === null, // verify leaf node
//   root.left.right === null, // verify leaf node
//   root.right.val === 10,
//   root.right.left.val === 7,
//   root.right.right.val === 1,
//   root.right.left.left === null, // verify leaf node
//   root.right.left.right === null, // verify leaf node
//   root.right.right.left === null, // verify leaf node
//   root.right.right.right === null // verify leaf node
// )

// //      5
// //   2    1
// // 3   7   10
// //          10
// root = new Node(5,
//   new Node(2,
//     new Node(3),
//     new Node(7)),
//   new Node(1,
//     null,
//     new Node(10,
//       null,
//       new Node(10))))
// flip(root)
// console.log(
//   root.val === 5,
//   root.left.val === 1,
//   root.left.left.val === 10,
//   root.left.right === null, // verify leaf node
//   root.left.left.left.val === 10,
//   root.left.left.right === null, // verify leaf node
//   root.left.left.left.left === null, // verify leaf node
//   root.left.left.left.right === null, // verify leaf node
//   root.right.val === 2,
//   root.right.left.val === 7,
//   root.right.right.val === 3,
//   root.right.left.left === null, // verify leaf node
//   root.right.left.right === null, // verify leaf node
//   root.right.right.left === null, // verify leaf node
//   root.right.right.right === null // verify leaf node
// )

// //       1
// //      2
// //     3
// //    4
// //   5
// //  6
// // 3
// root = new Node(1,
//   new Node(2,
//     new Node(3,
//       new Node(4,
//         new Node(5,
//           new Node(6,
//             new Node(3)))))))
// flip(root)
// console.log(
//   root.val === 1,
//   root.left === null, // verify leaf node
//   root.right.val == 2,
//   root.right.left == null, // verify leaf node
//   root.right.right.val == 3,
//   root.right.right.left == null, // verify leaf node
//   root.right.right.right.val == 4,
//   root.right.right.right.left == null, // verify leaf node
//   root.right.right.right.right.val == 5,
//   root.right.right.right.right.left == null, // verify leaf node
//   root.right.right.right.right.right.val == 6,
//   root.right.right.right.right.right.left == null, // verify leaf node
//   root.right.right.right.right.right.right.val == 3,
//   root.right.right.right.right.right.right.left == null, // verify leaf node
//   root.right.right.right.right.right.right.right == null // verify leaf node
// )


// function commaSeparate(arr){

//   if(arr.length === 0){
//     return ""
//   }

//   if(arr.length === 1){
//     return arr[0]
//   }

//   if(arr.length === 2){
//     return arr[0] + " and "+ arr[1]
//   }

//   let names = ""
//   for(let i=0; i<arr.length-2; i++){
//     names += arr[i] +", "
//   }

//   names += arr[arr.length-2] + " and " + arr[arr.length-1]
//   return names
// }

// console.log(commaSeparate([]) == "")

// console.log(commaSeparate(["Sophie"]) == "Sophie")

// console.log(commaSeparate(["Daniel", "Craig"]) == "Daniel and Craig")

// console.log(commaSeparate(["Oliver", "Pixel", "Fido"])
// == "Oliver, Pixel and Fido")

// console.log(commaSeparate(["Jono", "Paavo", "Tony", "me"])
// == "Jono, Paavo, Tony and me")

// console.log(commaSeparate(["John", "John", "John"])
// == "John, John and John")

// console.log(commaSeparate(["Sean", "John", "Sean"])
// == "Sean, John and Sean")








// function bubbleSort(array) {

//   // Write your code here.
//   for(let i=0; i<array.length; i++){
//     for(let j=i; j<array.length; j++){
//       const [curr, next] = [array[j], array[j+1]]

//       if(curr > next){
//         [array[j], array[j+1]] = [next, curr]
//       }
//     }
//   }

//   return array
// }
  



// // Test Cases

// console.log(bubbleSort([])) // []

// console.log(bubbleSort([1])) // [1]

// console.log(bubbleSort([3, 1, 2, 4])) // [1, 2, 3, 4]

// console.log(bubbleSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]











// let map = new Map()
// let set = new Set()

// map.set("a", 3).set("b", 4).set("c", 5)

// console.log(map.has('a'))

// // console.log(map)

// for(let val of map.keys()){
//   if(map.has(val)){
//     console.log(val)
//   }

//   // console.log(val)
// }

// let x = [1,2,3]
// let p = [5,6,7]
// let arr = p.concat(x)
// arr.sort(function(a,b){ return (a-b) })
// console.log(arr)



// function isPalindrome(arr, i, j){

//   j = arr.length-1
//   if(arr.length === 1){
//     console.log("arr length is 1 : " +  arr)
//     return true
//   }

//   if(arr.length === 2){
//     console.log("arr length is 2 : " +  arr[0])
//     return arr[0] === arr[1]
//   }

//   console.log(arr[0])
//   console.log(arr.slice(-1))
//   // if the first and last index in the array is equal 
//   if(i === j){
//     console.log("yes  : " +  arr[0])
//     return isPalindrome(arr.slice(1,-1))
//   }

//   return false;

// }

// console.log(isPalindrome([1,2,3,2,1], 0))
// console.log(isPalindrome([]))
// console.log(isPalindrome([1]) )
// console.log(isPalindrome([1,2]))
// console.log(isPalindrome([1,2,4]))
// console.log(isPalindrome([1,1,1]))



// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]



/*

        3

      4   5
    
    6   7

    [3, [4,5], [6,7]]

    print every level


    [3, 4, 5, 6, 7]

    use a queue and pop the first emlement
 

    3 
    4
    5
    6
    7

    print the level

    3

    4 5

    6 7
*/


// class TreeNode{

//   constructor(val, left=null, right=null){
//     this.val = val
//     this.left = left
//     this.right = right
//   }
// }

// // 3 4 5 6 7 

// // breadth first search

// function printTree(root){
  
//   if(!root){
//     return []
//   }

//   let queue = [root] // 3 

//   console.log(queue)

//   while(queue.length > 0){

//     let printLevel = []
//     let queueLength = queue.length

//     for(let i=0; i<queueLength; i++){

//       let node = queue.shift() 
//       printLevel.push(node.val)

//       if(node.left){
//         queue.push(node.left)
//       }
//       if(node.right){
//         queue.push(node.right)
//       }

//     }

//     console.log(printLevel)
//   }

// }

// console.log(printTree(new TreeNode(3, new TreeNode(4, new TreeNode(6), new TreeNode(7)), new TreeNode(5))))

// console.log(printTree(new TreeNode(2)))

// console.log(printTree(new TreeNode()))








// function reverse(array, k){

//   let newArr = []
//   for(let i=0; i<array.length; i++){
    
//   }
// }



// Test case : Input: s = "5F3Z-2e-9-w", k = 4
// Output: "5F3Z-2E9W"

// Test case : Input: s = "5F-3z", k = 4
// Test case : Input: s = "5F-3z", k = 4
// var licenseKeyFormatting = function(s, k) {
//   let stack = ""
//   let finalAns = ""
//   for(let i=0; i<s.length; i++){
//       if(s[i] === "-"){
//           continue
//       }
//       stack += s[i]
//   }
  
//   if(stack.length % 2 != 0){
//       let mod = stack.length % k
//       for(let i=0; i<mod; i++){
//           finalAns += stack[i]
//       }
//       finalAns += '-'
//       stack = stack.slice(mod, stack.length)
//   }
  
//   console.log(stack)
//   // stack = 5f3z2e9w
//   for(let i=0; i<stack.length; i++){
//       if(i%k === 0 && i != 0){
//           finalAns += "-"
//       }
//           finalAns += stack[i]    
//   }
//   return finalAns.toUpperCase()
  
// };



// const binarySearch = (arr, target) => {
  
//   arr.sort((function(a,b){return a-b}))
  
//   // [1,2,3,4,5,6]
//   // [1,2,3]
//   console.log(arr)

//   let left = 0
//   let right = arr.length - 1

//   while(left <= right) {

//     let middle = Math.floor((left + right)/2)

//     // console.log("Middle " + middle + " left "+ left + " right " + right)
//     // console.log(arr[middle])
//     if(arr[middle] === target) {
//       return arr[middle];
//     } else if(arr[middle] > target) {
//       right = middle - 1;
//     } else {
//       left = middle + 1;
//     }
//   }
//   return -1;
// }

// function binarySearch(array, target) {

//   let first = 0;

//   let last = array.length - 1;

//   let targetIndex = -1;

//   let middle;



//   while (targetIndex === -1 && first <= last) {

//       middle = Math.floor((first + last) / 2);

//       if (array[middle] === target) {

//           targetIndex = middle;

//       } else if (array[middle] > target) {

//           last = middle - 1;

//       } else {

//           first = middle + 1;

//       }

//   }

//   return targetIndex;

// }

// basically split the arry 
// check if the target is greater or less that the middle val
// if it is then shift accordigly

// console.log(binarySearch([1,2,3,4,5,6,10], 4))
// console.log(binarySearch([2,6,3,8,1,10], 10))
// console.log(binarySearch([], 4))

// console.log([2,6,3,8,1,10], 10)
// console.log([], 10)
// console.log([2,6,3,8,1,10], 10)
// console.log([2,6,3,8,1,10], 10)




// O(n) time

// function fib(k) {

//   if (k <= 1) return 1;



//   let prev = 1;

//   let cur = 1;



//   for (let i = 2; i < k + 1; i++) {

//     [prev, cur] = [cur, prev + cur];

//   }

//   return cur;

// }

// console.log(fib(3))
// function everyXth(arr, x){
//   if(!arr || arr.length < x){
//     return []
//   }

//   let retArr = []
//   for(let i=x-1 ;i<arr.length; i+=x){
//     retArr.push(arr[i])
//     // console.log(arr[i])
//   }

//   return retArr
// }

// console.log(JSON.stringify(everyXth([], 1000))
// === JSON.stringify([]))

// console.log(JSON.stringify(everyXth([5], 1))
// === JSON.stringify([5]))

// console.log(JSON.stringify(everyXth([5], 2))
// === JSON.stringify([]))

// console.log(JSON.stringify(everyXth([1,2,3,4,5,6], 2))
// === JSON.stringify([2,4,6]))

// console.log(JSON.stringify(everyXth([1,2,3,4,5,6], 3))
// === JSON.stringify([3,6]))

// console.log(JSON.stringify(everyXth([1,2,3,4,10,6], 5))
// === JSON.stringify([10]))

// console.log(JSON.stringify(everyXth([1,2,3,4,10,6], 8))
// === JSON.stringify([]))
// console.log(JSON.stringify(everyXth([1,2,3,4,5,6], 2))
// === JSON.stringify([2,4,6]))

// console.log(JSON.stringify(everyXth([1,2,3,4,5,6], 3))
// === JSON.stringify([3,6]))

// function mergeSort(arr){

//   if(arr.length < 1){
//     return []
//   }

//   //base case when length is one return the arr 
//   if(arr.length === 1){
//     return arr
//   }

//   let arrLeft = mergeSort(arr.slice(0, arr.length/2))
//   let arrRight = mergeSort(arr.slice(arr.length/2, arr.length))

//   console.log("left arr : " + arrLeft + " Right arr : " + arrRight)
//   return merge(arrLeft, arrRight)

//   function merge(arr1, arr2){
//     let arr3 = []

//     while(arr1 && arr2 && arr1.length && arr2.length){
//       if(arr1[0] <= arr2[0]){
//         arr3.push(arr1[0])
//         arr1 = arr1.slice(1, arr1.length)
//       } else {
//         arr3.push(arr2[0])
//         arr2 = arr2.slice(1, arr2.length)
//       }
//     }

//     console.log("arr3 : " + arr3)
//     while(arr1.length > 0 && arr1){
//       arr3.push(arr1[0])
//       arr1 = arr1.slice(1, arr1.length)
//     }
//     while(arr2.length > 0 && arr2){
//       arr3.push(arr2[0])
//       arr2 = arr2.slice(1, arr2.length)
//     }

//     console.log("arr3 after: " + arr3)

//     return arr3
//   }
// // }
// console.log(mergeSort([])) // []

// console.log(mergeSort([1])) // [1]

// console.log(mergeSort([3, 1, 2, 4])) // [1, 2, 3, 4]

// console.log(mergeSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]



// const sumDigits = dig => {
//   //base case
//   if(dig < 10){
//     return dig
//   }
//   // console.log(dig % 10)
//   let add = dig % 10
//   return add + sumDigits(Math.floor(dig/10))
// }

// console.log(sumDigits(12))

// console.table([
//   sumDigits(12) === 3,
//   sumDigits(122) === 5,
//   sumDigits(134) === 8,
//   sumDigits(1) === 1,
//   sumDigits(0) === 0
// ])


// Test cases 
// arr = [1,2,3,4,4] = 4
// arr = [1,2,3,4,4,1] = 5

// target  = 4
// less than target distinct values
// map -> number keys < target

// const fewerThanTargetDistinct = (arr, target) => {

//   if(arr.length < target){
//     return true
//   }

//   let set = new Set()
//   for(const keys of arr){
//     set.add(keys)
//   }
//   console.log(set)
//   console.log("map size is "+set.size + " target " + target)
//   if(set.size < target){
//     return true
//   }

//   return false

// }

// console.table([
//   fewerThanTargetDistinct([1,2,2,3,3], 3) === false,
//   fewerThanTargetDistinct([1,2,2,3,4], 3) === false,
//   fewerThanTargetDistinct([1,1,2,2,2], 3) === true,
//   fewerThanTargetDistinct([9], 1) === false,
//   fewerThanTargetDistinct([9], 2) === true,
//   fewerThanTargetDistinct([8,8,8], 1) === false,
//   fewerThanTargetDistinct([8,8,8], 2) === true,
//   fewerThanTargetDistinct([8,8,8], 3) === true,
//   fewerThanTargetDistinct([6,7,8,9], 1) === false,
//   fewerThanTargetDistinct([6,7,8,9], 2) === false,
//   fewerThanTargetDistinct([6,7,8,9], 3) === false,
//   fewerThanTargetDistinct([6,7,8,9], 4) === false,
//   fewerThanTargetDistinct([6,7,8,9], 5) === true
// ])


// arr = [7,2,3,4,1,5,6]
// arr = [1]
// arr = []
// arr = [1,1,1,2,1]
//minIndex = 0
// base case - len 1 return 0
//array[0] <= minIndex



// function findMinIndex(arr) {
//   if(arr.length < 2){
//     return 0
//   }

//   // console.log("MinIndex " + minIndex )

//   let minIndex = 1 + findMinIndex(arr.slice(1,))

//   console.log("After MindIndex : " + minIndex)
//   console.log("array " + arr)

//   if(arr[minIndex] >= arr[0]){
//     console.log("array val " + arr[minIndex] + " and first ele " + arr[0])
//     return 0
//   }

//   return minIndex

// }



// console.log(findMinIndex([12, 1234, 45, 67, 1]) == 4)
// console.log(findMinIndex([10, 20, 30]) == 0)
// console.log(findMinIndex([8, 6, 7, 5, 3, 7]) == 4)
// console.log(findMaxIndex([12, 1234, 45, 67, 1]) == 1)
// console.log(findMaxIndex([10, 20, 30]) == 2)
// console.log(findMaxIndex([8, 6, 7, 5, 3, 7]) == 0)



// const pairStars = word => {

//   if(word.length < 2){
//     return word
//   }


//   if(word[0] === word[1]){
//     return word[0] + "*" + pairStars(word.slice(1, word.length))
//   }

//   return word[0] + pairStars(word.slice(1, word.length))
// }

// console.log(pairStars("aa") == "a*a");
// console.log(pairStars("aabaa") == "a*aba*a");
// console.log(pairStars("noadjacent") == "noadjacent");
// console.log(pairStars("baba") == "baba");
// console.log(pairStars("a") == "a");
// console.log(pairStars("abba") == "ab*ba");







// const count7 = num => {
//   if(!num){
//     return 0;
//   }

//   if(num % 10 === 7){
//     return 1 + count7(Math.floor(num/10))
//   }
//   return count7(Math.floor(num/10))
// }

// console.log(count7(12777) == 3)
// console.log(count7(0) == 0)
// console.log(count7(77777) == 5)
// console.log(count7(7171717) == 4)



// const countSkippedPairs = word => {
//   if(!word || word.length < 3){
//     return 0
//   }

//   if(word[0] == word[2]){
//     return 1 + countSkippedPairs(word.slice(1, word.length))
//   }
//   return countSkippedPairs(word.slice(1, word.length))
// }

// console.log(countSkippedPairs("axa") == 1)
// console.log(countSkippedPairs("axax") == 2)
// console.log(countSkippedPairs("axaaa") == 2)
// console.log(countSkippedPairs("axa") == 1)
// console.log(countSkippedPairs() == 0)
// console.log(countSkippedPairs("yyyyyy") == 4)
// console.log(countSkippedPairs("yyyyyyxxx") == 5)

// 1 2 4 5 9 8 7
// 
 // outer loop is i = 1 (which is 4)
 // j = i
 // inner loop, condition arr[j-1] > arr[j]
   // if that's true, then swap values
   // j--
// function insertionSort(array) {
  
//   for(let i=1; i<array.length; i++){
//     let j = i

//     while(array[j-1] > array[j] && j > 0){
//       let temp = array[j-1]
//       array[j-1] = array[j]
//       array[j] = temp
//       j--
//     }
//   }
//   return array
// }

// const insertionSort = array => {
//   for(let i = 1; i < array.length; i++) {
//     let j = i

//     while(array[j-1] > array[j] && j > 0) {
//       // Array Destructing
//       [array[j], array[j-1]] = [array[j-1], array[j]]
//       j--
//     }
//   }
//   return array
// }



// // Test Cases
// console.log(insertionSort([])) // []
// console.log(insertionSort([1])) // [1]
// console.log(insertionSort([3, 1, 2, 4])) // [1, 2, 3, 4]
// console.log(insertionSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]
// console.log(insertionSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]


// function vbNesting(controlFlow) {
//   const stack = [];
//   let maxDepth = 0;

//   for (let i = 0; i < controlFlow.length; i++) {
//     const nextKeyword = controlFlow[i];
//     if (nextKeyword === "if") {
//       stack.push("if");
//       maxDepth = Math.max(maxDepth, stack.length);
//     } else if (nextKeyword === "endif") {
//       const topKeyword = stack.pop();
//       if (topKeyword === undefined) {
//         return -1;
//       }
//     } else if (nextKeyword === "elseif" || nextKeyword === "else") {
//       const topKeyword = stack.pop();
//       if (topKeyword === "if" || topKeyword === "elseif") {
//         stack.push(nextKeyword);
//       } else { // the topKeyWord is "else" or "endif"
//         return -1;
//       }
//     }
//   }

//   if (stack.length === 0) {
//     return maxDepth;
//   }
//   return -1;
// }




// console.log(vbNesting(["if"]) == -1)
// console.log(vbNesting(["endif"]) ==  -1)
// console.log(vbNesting(["if", "endif"]) == 1)
// console.log(vbNesting(["if", "else", "endif"]) == 1)
// console.log(vbNesting(["if", "endif", "if", "endif"]) == 1)
// console.log(vbNesting(["if", "if", "endif", "endif"]) == 2)
// console.log(vbNesting(["if", "if", "if", "endif", "endif", "endif"]) == 3)
// console.log(vbNesting(["if", "if", "if", "endif", "endif", "if", "endif", "endif"]) == 3)


// class TreeNode {

//   constructor(value = 0, leftChild = null, rightChild = null) {

//       this.value = value

//       this.left = leftChild

//       this.right = rightChild

//   }

// }



// function findTreeHeight(root) {

//   if(!root){
//     return -1
//   }
//   console.log(root.value)
//   return Math.max(findTreeHeight(root.left), findTreeHeight(root.right)) +1

// }



// Test Cases

// console.log(findTreeHeight(null), -1)
// console.log(findTreeHeight(new TreeNode(0)), 0)

// console.log(findTreeHeight(new TreeNode(1, new TreeNode(2), new TreeNode(3))), 1)

// console.log(findTreeHeight(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))), 3)



// function solution(str) {
//     if(!str){
//         return true;
//     }
    
//     let stack = []
//     let map = {
//         ")" : "(",
//         "]" : "[",
//         "}" : "{",
//     }
//     for(let i=0; i<str.length; i++){
        
//         if(map[str[i]] === stack[stack.length-1] && stack.length > 0){
//             stack.pop();
//             continue;
            
//         } else if(!map[str[i]] || stack.length === 0) {
//             stack.push(str[i]);
//         }
//     }

//     return !stack.length
// }










// function find_left_peaks(arr){
//   let stack = [];

//   for(let i=0; i<arr.length; i++){
//     while(stack.length > 0 && stack[stack.length-1] < arr[i]){
//       stack.pop()
//     }
//     stack.push(arr[i]);

    // console.log(stack + " array is "+ arr[i])
//   }
//   return stack
// }

// console.log((find_left_peaks([]) == []))
// console.log((find_left_peaks([1, 2, 5, 3, 1, 2]) === [5, 3, 2]))
// console.log((find_left_peaks([3, 2, 1]) == [3, 2, 1]))
// console.log((find_left_peaks([1, 2, 3]) == [3]))
// console.log((find_left_peaks([10, 4, 6, 3, 5]) == [10, 6, 5]))
// console.log((find_left_peaks([1,2,3,5,5,5,4,5,3,2,1]) == [5, 5, 5, 5, 3, 2, 1]))
// console.log((find_left_peaks([1,2,3,5,5,5,4,6,5,3,2,1]) == [6, 5, 3, 2, 1]))
// console.log((find_left_peaks([5,5,5,5,5]) == [5, 5, 5, 5, 5]))

// function findHat(dogs, bestFriend) {
//   const dogsToAsk = [bestFriend];
//   const dogsAlreadyAsked = new Set();

//   while(dogsToAsk.length > 0) {
//     const nextDogToAsk = dogsToAsk.pop();
//     if (dogsAlreadyAsked.has(nextDogToAsk)) {
//       continue;
//     }
    
//     if (dogs[nextDogToAsk][0] === 'HAT') {
//       return nextDogToAsk;
//     }

//     dogsAlreadyAsked.add(nextDogToAsk);
//     const newDogsToAsk = dogs[nextDogToAsk];
//     dogsToAsk.unshift(...newDogsToAsk);
//   }

//   return "Couldn't find the hat"
// }


// let dogs = {
//   'Carter': ['Fido', 'Ivy'],
//   'Ivy': ["HAT"], // Ivy has seen the hat
//   'Loki': ['Snoopy'],
//   'Pepper': ['Carter'],
//   'Snoopy': ['Pepper'],
//   'Fido': []
// };
// console.log(findHat(dogs, 'Loki')); // returns 'Ivy'








// class TreeNode{
// constructor(val, left = null, right = null){
//     this.val = val;
//     this.left = left;
//     this.right = right;
//   }
// }

// let logs = ["d1/","../","../","../"]
// let newstr = logs.split(",")
// console.log(newstr)


// function longestPath(root) {
//   const stack = [];
//   let path = "[]";
//   let maxHeight = 0;

//   function helper(root) {
//     if (!root) {
//       if (maxHeight < stack.length) {
//         maxHeight = stack.length;
//         path = '[' + stack.join('->') + ']';
//       }
//       return;
//     }
//     stack.push(root.value);
//     helper(root.left);
//     helper(root.right);
//     stack.pop();
//   }

//     helper(root);

//   return path;
// }


// var removeOuterParentheses = function(s) {
    
//   if(s.length === 0){
//       return "";
//   }
//   let stack = []
//   let newStr = ""
//   for(let i=0; i<s.length; i++){
//       console.log(stack)
//       if(s[i] === "("){
//           if(stack.length > 0){
//               newStr += s.slice(i, i+1)
//           }
//           stack.push(s[i])
//       } else {
//           stack.pop()
//           if(stack.length > 0){
//               newStr += s.slice(i, i+1)
//           }
          
//       }
//   }
//   return newStr
// };

// const findElementRecur = (root, target) => {
//   if(!root) return false;

//     if(root.val === target){
//      console.log("yes" + root.val)
//       return true;
//     } else if(root.val > target){
//       console.log(root.left.val)
//       return findElementRecur(root.left, target);
//     } else {
//       console.log(root.right.val)
//       return findElementRecur(root.right, target);
//     }
// }

// const findElementIter = (root, target) => {
//   if(!root) return;
//   while(root){
//     if(root.val === target){
//       return true
//     } else if(root.val > target){
//       root = root.left
//     } else {
//       root = root.right
//     }
//   }
//   return false
// }

//     10
//   8   15
// 3   12

// console.log(findElementRecur(new TreeNode(10, new TreeNode(8, new TreeNode(3)), new TreeNode(15, new TreeNode (12, new TreeNode(11)))), 11))

// console.log(findElementIter(new TreeNode(10, new TreeNode(8, new TreeNode(3)), new TreeNode(15, new TreeNode (12))), 1))

// const findMostFrequentNodeValue = (root) =>{
//   let map = new Map()
  
//   function helper(root){
//     if(!root) {
//       return [];
//     }
//     map[root.val] = (map[root.val] || 0) + 1
    
//     helper(root.left)
//     helper(root.right)
//   }
//   helper(root)

//   let maxElement = -100000
//   let maxElementCount = 0

//   for(const keys in map){
//     if(map[keys] > maxElementCount){
//       maxElementCount = map[keys]
//       maxElement = keys
//     }
//   }
//   return maxElement
// }


// console.log(findMostFrequentNodeValue(new TreeNode(6, new TreeNode(6, new TreeNode(7)), new TreeNode(7, new TreeNode(4), new TreeNode(7)))) === "7")

// console.log(findMostFrequentNodeValue(new TreeNode(1, new TreeNode(2, new TreeNode(2)))))
// console.log(findMostFrequentNodeValue(new TreeNode(1)))




/*

    1
  2   3
 5   6  7

 stack 
 - push root node to stack
 stack = 1
 check if the root node has left or right push them to stack 
 stack = 2 3 
 stack will pop 3 
 stack = 2
 stack = 2 6 7
 stack will pop 7
 stack will pop 6
 stack will pop 2
 stack will pop 5


*/

// // const countElements = (root)=>{
// //   let stack = root ? [root] : [];
// //   let result = 0
  
// //   while(stack.length){
// //     const node = stack.pop()
// //     console.log(node.val)
// //     console.log("node values")
// //     result += node.val
// //     if(node.left){
// //       stack.push(node.left)
// //       // console.log(stack)
// //     }
// //     if(node.right){
// //       stack.push(node.right)
// //       // console.log(stack)
// //     }
// //   }
// //   return result
// // }

// console.log(countElements(new TreeNode(1, new TreeNode(2, new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)))))










/*
 * Given a binary tree with node values represented as integers, find and return the least occurring  tree node value (eg: 3).
 * You can assume there will always be a valid answer (no duplicate frequencies or invalid arrangements).

 * Function Signature: 
    function findLeastFrequentNodeValue(root)
 * Target runtime and space complexity:
    O(n), where n = # of nodes in tree
 * Examples:
 * Example 1

           1
       2       _
     2   _   _   _
    
  should return Node(1)
 * Example 2

           1
       1       1
    1    1   1   1
    
    should return Node(1)
 * Example 3


           9
       _       _
    
   should return Node(9)

 * Test Cases:
    Derive your test cases from the example trees:
  eg: TreeNode(*node value*, *left node*, *right node*)

 * Happy case : 
    - duplicate frequencies - return all elements - []
    - !root return null;

  * Pseudocode :
    - Insert the elements in the tree 
    - helper function;
    - DFS or BFS 
    - In order DFS - Inorder 
    - use a map to store the elements and their counts 
    - find minimum - least frequently found element
    - if there are two or more elements with same frequency return an arr of ele
     


    class TreeNode {
      constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
      }
    }
    
let myTree = new TreeNode(1, new TreeNode(1, new TreeNode(4), new TreeNode(5)), new TreeNode(1)) //expect [4, 5]

let myTree1 = new TreeNode(1, new TreeNode(1, new TreeNode(4), new TreeNode(4)), new TreeNode(5), new TreeNode(5)) //expect all
let myTree2 = new TreeNode(1, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(2), new TreeNode(1)) 

function findLeastFrequentNodeValue(root) {
  let map = new Map()
  function helper(root) {
      if (!root) return;
      if (root) {
        map[root.value] = (map[root.value] || 0 ) + 1;
      }
  
      helper(root.left);
      helper(root.right);
  }
  helper(root);
 
  let leastElement = null;
  let count = Infinity;
  for(let keys in map) {
    if(map[keys] < count){
      // console.log(map[keys] + "   keys ")
      leastElement = keys;
    } 
  }
  return leastElement;
} 

console.log(findLeastFrequentNodeValue(myTree))

// main method?
console.table([
  findLeastFrequentNodeValue(myTree) === '5',
  findLeastFrequentNodeValue(myTree1) === '5',
  findLeastFrequentNodeValue(myTree2) === '3'
])

// infinity
//{8:2, 1:2, 3:2 }
// [8, 1]
// result 
let myObject = {"fish": 1}
for (let item in myObject) {
  console.log(item);
}

let arr = ["apple", "pear"]
let arr1 = {2: ["apple", "pears"], 1: ["green", "red"]}

for(let keys in arr1){
  console.log(keys)
  console.log(arr1[keys])
}



*/


/*

// Binary Tree

//      10
//   5       15
// 1   7   12   20
//        11

// better graphical representation of a tree
// https://cdn.programiz.com/sites/tutorial2program/files/bst-vs-not-bst.png


// Plan:
// 2. Create the binary tree Node class (~3m)

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

// code representation of the Binary Tree at the top
let [leftLeft, leftRight, rightLeft, rightRight] = [
  new Node(1), new Node(7), new Node(12, new Node(11)), new Node(20)
];
let [left, right] = [new Node(5, leftLeft, leftRight), new Node(15, rightLeft, rightRight)];
let root = new Node(10, left, right);

function printTree(root) {
  let q = [root];
  const buf = [];
  while (q.length > 0) {
    const nextQ = [];
    for (const node of q) {
      buf.push(node.val.toString());
      buf.push(" ");
      if (node.left) nextQ.push(node.left);
      if (node.right) nextQ.push(node.right);
    }
    buf.push("\n");
    q = nextQ;
  }
  console.log(buf.join(""));
}

printTree(root);

// 4. Navigating binary tree problems (~30m)
//
// a. Calculate the depth of the tree (longest path)

//      10
//   5       15
// 1   7   12   20
//        11

function calculateMaxDepth(root) {
  if (!root) return 0;
  let leftDepth = calculateMaxDepth(root.left);
  let rightDepth = calculateMaxDepth(root.right);
  return Math.max(leftDepth, rightDepth) + 1
}

// console.log('depth', calculateMaxDepth(root));


// b. Calculate the sum of the entire tree

function sum(root) {
  if (!root) return 0

  return root.val + sum(root.left) + sum(root.right)
}

// console.log('sum', sum(root));

// Haskell
// Functional Programming Language (FP)
// Pure

// c. Search a binary search tree

function searchRegular(root, target) {
  if (!root) {
    return false
  }
  if (root.val === target) {
    return true
  }
  return (searchRegular(root.left, target) || searchRegular(root.right, target))
}

function searchBinary(root, target) {
  if (!root) {
    return false
  }
  if (root.val === target) {
    return true
  } else if (target < root.val) {
    return searchBinary(root.left, target);
  } else {
    return searchBinary(root.right, target);
  }
}

// for (const target of [10, 5, 15, 234, 345, 4567]) {
//   console.log('searchRegular', target, searchRegular(root, target));
// }

// for (const target of [10, 5, 15, 234, 345, 4567]) {
//   console.log('searchBinary', target, searchBinary(root, target));
// }

//      10
//   5       15
// 1   7   12   20
//        11

// 6. Validate if a binary tree is a binary search tree 
function validateTree(root) {
  function validate(node, max = Infinity, min = -Infinity) {
    if(!node) {
      return true;
    }

    if (node.val <= min || node.val >= max) {
      return false
    }

    return validate(node.left, node.val, min) && validate(node.right, max, node.val)
  }
  
  return validate(root);
}


[leftLeft, leftRight, rightLeft, rightRight] = [
  new Node(1), new Node(11), new Node(12, new Node(11)), new Node(20)
];
[left, right] = [new Node(5, leftLeft, leftRight), new Node(15, rightLeft, rightRight)];
root = new Node(10, left, right);
console.log(validateTree(root));

*/







// class BinaryTree{
//   constructor(val, left=null, right=null){
//     this.val = val
//     this.left = left
//     this.right = right
//     this.array = []
//   }

//   printTree(root){
//     if(!root){
//       return
//     }

//     while(root){
//       this.array.push(root.value)
//       this.printTree(root.left)
//       this.printTree(root.right)
//     }

//     console.log(this.array)
//   }
// }


// let bTree = new BinaryTree(2, new BinaryTree(3), new BinaryTree(4))
// // console.log(bTree)
// bTree.printTree(bTree)





// Stack Class with Linked List

// Agenda
// Agree on a programming language.
// Read the problem prompt.
// Follow the Engineering Method to solve the problem. Keep an eye on the time and make sure things are progressing.
// If it didn’t come up in the Choose a Solution step, be sure to evaluate and understand the runtime and space complexity
// Problem

// Implement a basic stack class using an linked list as the underlying storage. Stacks have two critical methods, push() and pop() to add and remove an item from the stack, respectively. You'll also need a constructor for your class, and for convenience, add a size() method that returns the current size of the stack. All of these methods should run in O(1) time!
// A singly linked list is a simple way to create a stack. The head of the list is the top of the stack.
// Remember, a stack is a last in, first out data structure!
// Function Signature: 
// class LLNode {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

/*
Happy test cases:
  -  1 -> 2 -> 3 -> 4 
  - Push 
    - 1 -> 2 -> 3 -> 4 -> 5
  - Pop
    - 1 -> 2 -> 3 -> 4 
  - Size
    - Length of the stack

Edge test cases:
  - empty stack - length = 0
  - one element in the stack

Explore and choose solution:
  - 


*/


// class LLStack {
//   constructor() {
//     this.count = 0
//     this.top = new LLNode("top")
//   } // initialize the stack to be empty
//   push(newValue) {
//     // -> 2 
//     let newNode = new LLNode(newValue, this.top.next);
//     this.top.next = newNode
//     this.count++
//     console.log("new node " + newNode.value + " top " + this.top.next.value)

//   } // Adds a new value to the stack
//   pop() {
//     if(this.count === 0){
//       return 
//     }
//    // 1 - 2 - 3 - 4 
//    // top.next = 4
//    // node = 4
//    // top.next = node.next // null
//    // 
//     const node = this.top.next;
//     this.top.next = node.next;
//     // node.next = null;
//     this.count--;
//     return node.value;

//   } // Removes the top value from the stack and returns it
//   size() {
//     return this.count
//   } // returns the current size of the stack
// }
// // Target runtime and space complexity:
// // O(1) for all methods!
// // Examples:
// const stack = new LLStack();
// console.log(stack.size()) // 0
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);
// console.log(stack.size()) // 2
// console.log(stack.pop()); // 3
// console.log(stack.pop()); // 3
// console.log(stack.size()) // 1
// console.log(stack.pop()); // 2






// class Node{
//     constructor(val, next=null){
//       this.val = val
//       this.next = next
//     }
// }
  
// function toString(head) {
//     if (!head)
//       return "<empty>"
  
//     let parts = []
//     while(head) {
//       parts.push(head.val)
//       head = head.next
//     }
  
//     return parts.join(" -> ")
// }


// O(N) time

// function insert(head, target) {
//   if (!head) return new Node(target)

//   let dummyHead = new Node(0)
//   dummyHead.next = head
//   let node = dummyHead

//   while (node) {
//     if (!node.next || target < node.next.value) {
//       const next = node.next;
//       node.next = new Node(target);
//       node.next.next = next;
//       break;
//     }
//     node = node.next;
//   }
//   return dummyHead;
// }

// console.log(toString(insert(new Node(1, new Node(2, new Node(3)))), 4))
// function arrayToLL(arr){
//   let head = new Node()
//   let node = head
//   for(let i=0; i<arr.length; i++){
//     node.next = new Node(arr[i])
//     node = node.next
//   }
//   return head.next
// }

// console.log(toString(arrayToLL([])) == "<empty>")
// console.log(toString(arrayToLL([1])) == "1")
// console.log(toString(arrayToLL([1,2])) == "1 -> 2")
// console.log(toString(arrayToLL([1,2,3])) == "1 -> 2 -> 3")
// console.log(toString(arrayToLL([5,0,3])) == "5 -> 0 -> 3")
// console.log(toString(arrayToLL([8,7,8,8])) == "8 -> 7 -> 8 -> 8")
// console.log(toString(arrayToLL([8,7,8,8,7])) == "8 -> 7 -> 8 -> 8 -> 7")



// function findMin(arr) {
//   let result = arr.pop()
//   if(arr.length > 0){
//     let next = findMin(arr)
//     if(next < result){
//       result = next
//     }
//   }
//   return result
// }

// function findMax(arr) {
//   // 10 20 30 
//   // result = 30
//   // arr = [10 20]

//   let result = arr.pop()
//   if(arr.length > 0){
//     let next = findMax(arr)
//     if(next > result){
//       console.log(result + " next " + next)
//       result = next
//     }
//   }
//   return result
// }

// console.table([
//   findMin([12, 1234, 45, 67, 1]) === 1,
//   findMin([10, 20, 30]) === 10,
//   findMin([30, 20, 10]) === 10,
//   findMin([20, 10, 30]) === 10,
//   findMin([10, 20, 30, 10]) === 10,
//   findMin([10, 10, 10, 10]) === 10,
//   findMin([6]) === 6,
//   findMin([]) === null,
//   findMin([8, 6, 7, 5, 3, 7]) === 3,
//   findMin([-10, -5, -3, -30]) === -30,
  
//   findMax([12, 1234, 45, 67, 1]) === 1234,
//   findMax([10, 20, 30]) === 30,
//   findMax([30, 20, 10]) === 30,
//   findMax([20, 10, 30]) === 30,
//   findMax([10, 20, 30, 10]) === 30,
//   findMax([10, 10, 10, 10]) === 10,
//   findMax([6]) === 6,
//   findMax([8, 6, 7, 5, 3, 7]) === 8,
//   findMax([-10, -5, -3, -30]) === -3,
// ])

// class Node{
//   constructor(val, next=null){
//     this.val = val
//     this.next = next
//   }
// }

// function toString(head) {
//     if (!head)
//       return "<empty>"
  
//     let parts = []
//     while(head) {
//       parts.push(head.val)
//       head = head.next
//     }
  
//     return parts.join(" -> ")
//   }

// function everyKthNode(head, value) {
//   if(!head){
//     return 
//   }
//  let count = 1
//  let newHead = new Node()
//  let curr = newHead
//   while(head){
//     if(count % value === 0){
//       curr.next = new Node(head.val)
//       curr = curr.next
//     }
//     head = head.next
//     count++
//   }
//   return newHead.next
// }

// let head = new Node(1, new Node(3, new Node(6, new Node(2, new Node(8, new Node(9))))))
// console.log(toString(everyKthNode(head, 3)) == "6 -> 9")
// // 1 -> 3 -> 6 -> 2 -> 8 -> 9
// let head = new Node(1, new Node(3, new Node(6, new Node(2, new Node(8, new Node(9))))))
// console.log(toString(everyKthNode(head, 3)) == "6 -> 9")
// console.log(toString(everyKthNode(head, 1)) == "1 -> 3 -> 6 -> 2 -> 8 -> 9")
// console.log(toString(everyKthNode(head, 5)) == "8")
// console.log(toString(everyKthNode(head, 6)) == "9")
// console.log(toString(everyKthNode(head, 7)) == "<empty>")

// // 6
// head = new Node(6)
// console.log(toString(everyKthNode(head, 1)) == "6")
// console.log(toString(everyKthNode(head, 20)) == "<empty>")

// // 6 -> 12
// head = new Node(6, new Node(12))
// console.log(toString(everyKthNode(head, 1)) == "6 -> 12")
// console.log(toString(everyKthNode(head, 2)) == "12")
// console.log(toString(everyKthNode(null, 5)) == "<empty>")

// class ListNode{
//   constructor(value, next){
//     this.value = value;
//     this.next = next;
//   }

//   print() {
//     const arr = [];
//     let head = this;
//     while (head) {
//       arr.push(head.value);
//       head = head.next;
//     }
//     console.log(arr);
//   }
// }

// let oneTwoThree = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));


// Problem 1
// function swapValuePairs(head) - swap the data in each node without swapping pointers

// function swapValuePairs(head){

// // 1 2 3 
// // 2 1 3
// // 2 3 1

//   while(head && head.next){ 
//     let temp = head.value
//     head.value = head.next.value
//     head.next.value = temp

//     // console.log(head.next.next)
//     head = head.next.next
//   }
// }

// swapValuePairs(oneTwoThree);
// oneTwoThree.print();

// Problem 2
// function additionNext(head) - add to the value in each node by the value in the next node. The tail node has no next node so double its value

// 1,2,3
// 3,2,3
// 3,5,3
// 3,5,6

// function additionNext(head) {
//   while(head) {
//     head.value += head.next ? head.next.value: head.value
//     head = head.next
//   }

// }

// oneTwoThree = new ListNode(1);
// console.log('before');
// oneTwoThree.print();
// additionNext(oneTwoThree);
// console.log('after');
// oneTwoThree.print();



// Problem 3
// function firstRemoveEveryOther(head) - remove every other node starting with removing the head.
//head = head.next
//0, if its an odd number, remove the node
// 2 variables, current, follow
// if count is even, follow.next = current & follow = current, else follow = null

// input: [1, 2, 3]
// output: [2]

// input: [1, 2, 3, 4]
// output: [2, 4]

// input: [1, 2, 3, 4, 5]
// output: [2, 4]
// function firstRemoveEveryOther(head){
//   let count = 1;
//   head = head.next;
//   let follow = head
//   let curr = follow.next

//   while(curr){
//     if (count % 2 !== 0){
//       follow.next = null
//     } else {
//       follow.next = curr
//       follow = curr
//     }
//     count++
//     curr = curr.next
//   }
// return head
// }
// console.log('before');
// oneTwoThree.print();
// console.log('after');
// firstRemoveEveryOther(oneTwoThree).print();
// let ex = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
// console.log('before');
// ex.print();
// console.log('after');
// firstRemoveEveryOther(ex).print();


// Problem 4
// function rotateValuesRight(head) - move the values right without altering next pointers. The tail's value should become the head's new value.

// 1->2->3->4

// 4->1->2->3

// function rotate(head){
//   let root = head;

//   while(head.next){
//     // head.next.value = head.value;
//     head.value = head.next.value;
//     head = head.next
//   }
  
//   // tail
//   root.value = head.value;
// }

// let ex = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
// ex.print();
// rotate(ex);
// ex.print();

// Problem 5
// function removeLastQuarterNodes(head) - remove the last 1/4 of the nodes in the linked list. How can this be solved without a length variable?



// const countOdd = (head) => {
//   if(!head){
//     return 0
//   }

//   if(head.val % 2 !== 0 && head.val != 0){
//     return 1 + countOdd(head.next) 
//   }
//   // console.log(head.val)
//   return countOdd(head.next)
// }

// console.log(countOdd(null) == 0)

// // 0
// let head = new Node(0)
// console.log(countOdd(head) == 0)

// // 5
// head = new Node(5)
// console.log(countOdd(head) == 1)

// // 6
// head = new Node(6)
// console.log(countOdd(head) == 0)

// // 1 -> 1 -> 1 -> 1
// head = new Node(1, new Node(1, new Node(1, new Node(1))))
// console.log(countOdd(head) == 4)

// // 1 -> 2 -> 3 -> 4
// head = new Node(1, new Node(2, new Node(3, new Node(4))))
// console.log(countOdd(head) == 2)

// // 2 -> 2 -> 2 -> 2
// head = new Node(2, new Node(2, new Node(2, new Node(2))))
// console.log(countOdd(head) == 0)

// // 1 -> 2 -> 3 -> 4 -> 5
// head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))
// console.log(countOdd(head) == 3)

// // 6 -> 2 -> 100 -> 4 -> 8
// head = new Node(6, new Node(2, new Node(100, new Node(4, new Node(8)))))
// console.log(countOdd(head) == 0)

// console.table([
//   countOddValues(new Node(1, new Node(2, new Node(3, new Node(5))))),
//   countOddValues(new Node(1, new Node(7, new Node(3, new Node(5))))),
//   countOddValues(new Node(1)),
//   countOddValues(new Node(0)),
//   countOddValues(new Node(0, new Node(0, new Node(2, new Node(3)))))

  // findMissing(new Node(-3, new Node(-1, new Node(3, new Node(5))))) == -2,
  // findMissing(new Node(-3, new Node(-2, new Node(-1, new Node(5))))) == 0,
  // findMissing() == 1,
  // findMissing(new Node(-3, new Node(-2))) == -1,
  // findMissing(new Node(-3, new Node(-2, new Node(-1)))) == 0
// ])





// class Node {
//   constructor(val, next=null){
//     this.val = val
//     this.next = next
//   }
// }

// const findMissing = (head) => {
//   if(!head){
//     return 1
//   }

//   if(!head.next){
//     return head.val + 1
//   }

//   while(head.next != null){
//     if(head.val + 1 != head.next.val){
//       return head.val + 1
//     } 
//     head = head.next
//   }
//   return head.val + 1
// }

// console.table([
//   findMissing(new Node(1, new Node(2, new Node(3, new Node(5))))) == 4,
//   findMissing(new Node(-3, new Node(-1, new Node(3, new Node(5))))) == -2,
//   findMissing(new Node(-3, new Node(-2, new Node(-1, new Node(5))))) == 0,
//   findMissing() == 1,
//   findMissing(new Node(-3, new Node(-2))) == -1,
//   findMissing(new Node(-3, new Node(-2, new Node(-1)))) == 0
// ])

// let head1 = new Node(1, new Node(3))
// let head2 = new Node(-3, new Node(-1))
// let head3 = new Node(5, new Node(6, new Node(7, new Node(8, new Node(9)))))
// let head4 = new Node(5, new Node(6, new Node(7, new Node(8, new Node(10)))))
// let head5 = new Node(1)
// let head6 = new Node(10)
// let head7 = new Node(1, new Node(2))
// let head8 = new Node(5, new Node(6, new Node(8, new Node(9, new Node(10)))))
// let head9 = new Node(-1)

// console.log(findMissing(head1) == 2)
// console.log(findMissing(head2) == -2)
// console.log(findMissing(head3) == 10)
// console.log(findMissing(head4) == 9)
// console.log(findMissing(head5) == 2)
// console.log(findMissing(head6) == 11)
// console.log(findMissing(head7) == 3)
// console.log(findMissing(head8) == 7)
// console.log(findMissing(head9) == 0)
// console.log(findMissing(null) == 1)




// const triangle = (num) => {
  
//   if(num <= 0 || num == null){
//     return 0
//   }

//   return num + triangle(num-1)
// }
// console.log(triangle(12) == 78)
// console.log(triangle(7) == 28)
// console.log(triangle(6) == 21)
// console.log(triangle(5) == 15)
// console.log(triangle(4) == 10)
// console.log(triangle(3) == 6)
// console.log(triangle(2) == 3)
// console.log(triangle(1) == 1)
// console.log(triangle(0) == 0)

// const numPairs = (head) => {

//   if(!head) {
//     return 0
//   } 

//   let map = new Map()
//   let count = 0

//   while(head) {
//     if(map.has(head.val)){
//       map.set(head.val, map.get(head.val) + 1)
//     } else {
//       map.set(head.val, 1)
//     }
//     head = head.next
//   }

//   for(let key of map.keys()){
//     if(map.get(key) === 2) {
//       count = count + 1
//     }
//   }
//   return count
// }

// let head = new Node(1, new Node(2, new Node(3, new Node(3, new Node(2)))))
// console.log(numPairs(head))

// console.table([
//   numPairs(new Node(1, new Node(2, new Node(3, new Node(3, new Node(2)))))) === 2,
//   numPairs() === 0,
//   numPairs(new Node(1, new Node(1, new Node(1, new Node(2, new Node(2)))))) === 1,
//   numPairs(new Node()) === 0,
//   numPairs(new Node(1, new Node(1, new Node(1, new Node(2, new Node(2)))))) === 1
// // ])

// let head1 = new Node(1, new Node(2, new Node(2, new Node(3, new Node(3, new Node(3))))))
// let head2 = new Node(5, new Node(5, new Node(10, new Node(20))))
// let head3 = new Node(5, new Node(5, new Node(10, new Node(10))))
// let head4 = new Node(5, new Node(5, new Node(5, new Node(10))))
// let head5 = new Node(5, new Node(10, new Node(10, new Node(10))))
// let head6 = new Node(4)
// let head7 = new Node(5, new Node(5))
// let head8 = new Node(5, new Node(5, new Node(5, new Node(5))))
// let head9 = new Node(6, new Node(9))
// let head10 = new Node(5, new Node(5, new Node(5, new Node(10, new Node(10)))))
// let head11 = new Node(6, new Node(5, new Node(5, new Node(5, new Node(5, new Node(6))))))

// console.table([
//   numPairs(null) == 0,
//   numPairs(head1) == 1,
//   numPairs(head2) == 1,
//   numPairs(head3) == 2,
//   numPairs(head4) == 0,
//   numPairs(head5) == 0,
//   numPairs(head6) == 0,
//   numPairs(head7) == 1,
//   numPairs(head8) == 0,
//   numPairs(head9) == 0,
//   numPairs(head10) == 1,
//   numPairs(head11) == 1
// ])



// const array6 = (input, index) => {

//   if(input.length <= 0 || index >= input.length){
//     return 0
//   }

//   if(input[index] === 6){
//     return 1 + array6(input, index+1)
//   }
//   return array6(input, index+1)
// }

// console.table([
//   array6([1,2,3,4,6,6],0) == 2,
//   array6([],0) == 0,
//   array6([6,2,6,4,6,6],0) == 4
// ])

// console.table([
//   array6([1, 2, 6], 0) == 1,
//   array6([6, 6], 0) == 2,
//   array6([1, 2, 3, 4], 0) == 0,
//   array6([1, 6, 3, 6, 6], 0) == 3,
//   array6([6], 0) == 1,
//   array6([1], 0) == 0,
//   array6([], 0) == 0,
//   array6([6, 2, 3, 4, 6, 5], 0) == 2,
//   array6([6, 5, 6], 0) == 2,
// ])



// function countX(word){
//   if(word.length < 1) {
//     return 0
//   }

//   // console.log(word)
//   // console.log(word[0])

//   if(word[0] === "x"){
//     return 1 + countX(word.slice(1))
//   }
//   return countX(word.slice(1))

// }

// console.table([
// (countX("xhixhix") == 3),
// (countX("hiX") == 0),
// (countX("XXXhXXX") == 0),
// (countX("x") == 1),
// (countX("") == 0),
// (countX("hihi") == 0),
// (countX("hiAAhi12hi") == 0)
// ])

// console.log(countX("xhixhix") == 3)
// console.log(countX("xxhixx") == 4)
// console.log(countX("hiX") == 0)
// console.log(countX("XXXhXXX") == 0)
// console.log(countX("x") == 1)
// console.log(countX("") == 0)
// console.log(countX("hihi") == 0)
// console.log(countX("hiAAhi12hi") == 0)

// console.log(countX("xxhsxx"))
// console.log(countX("hi"))
// console.log(countX("hahaxxhsx"))
// console.log(countX("x"))
// console.log(countX(""))
// console.log(countX("12x3x") == 2)
// const strDist = (word, sub) => {

//   if(word.length <= 0 || word.length < sub.length){
//     return 0
//   } 

//   if(word.substring(0, sub.length) !== sub) {
//     return strDist(word.substring(1, word.length), sub) // hihih = hih 
//   } else if(!word.substring(word.length - sub.length, word.length)){
//       return strDist(word.substring(0, word.length-1), sub)
//   } else if(word.substring(0, sub.length) !== sub) {
//       return strDist(word.substring(0, sub.length) !== sub)
//   }

//   function strDist(word, sub) {
//     if (word.length < sub.length)
//       // base case when the word is smaller than "sub"
//       return 0
    
//     if (word.slice(0, sub.length) === sub 
//       && word.slice(word.length - sub.length) === sub)
//       // base case when the word starts and ends with "sub"
//       return word.length
  
//     if(word.slice(0, sub.length) !== sub)
//       // remove the first character
//       return strDist(word.slice(1), sub) 
  
//     // remove the last character
//     return strDist(word.slice(0, word.length - 1), sub)
//   }

    
// console.log(strDist("catcowcat", "cat") == 9)
// console.log(strDist("catcowcat", "cow") == 3)
// console.log(strDist("cccatcowcatxx", "cat") == 9)
// console.log(strDist("ashiashiasi", "hi") == 6)
// console.log(strDist("ashiashiasijhass", "ass") == 3)
// console.log(strDist("abccatcowcatcatxyz", "cat") == 12)
// console.log(strDist("ooowhwhwooo", "whw") == 5)
// console.log(strDist("xyx", "x") == 3)
// console.log(strDist("xyx", "y") == 1)
// console.log(strDist("xyx", "z") == 0)
// console.log(strDist("z", "z") == 1)
// console.log(strDist("x", "z") == 0)
// console.log(strDist("", "z") == 0)
// console.log(strDist("hiHellohihihi", "hi") == 13)


// const factorial = (num) => {

//   if(num <= 1){
//     return 1
//   }

//   return factorial(num-1) * num// 5 4 3 2 1 
// }

// console.log(factorial(Math.abs(-6)))




// Happy case = ast - a*s*t (inserted stars)
// find the length of the stars and 

// const addStars = (word) => {

//     if (word.length < 2)
//       return word;
  
//     return word[0] + '*' + addStars(word.substring(1));
  

  // for(let i = 0; i<wordLen; i++){
  //   newVal += word.slice(i, i+1)
  //   if(wordLen - i !== 1){
  //     newVal += "*"
  //   }
  // }

  // return newVal
  


// console.log(addStars("hello") == "h*e*l*l*o")
// console.log(addStars("abc") == "a*b*c")
// console.log(addStars("ab") == "a*b")
// console.log(addStars("a") == "a")
// console.log(addStars("") == "")
// console.log(addStars("3.14") == "3*.*1*4")
// console.log(addStars("Chocolate") == "C*h*o*c*o*l*a*t*e")
// console.log(addStars("1234") == "1*2*3*4")




// 45 = 1200 in base 3
// 45 % 3 = 15 - remainder 0 
// 15 % 3 = 5 - remainder 0
// 5  % 3 = 1 - remainder 2
// 1 % 3 = 0 - remainder 1

//4 = 11 in base 3
// 4 % 3 = 1 - remainder 1 
// 1 % 3 = 0 - remainder 1


// The decimal system uses the digits 0-9, the binary system uses the digits 0 and 1, and the hexadecimal system uses the digits 0-9 and the letters A-F. The ternary system is a base-3 numeral system that uses the digits 0, 1, and 2. Given a number n.
// Given an integer, write a function that converts the number into its base-3 representation. Return the result as a string.
// Function Signature: 
// def convertToBase3(n: int) -> str:
// Target runtime and space complexity:
// Time: O(log n) to parse each digit in the number n
// Space: O(n) to create up to n stack frames\

// happy case 
// testcase - 45 = 1200 ; 4 = 11 ; 0 = 0 ; 
// In case of num is null return null
// In case of negative number make them positive and add a negative to the base 3 form

  // number % 3 => 45 % 3 = 0. --- 0
  // number / 3 => 45 / 3 = 15

  // number % 3 => 15 % 3 = 0 ---- 0
  // number / 3 => 15 / 3 = 5

  // number % 3 => 5 % 3 = 2 ----- 2
  // number / 3 => 5 / 3 = 1

  // number % 3 => 1 % 3 = 1 ---- 1
  // number / 3 => 1 / 3 = 0


// const convertToBase3 = (num) => {
//   if(num === null){
//     return null
//   }
  
  //if(!num) return null
  // 45 = 1200
//   let remainder = num % 3 // 45 = 0 ; 15 = 0 ; 5 = 2 ; 1 = 1 
//   let newVal = (num - remainder) / 3  // (45 - 0)/3 = 15 ; (15-0)/3 = 5; (5-2)/3 = 1 
  
//   if(Math.abs(num) > 0){
//     console.log("print num " + num)
//     return convertToBase3(newVal) * 10 + remainder
//   } else {
//     return 0 
//   }
// }



// 4
// remainder = 1 
// newval = 1

// convertToBase3(1) * 10 + 1

// remainder = 1
// newVal = 0 

// (convertToBase3(0) * 10 + 1) * 10 + 1


// (X + 3) +  = 

//   1,2,3,4

//   1 
//  * 10

//   + 2 

//   12 

//   * 10 

//   120 + 3

//   123


// function convertToBase3(number) {

//   function convert(number) {
//     const currNum = number % 3;
//     const restToProcess = (number - currNum) / 3;
//     return (restToProcess !== 0 ? convert(restToProcess) : '') + currNum.toString();
//   }

//   // special case to include the negative sign 
//   if (number < 0) {
//     return "-" + convert(Math.abs(number));
//   }
//   return convert(number);
// }

// 1 * 10 = 10 + 2 12 
// console.log(convertToBase3(null) === null)
// console.log(convertToBase3(0) === 0)
// console.log(convertToBase3(1) === 1)
// console.log(convertToBase3(2) === 2)
// console.log(convertToBase3(3) === 10)
// console.log(convertToBase3(-4) === -11)
// console.log(convertToBase3(-5) === -12)

// console.log(convertToBase3(10) === 101)
// console.log(convertToBase3(30) === 1010)
// console.log(convertToBase3(31) === 1011)
// console.log(convertToBase3(32) === 1012)
// console.log(convertToBase3(-33) === -1020)
// console.log(convertToBase3(92) === "10102")




// class ListNode {

//   constructor(value = 0, next = null) {

//       this.value = value

//       this.next = next

//   }

// }


// function convertToBase3(number) {

//   function convert(number) {
//     const currNum = number % 3;
//     const restToProcess = (number - currNum) / 3;
//     return (restToProcess !== 0 ? convert(restToProcess) : '') + currNum.toString();
//   }

//   // special case to include the negative sign 
//   if (number < 0) {
//     return "-" + convert(Math.abs(number));
//   }
//   return convert(number);
// }

// function arrayify(head) {

//   let ptr = head

//   var array = []

//   while (ptr != null) {

//       array.push(ptr.value)

//       ptr = ptr.next

//   }

//   return array

// }

// function count(head){
//   if(!head){
//     return 0
//   } 
  
//   return count(head.next) + 1

   // 2 - 3 - 4 
  
  // let count = 0
  // while(head){
  //   count += 1
  //   head = head.next
  // }

// }

// console.log(count(new ListNode(2, new ListNode(3, new ListNode(4)))))
// console.log(count(new ListNode(null, new ListNode())))
// console.log(count(null))

// function append(head, target) {

//   if(head === null){
//     return new ListNode(target)
//   }

//   // if(head.next){
//   //   append(head.next, target)
//   // } else {
//   //   head.next = new ListNode(target)
//   // }

//   let node = head

//   while(node.next){
//     node = node.next
//   }

//   node.next = new ListNode(target)

//   return head
// }



// Test Cases

// var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))

// console.log(arrayify(append(null, 1))) // [1]

// console.log(arrayify(append(LL1, 7))) // [1, 4, 5, 7]

// console.log(arrayify(append(new ListNode(), 7))) // [0, 7]





// class Node {
//     constructor(val, next=null) {
//       this.val = val
//       this.next = next
//     }
//   }


// // const secondToLast = (head) =>{
// //   if(!head){
// //     return null
// //   }

// //   // let curr = head
// //   console.log(head.next.next)

// //   while(head.next.next){
// //     head = head.next
// //     // curr = curr.next
// //   }
// //   return head.val
// //   // return curr.val

// // }

// function secondToLast(head){
//   if(!head){
//     return null
//   }

//   console.log((head.next.next == null))
//   while(head.next.next){
//     head = head.next
//   }
//   return head.val
// }


// let node = new Node(1, new Node(2, new Node(5)))
// let node1 = new Node()
// let node2 = new Node(2, new Node(1, new Node(5)))
// let node3 = new Node(0, new Node(2))


// console.table([
//   secondToLast(node),
//   secondToLast(node1),
//   secondToLast(node2),
//   secondToLast(node3)
// ])




// class Node {
//   constructor(val, next=null) {
//     this.val = val
//     this.next = next
//   }
// }

// function toString(head) {
//   if (!head)
//     return "<empty>"

//   let parts = []
//   while(head) {
//     parts.push(head.val)
//     head = head.next
//   }

//   return parts.join(" -> ")
// }

// function createLL(count, value){

//   let head = new Node()
//   let curr = head
//   for(let i=0; i<count; i++){
//     curr.next = new Node(value)
//     curr = curr.next
//   }
//   return head.next
// }


// console.table([
//   toString(createLL(0, 1000)) === "<empty>",
//   toString(createLL(1, 999)) === "999",
//   toString(createLL(2, 88)) === "88 -> 88",
//   toString(createLL(3, 4)) === "4 -> 4 -> 4",
//   toString(createLL(5, 3)) === "3 -> 3 -> 3 -> 3 -> 3",
//   toString(createLL(6, 6)) === "6 -> 6 -> 6 -> 6 -> 6 -> 6",
//   toString(createLL(2, -10)) === "-10 -> -10",
//   toString(createLL(3, 0)) === "0 -> 0 -> 0",
// ])

// createLL(5, 3)
// "3 -> 3 -> 3 -> 3 -> 3"

// createLL(6, 6)
// "6 -> 6 -> 6 -> 6 -> 6 -> 6"

// createLL(2, -10)
// "-10 -> -10"





// class Node{
//   constructor(val, next=null){
//     this.val = val
//     this.next = next
//   }
// }

// // let node = new Node(1, new Node(2, new Node(3, new Node(4))))

// // let head = new Node(1, new Node(3, new Node(3, new Node(2))))
// // let head = new Node()

// const createLLInReverse = (node) => {

//   if(!node.val){
//     return []
//   }

//   let arr = []
//   while(node){
//     arr.push(node.val)
//     node = node.next
//   }

//   return arr.reverse()
// }

// // console.log(createLLInReverse(head))

// // 1 -> 3 -> 5 -> 2
// let head = new Node(1, new Node(3, new Node(5, new Node(2))))
// console.log(JSON.stringify(createLLInReverse(head))
// === JSON.stringify([2,5,3,1])) // [ 2, 5, 3, 1 ]

// // 4 -> 9 -> 14
// head = new Node(4, new Node(9, new Node(14)))
// console.log(JSON.stringify(createLLInReverse(head))
// === JSON.stringify([14,9,4]))

// // 5 -> 10 -> 15 -> 20
// head = new Node(5, new Node(10, new Node(15, new Node(20))))
// console.log(JSON.stringify(createLLInReverse(head))
// === JSON.stringify([20,15,10,5]))

// // 5
// head = new Node(5)
// console.log(JSON.stringify(createLLInReverse(head))
// === JSON.stringify([5]))

// // 5 -> 10
// head = new Node(5, new Node(10))
// console.log(JSON.stringify(createLLInReverse(head))
// === JSON.stringify([10,5]))

// // 5 -> 5 -> 10 -> 10
// head = new Node(5, new Node(5, new Node(10, new Node(10))))
// console.log(JSON.stringify(createLLInReverse(head))
// === JSON.stringify([10,10,5,5]))

// // 5 -> 5 -> 5
// head = new Node(5, new Node(5, new Node(5)))
// console.log(JSON.stringify(createLLInReverse(head))
// === JSON.stringify([5,5,5]))


// function gcd(a, b) {
//   if (b === 0) {
//       return a;
//   }
//   console.log(a, b)
//   return gcd(b, a % b);
// }

// console.log(gcd(42,112))
// console.log(gcd(9,27))


// class Node {
//   constructor(val, next=null) {
//     this.val = val
//     this.next = next
//   }
// }

// function toString(head) {
//   if (!head)
//     return "<empty>"

//   let parts = []
//   while(head) {
//     parts.push(head.val)
//     head = head.next
//   }

//   console.log(parts)
//   return parts.join(" -> ")
// }

// function createPalindromeLL(array){

//   if(array.length === 0){
//     return null
//   }
//   let head = new Node(array[0])
//   let curr = head
//   // console.log("head -> " + head.val + "  Curr -> "+ curr)

//   // 1 2 3 4
//   for(let i=1; i<array.length; i++){
//     curr.next = new Node(array[i])
//     curr = curr.next
//   }

//   for(let i=array.length-2; i>=0; i--){
//     curr.next = new Node(array[i])
//     curr = curr.next
//   }
//   // console.log(curr.next)

//   return head

// }

// console.log(toString(createPalindromeLL([])) === "<empty>")

// console.log(toString(createPalindromeLL([99])) === "99")

// console.log(toString(createPalindromeLL([4,2]))
//   === "4 -> 2 -> 4")

// console.log(toString(createPalindromeLL([1,4,5]))
//   === "1 -> 4 -> 5 -> 4 -> 1")

// console.log(toString(createPalindromeLL([4,9,14]))
//   === "4 -> 9 -> 14 -> 9 -> 4")

// console.log(toString(createPalindromeLL([20,15,10,5]))
//   === "20 -> 15 -> 10 -> 5 -> 10 -> 15 -> 20")

// console.log(toString(createPalindromeLL([5,5,5,5]))
// === "5 -> 5 -> 5 -> 5 -> 5 -> 5 -> 5")

// console.log(toString(createPalindromeLL([1,2,3,2,1]))
// === "1 -> 2 -> 3 -> 2 -> 1 -> 2 -> 3 -> 2 -> 1")

// console.log(toString(createPalindromeLL([99])) === "99")

// console.log(toString(createPalindromeLL([])) == null)
// console.log(toString(createPalindromeLL([1,2,3,4])) === "1 -> 2 -> 3 -> 4 -> 3 -> 2 -> 1")

// console.log(toString(createPalindromeLL([1,4,5]))
  // === "1 -> 4 -> 5 -> 4 -> 1")







// function recursiveFactorial(x) {
//   if (x <= 1) return 1;
//   else return x * recursiveFactorial(x - 1);
// }

// function iterativeFactorial(x) {
//     if(!x || x === 0){
//     return 1
//   }
//   let fact = 1
//     for(let i=x; i>0; i--){
//       fact *= i
//     }
//   return fact
// }

// function iterativeMax(arr) {
//   let result = arr.length > 0 ? arr[0] : null;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > result) result = arr[i];
//   }

//   return result;
// }

// function recursiveMax(arr, curMax = null, i = 0) {
//   // TODO: implement
//   // curMax is an argument that defaults to null if not specified when calling recursiveMax()
//   // i is an argument that defaults to 0 if not specified when calling recursiveMax()
//   // return null if array is empty

//   if(i<arr.length){
//     console.log("array val is " + arr[i]+ i+ " and curMax is: " + curMax)
//     return recursiveMax(arr, Math.max(curMax, arr[i]), i+1)
//   }
//   return curMax
  
//   }



// console.table([
//   iterativeFactorial(0) === 1,
//   iterativeFactorial(1) === 1,
//   iterativeFactorial(3) === 6,
//   iterativeFactorial(4) === 24,
//   iterativeFactorial(10) === 3628800,

//   recursiveMax([4, 2, 7]) === 7,
//   recursiveMax([4, 2, 7, 8]) === 8,
//   recursiveMax([1, -5, 0]) === 1,
//   recursiveMax([1, 2, 7]) === 7,
//   recursiveMax([1, 0, -5]) === 1,
// ])




// const createPalindromeLL(array)


// const getAllSubsequences = (word) => {

//   if(word.length === 0){
//     return
//   }


//   return getAllSubsequences(word.substring(1))

// }

// console.log(getAllSubsequences("abc"))



// const atoi = (word) => {

//   let num;
//   if(word === 0){
//     return 0;
//   }

//   num += word % 10
//   return atoi(Math.floor(word/10))
//   return num.reverse()
  
// }

// console.log(atoi("123"))
// console.log(atoi("007"))
// console.log(atoi("-1"))

// def count8(n: int) -> int:
// if n == 0:
//   return 0

// if n % 100 == 88:
//   return 2 + count8(n // 10)

// if n % 10 == 8:
//   return 1 + count8(n // 10)

// return count8(n // 10)

// const count8 = (number) => {
//   // console.log(number)
//   if(number === 0 || !number){
//     return 0
//   } 
//   if(number % 100 === 88) {
//     return 2 + count8(Math.floor(number/10))
//   }
//   if(number % 10 === 8){
//     return 1 + count8(Math.floor(number/10))
//   }
//   return count8(Math.floor(number/10))
// }

// recurse through the number 
// modul0 by 10 and check right most equals 8 
    // - yes - add 1
    // - no - skip
       // divide by 10
// base case - if number is 0 return count

// console.log(count8(818)) // 2
// console.log(count8(8188)) // 4
// console.log(count8(8818)) // 4
// console.log(count8(2222)) // 0
// console.log(count8()) // 0
// console.log(count8(0)) // 0


// const strCount = (word, sub) => {
  // console.log(word + " -- " + sub)
  // console.log(word.substring(sub.length))
  // console.log(word.substring(0, sub.length))

//   if(word.length < sub.length || sub.length === 0) {
//     return 0
//   }

//   if(word.substring(0, sub.length) === sub){
//     console.log(word + " ---- " + sub)
//     return 1 + strCount(word.substring(sub.length), sub)
//   }
//   return strCount(word.substring(1), sub)

// }

// console.log(strCount("catcowcat", "cat"))// == 2)
// console.log(strCount("catcowcat", "cow"))// == 1)
// console.log(strCount("catcowcat", "dog"))// == 0)
// console.log(strCount("", "") == 0)
// console.log(strCount("cat", "") == 0)
// console.log(strCount("iiii", "ii") == 2)




// console.log(limitedServings(['Joe', 'Bart', 'Larry', 'Joe', 'Carl', 'Doug', 'Joe'], 2))
// console.log(limitedServings(['Bart', 'Bart', 'Larry', 'Larry', 'Larry', 'Doug', 'Doug'], 2))
// console.log(limitedServings([], 3))
// console.log(limitedServings(['Joe', 'Joe'], 3))
// console.log(limitedServings(['Joe', 'Joe'], 0))

// console.log(limitedServings([10, 8, 15, 12, 6, 20, 1]))



// function limitedServings(array, limit)



// function puzzleArrangements(pieces, targetSize){
  
//   for(let i=0; i<pieces.length; i++){

//     if(pieces[i] === targetSize){

//     }
//   }
// }



// console.log(rankCount([2, 1]))
// console.log(rankCount([3, 4, 1]))
// console.log(rankCount([10, 8, 15, 12, 6, 20, 1]))

// function rankCount(piles){
//   let tempArr = piles.map((x) => x);
//   tempArr.sort((function(a,b){return a-b}))
//   let returnArr = []
//   let map = new Map()
//   for(let i=0; i<tempArr.length; i++){
//     map.set(tempArr[i], i+1)
//   }
//   for(let i=0; i<piles.length; i++){
//     if(map.has(piles[i])){
//       returnArr.push(map.get(piles[i]))
//     }
//   }
//   console.log(piles)
//   return returnArr
// }




// let arr = [1,2,2,3,3]
// let word = "asdasd"
// console.log(word.split('').reverse().join(''))
// function firstKTimes(array, k) {
//   if(array.length === 0){
//     return -1
//   }
//   let map = new Map()
//   for(let i=0 ; i<array.length; i++){
//     if(!map.has(array[i])){
//       map.set(array[i], 1)
//     } else {
//       map.set(array[i], map.get(array[i]) + 1)
//     }
//     if(map.get(array[i]) === k){
//       return array[i]
//     }
//   }
//   return -1
// }

// // Test Cases
// console.log(firstKTimes([1, 2, 2, 3, 3], 2)) // 2
// console.log(firstKTimes([1, 2, 2, 2, 2, 3, 3, 3, 3], 4)) // -1
// console.log(firstKTimes([], 1)) // -1



// console.log(minimumAbsDifference(arr))
// edge cases : empty array | one element  - No atleast one pair
// loop through the input array
// check the difference between current element and last element 
// save the least difference and keep saving subsequent pairs that have the same diff

// function minimumAbsDifference(arr){
//   let diff = 100000;
//   let pairs = [];
//   arr.sort((function(a,b){return a-b}))

//   for(let i=0;i < arr.length; i++){
//     let currDiff = Math.abs(arr[i] - arr[i+1])
//     if(currDiff < diff){
//         diff = currDiff
//         pairs.push([arr[i], arr[i+1]])
//       } else if(currDiff === diff){
//         pairs.push([arr[i], arr[i+1]])
//       } 
//   }
//   console.log(diff)
//   console.log(pairs)
  
  // for(let i=0; i<arr.length-1; i++){
  //   if(Math.abs(arr[i] - arr[i+1]) < diff){
  //     diff = Math.abs(arr[i] - arr[i+1])
  //   }
  //   console.log(diff)
  // }




// let arr = [1,2,3,4,5]

// // 2 -> [3,4,5,1,2]
// console.log(rotate(arr, 3))

// function rotate(array, k){
//   const slicedPortion = []
//   let numsDeleted = 0;
//   while(numsDeleted < k){
//     slicedPortion.push(array[0]);
//     array.splice(0, 1);
//     numsDeleted++;
//   }
//   return array.concat(slicedPortion)
// }



// function rotateLeft(nums, k) {
//   k = k % nums.length;
//   nums.reverse();
//   reverseSubarray(nums, 0, nums.length - k);
//   reverseSubarray(nums, nums.length - k, nums.length);
//   return nums;
// }

// function reverseSubarray(nums, start, end) {
//   const mid = Math.floor((end - start) / 2);
//   for (let i = 0; i < mid; i++) {
//       const a = start + i;
//       const b = end - 1 - i;
//       const temp = nums[a];
//       nums[a] = nums[b];
//       nums[b] = temp;
//   }
// }



// '''
// /*
// PROBLEMS:
// 1) Given an integer array and an integer, find whether the integer exists in the array. Return a boolean.
// 2) Given an integer array and an integer, return how many times the integer exists in the array. -
// 3) Find mean of an integer array
// 4) Replace all negative values with a 0
// 5) Reverse the values in an array 

// [1 2 3 4]
// [4] + reverse([1, 2, 3])
// [4]+[3]+reverse([1,2])
// .
// .
// .
// */


/*
2) Given an array and an integer, return how many times the integer exists in the array.
[] 1, 0

arr = [], num = 3
return 0

arr = [-3,-2,-2], num = -2, return 2
arr = [1,2,3], num = 1, return 1
arr = [0], num = 0, return 1
arr = [-3,-2,-2], num = 999, return 0

base case:
  - empty array will return 0
   
recursive case:
  - if the len(array) == 1 array[0] == integer then add 1 to the count and recall the function with a smaller array with one fewer elements
  - if the array[0] isn't equal to the integer, return 0 and recall the function with a smaller array with one fewer elements

*/



/*
 * To execute Java, please define "static void main" on a class
 * named Solution.
 *
 * If you need more classes, simply define them inline.
 */


// [] = []
// [0] = one element = return [1]
// [1,2,3] = [3, 2, 1]
// [4,3,8,1] = [1, 8, 3, 4]


// start from the last index pop and push it to a different array

// base case = if len of arr is 0 return ""
// if len is 1 return element
// newArr 
// recursive = reverse arr.pop()
// return reverse(arr.pop)
// return newArr
// [1, 2, 4, 5]
// pop 
// push newArr
// [1, 2, 4]
// 

/*

APPROACH 2:
- two pointer but recursively

 -base case 
if index > half the length  i > j
return array

recursive (array, index +1)





APPROACH 3:
base case: len is 0, then  return []
recursive case: 
  return [last element] + reverse(remaining array without the last element)
*/

// function reverse(arr) {
//   if (arr.length == 0) {
//     return [];
//   }
//   return reverse(arr.slice(1)) + [arr[0]];
// }

// console.log(reverse([1,2,3,4]));


// # def replaceZero(arr,index=0):
// #     if index == len(arr):
// #         return

// #     if arr[index] < 0:
// #         arr[index] = 0

// #     replaceZero(arr,index + 1)        


// '''


// # mean = sum of every element / number of elements

//  [1, 2, 3, 4] = 10/4 =2.5
//  [] = 0
//  [element] = element
//  [-1, 0, -2] = -3/3 = -1


// Base Case:
//     if array size is 0: return 0
// Recuersive Case:
//     - work on array with one fewer element (lets say get rid of first elm)


// APPROACH 1: Iterative (Rec)
// APPROACH 2: Compute Sum and divide by length
// APPROACH 3: 

// mean([x0, x1, x2, ..., xN-1]) = (x0 + x1 + ... + xN-1) / N
// mean(arr) = (x0 + (N - 1) * mean(arr[1:])) / N



// mean([x1, x2, ..., xN-1]) = (x1 + ... + xN-1) /  (N - 1)
// (N - 1) * mean([x1, x2, ..., xN-1]) = x1 + ... + xN-1
//  '''

// def mean(arr):
//     if len(arr) == 0:
//         return 0
//     n = len(arr)
//     return (arr[0] + (n - 1) * mean(arr[1:])) / n


// print(mean([1,2,3]))
// print(mean([]))
// print(mean([0, 0, 0, 0]))
// print(mean([-1, 0, -1, -6]))

