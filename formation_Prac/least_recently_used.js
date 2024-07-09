/*
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

 

Example 1:

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4

class LRUCache(object):

    def __init__(self, capacity):
        """
        :type capacity: int
        """
        

    def get(self, key): // O(1)
        """
        :type key: int
        :rtype: int
        """
        

    def put(self, key, value):
        """
        :type key: int
        :type value: int
        :rtype: None
        """

always greater than 1. accurate input

we are using a hash map to get the values in the cache

to insert the values in the cache 

assume we only unique keys


*/

class ListNode {
	constructor(key=0, value=0) {
	  this.key = key;
	  this.value = value;
	  this.next = null;
	  this.prev = null;
	}
  }
  
  
  class LRUCache {
  
	constructor(capacity) {
	  this.capacity = capacity;
	  this.cache = new Map();
	  // linked list : maintatin a linked list
	  this.head = new ListNode()
	  this.tail = new ListNode()
	  this.head.next = this.tail // h ->  <- t
	  this.tail.prev = this.head
	}
  
	get(key) {
	  if (!this.cache.has(key)) {
		return -1 // in case wrong key is passed
	  }
  
	  const node = this.cache.get(key)
	  this._remove(node)
	  this._add(node)
	  return node.value
	}
  
	put(key, value) {
	  if (this.cache.has(key)) {
		this._remove(this.cache.get(key))
	  }
  
	  const newNode = new ListNode(key, value)
	  this._add(newNode)
	  this.cache.set(key, newNode)
  
	  if (this.cache.size > this.capacity) {
		const prevNode = this.tail.prev
		this._remove(prevNode)
		this.cache.delete(prevNode.key)
	  }
	}
  
	_remove(node) {
	  node.prev.next = node.next
	  node.next.prev = node.prev
	}
  
	_add(node) {
	  node.next = this.head.next
	  node.prev = this.head
	  this.head.next.prev = node
	  this.head.next = node;
	}
  
  }
  
  const lRUCache = new LRUCache(2);
  lRUCache.put(1, 1); // cache is {1=1}
  lRUCache.put(2, 2); // cache is {1=1, 2=2}
  console.log(lRUCache.get(1));    // return 1
  lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
  console.log(lRUCache.get(2));    // returns -1 (not found)
  lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
  console.log(lRUCache.get(1));    // return -1 (not found)
  console.log(lRUCache.get(3));    // return 3
  console.log(lRUCache.get(4));    // return 4