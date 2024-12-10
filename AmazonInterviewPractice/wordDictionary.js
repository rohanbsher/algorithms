// Design a data structure that supports adding new words and finding if a string matches any previously added string.

// Implement the WordDictionary class:

// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise.word may contain dots '.' where dots can be matched with any letter.

//   Example:

// Input
// ["WordDictionary", "addWord", "addWord", "addWord", "search", "search", "search", "search"]
// [[], ["bad"], ["dad"], ["mad"], ["pad"], ["bad"], [".ad"], ["b.."]]
// Output
// [null, null, null, null, false, true, true, true]

// Explanation
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True

/*
[] 
Trie tree to represent

log n 

so each node represent a chracter of the string

sand
sad 
sandy 
guard


TreeNode
  value 
  left
  right


TrieNode 

  boolean isEndOfWord
  child

        s
        |
        a
      /   \  
     n     d (end of one word)
     |
     d (end of one word)
     |
     y (end of one word)
      
*/

class TrieNode {
	constructor() {
	  this.children = {} // stores children
	  this.isEndOfWord = false;
	}
  
  }
  
  class WordDictionary {
  
	constructor() {
	  this.root = new TrieNode()
	}
  
	addWord(word) {
	  let node = this.root;
  
	  // build out from the word
	  for (let char of word) {
		if (!node.children[char]) {
		  node.children[char] = new TrieNode();
		}
		node = node.children[char];
	  }
	  node.isEndOfWord = true; 
	}
  
  
	search(word) {
	  this.searchIndex(word, 0, this.root)
	}
  
	searchIndex(word, index, node) {
	  if (word.length === index) {
		return node.isEndOfWord;
	  }
  
	  let char = word[index];
  
	  // incase . is at the front
	  if (char = '.') {
		for (let key in node.children) {
		  if (this.searchIndex(word, index + 1, node.children[key])) {
			return true;
		  }
		}
		return false;
	  } else {
		if (!node.children[char]) {
		  return false;
		}
		return this.searchIndex(word, index + 1, node.children[char]);
	  }
	}
  }
  
  const wordDictionary = new WordDictionary();
  wordDictionary.addWord("bad")
  wordDictionary.addWord("dad")
  wordDictionary.addWord("sad")
  wordDictionary.addWord("mad")
  
  console.log(wordDictionary.search("pad"));
  console.log(wordDictionary.search("bad")); // true
  
  
  /*
  class TrieNode:
	  def __init__(self):
		  self.children = {}
		  self.is_word = False
		  
  class WordDictionary:
	  def __init__(self):
		  self.root = TrieNode()      
  
	  def addWord(self, word):
		  current_node = self.root
		  for character in word:
			  current_node = current_node.children.setdefault(character, TrieNode())
		  current_node.is_word = True
		  
	  def search(self, word):
		  def dfs(node, index):
			  if index == len(word):
				  return node.is_word
				 
			  if word[index] == ".":
				  for child in node.children.values():
					  if dfs(child, index+1):
						  return True
					  
			  if word[index] in node.children:
				  return dfs(node.children[word[index]], index+1)
			  
			  return False
	  
		  return dfs(self.root, 0)
  
		  */