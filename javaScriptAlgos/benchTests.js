// query strings
// www.google.com/search?
// q=what+im+searching+for&language=en        urlencoding     

// key-value pairs
// a=1&b=2
//  v
// decode
//   v
// {"a": "1", "b": "2"}
//    v
//   encode
//    v
// a=1&b=2


// step 1: decoding (parsing)
// input: string
// output: hashmap<string,string>


// step 4: 
// ?cat=indian&cat=goodforlunch&cat=cheap&loc=sf

// option 1 (unique id for keys):
// {'cat1': 'indian', 'cat2': 'goodforlunch', 'cat3': 'cheap', 'loc': 'sf'}
// downside: hard to query from the calling code

// option 2 (array of arrays (tuples))
// [['cat', 'indian'], ['cat', 'goodforlunch'], ['cat', 'cheap'], ['loc', 'sf']]
// downside: hard to query because you would have to iterate the whole list

// option 3 (multidict)
// {cat: ['a', 'b', 'c],
//  dog: ['a']}// downside: makes the whole thing more complicated because single values turn into lists
// function decode4(s) {
//   const decoded = {}
//   if (s.length === 0) return decoded;

//   if (s[0] === '?') {
//     s = s.substr(1, s.length);
//   }
//   // in urlencoding, spaces are encoded to plus
//   s = s.replaceAll('+', ' ');
//   const strArr = s.split('&').forEach((s) => {
//     let [key, value] = s.split('=');
//     value = value || true;
// //handles multiple key-value pairs with same key
//     if (decoded[key] !== undefined) {
//       decoded[key].push(value);
//     } else {
//       decoded[key] = [value];
//     }
//   })
//   return decoded;
// }

// console.log('-----------------decode 4---------------------');
// console.log(decode4('?foo=hello&baz'))
// console.log(decode4('foo=hello&baz'))
// console.log(decode4('q=what+im+searching+for&language=en'))
// console.log(decode4('foo='))
// console.log(decode4('?cat=indian&cat=goodforlunch&cat=cheap&loc=sf'))

/*
'''
❓ PROMPT
You're exhausted after a long day and heading to bed, but you still have to set the alarm clock on your phone. You already have one you set the day before, so all you have to do is update it.

To set your alarm, the hours and minutes are set independently, each by scrolling upwards or downwards. One shift changes an hour or minute value by one, up or down. The values are organized cyclically, which means that dragging 0 minutes downwards turns it into 59, and dragging 59 upwards turns it into 0 (similarly, 0 hours can become 23 in one shift and vice versa).

Given the time of the previous alarm and the new desired time, what is the minimum number of scroll moves to set the new time?

Example(s)
For setTime = "07:30" and timeToSet = "08:00", the output should be
minScrollToSet(oldTime, newTime) = 31.

Shifting hours upwards once will change the alarm to "08:30", and shifting minutes 30 times downwards will change it to "08:00".

minScrollToSet("7:30", "8:00") === 31
minScrollToSet("7:00", "6:31") === 30
minScrollToSet("7:00", "6:25") === 26
```
🔎 EXPLORE
List your assumptions & discoveries:

Minutes : 0 - 59
Hours : 0 - 23

Cyclical values

Insightful & revealing test cases:

1:30 - 11:30 - 10

0:00 - 5:00 - 5

6:59 - 7:00 - 2

🧠 BRAINSTORM
What approaches could work?

subtract new time from old time and take the absolute value of the diff

have a case for 59 to 00 in one swap or viceversa

if(old time > 30)

which is best way to represent a data model that is cyclic ? 


Algorithm 1:
Time: O()
Space: O()
📆 PLAN
Outline of algorithm #:
🛠️ IMPLEMENT
function minScrollToSet(oldTime, newTime)
🧪 VERIFY
Run tests. Methodically debug & analyze issues.
'''
*/



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

*/
class Node{
	constructor(val, next=null){
	  this.val = val
	  this.next = next
	}
  }
  
  // curr.next = null <- 1 
  
  // 1 - 2 - 3 - 4
  // p    c 
  
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
	  process.s(list.val)
	  list = list.next
	}
  }
  
  printlist(list)
  console.log('new List')
  printlist(reverseKGroup(list, 2))
  
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
  