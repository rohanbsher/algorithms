
'''

Given a Binary Tree (BT), convert it to a Doubly Linked List (DLL) in place. The left and right pointers in nodes are to be used as previous and next pointers, respectively, in the converted DLL. The order of nodes in DLL must be the same as the in-order traversal of the given Binary Tree. The first node of the in-order traversal (leftmost node in BT) must be the head node of the DLL.

As an example, the tree:
   2
  ↙ ↘
 1   3

starts out with the left and right pointers in the root node set, but the left and right pointers of both children are null since they are the leaf nodes. We're going to re-thread this by updating the pointers so that the nodes are now shaped like a doubly linked list:
null ← 1 ↔ 2 ↔ 3 → null

Now, only the left pointer of the 1 node is null, and the right pointer points to node 2. The right pointer of the 3 node is also still null, but its _left_ pointer points to node 2. The head of the list that should be returned is a pointer to the 1 node.

Note, that the examples here are all binary search trees because the in-order traversal will result in a sorted output list. This makes constructing and checking the code easy, but nothing in this solution should depend on the input being a BST.
 

EXAMPLE(S)
    3
  ↙  ↘
1      5
 ↘    ↙
  2  4

bt2dll(t) = "1 <-> 2 <-> 3 <-> 4 <-> 5"
 

FUNCTION SIGNATURE
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function bt2dll(root) {

class Node:
    def __init__(self, value = 0, left = None, right = None):
        self.left = left
        self.right = right
        self.value = value

def bt2dll(root: Node, next: Node = None) -> Node:


In Order DFS(t_node, left_node, right):
    if not node and not prev_node:
        return None
    else if we are on a Null Node and we have a prev_node:
        return prev_node

    prev_node = DFS(node.left, prev_node)

    visit current node
        Create current Node with left, right pointers
        set prev_node right pointer to current node if prev_node exists

    prev_node = DFS(node.right, curr_node)

    return prev_node

    6
   /
  2
   \ 
    4
   / 
  3 => 2 | 3 | 4 | 6

  DLL None -><- 2 -><- 3 -><- 4 -><- 6 -> None 
  Curr_node 6
  Prev_node 4


  
    





convert(root): = convert(root.left) ↔ root ↔ convert(root.right)
and
convert(root.left) = convert(root.left.left) ↔ root.left ↔ convert(root.left.right)
and so on.

function bt2dll(root, prev = null) {
    if (!root) {
        return null;
    }

    if (root.left) {
        prev = bt2dll(root.left, prev);
    }

    root.left = prev;
    if (prev) {
        prev.right = root;
    }

    if (root.right) {
        root = bt2dll(root.right, root);
    }

    return root;
}


// helper function and main rolled into one with a default parameter.
function bt2dll(root, listTail = null) {
  if (!root) return listTail;

  if (root.right) {
    listTail = bt2dll(root.right, listTail);
  }

  let listHead = root;
  listHead.right = listTail;
  if (listTail) {
    listTail.left = listHead;
  }

  if (root.left) {
    listHead = bt2dll(root.left, listHead);
  }

  return listHead;
}
*/
🔎 EXPLORE
What are some other insightful & revealing test cases?
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def convertBTtoDLL(node: Node) -> Node:
    def inorder_traversal(curr_node, prev_node=None):
        if not curr_node and not prev_node:
            return None
        elif not curr_node and prev_node:
            return prev_node
        prev_node = inorder_traversal(node.left, prev_node)

        if prev_node:
            prev_node.right = curr_node
        curr_node.left = prev_node

        if node.right:
            curr_node = inorder_traversal(node.right, curr_node)

        return curr_node
    tail = inorder_traversal(node)

    tail.right = None
    while tail and tail.left:
        tail = tail.left
    
    return tail


def printDLL(node):
    while node:
        print(node.val, end=" <-> ")
        node = node.right
    print('None')
test_cases = [
    (Node(3, Node(1, None, Node(2)), Node(5, Node(4))))
]
'''
    3
  ↙  ↘
1      5
 ↘    ↙
  2  4
'''
node1 = Node(1)
node2 = Node(2)
node3 = Node(3)
node4 = Node(4)
node5 = Node(5)

node3.left = node1
node3.right = node5
node1.right = node2
node5.left = node4

root = node3

printDLL(convertBTtoDLL(root))

