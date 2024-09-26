// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
//  sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

//   Example 1:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot", "dot", "dog", "lot", "log", "cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.

// Example 2:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot", "dot", "dog", "lot", "log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.


/*

the end word if not present will result in a 0

if end word and the begin word are exact same then 0 or 1

wordList is empty return 0

each word is one letter different from its adjacent words

if we represent lets say a node in the graph 

    cog 
     /
  log

  there is only one letter difference 

there will be an edge from one node to another representing an adjacent word

assume no duplicates

using BFS approach 
  - have a visited set to track all the visited nodes
  - use a queue to keep a track of tranformation seq

N being the number of words
M being the length of the word
O(N*M*M) = O(N*M^2)

*/

function tranformation(beginWord, endWord, wordList) {

	const wordSet = new Set(wordList)
	if (!wordSet.has(endWord)) return 0;
  
	let queue = [[beginWord, 1]] // store the word and keep a length of the tranformation sequence
  
	const visitedSet = new Set();
	visitedSet.add(beginWord);
  
	while (queue.length > 0) {
	  let [currentWord, length] = queue.shift()
  
	  if (currentWord === endWord) {
		return length;
	  }
  
	  // find all the one letter transformations
	  for (let i = 0; i < currentWord.length; i++) {
		for (let c = 97; c <= 122; c++) { // // represent the diffs in the word
		  let newWord = currentWord.slice(0, i) + String.fromCharCode(c) + currentWord.slice(i + 1)
  
		  if (wordSet.has(newWord) && !visitedSet.has(newWord)) {
			queue.push([newWord, length + 1])
			visitedSet.add(newWord)
		   }
		}
	  }
	  // hit hot -> h*t  
	}
	return 0;
  }
  
  const beginWord = "hit", endWord = "cog", wordList = ["hot", "dot", "dog", "lot", "log", "cog"]
  
  const beginWord1 = "hit", endWord1 = "rog", wordList1 = ["hot", "dot", "dog", "lot", "log", "cog"]
  
  const beginWord2 = "hot", endWord2 = "lot", wordList2 = ["dot", "dog", "lot", "log", "cog"]
  
  console.log(tranformation(beginWord, endWord, wordList)) // 5
  console.log(tranformation(beginWord1, endWord1, wordList1)) // 0
  console.log(tranformation(beginWord2, endWord2, wordList2)) // 2
  
  
  
  https://neetcode.io/practice
  
  https://leetcode.com/problems/word-ladder/description/
  
  
  
  /*
  def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
		  if endWord not in wordList:
			  return 0
		  
		  #create adjacency list
		  adj = defaultdict(list)
		  for i in range(len(wordList)):
			  for j in range(len(beginWord)):
				  word = wordList[i]
				  adj_key = word[:j] + '*' + word[j+1:]
				  adj[adj_key].append(word) 
		  
		  q = deque([beginWord])
		  count = 1
		  visit = set()
		  
		  while q:
			  for i in range(len(q)):
				  word = q.popleft()
				  if word == endWord:
					  return count
				  for x in range(len(word)):
					  adj_word = word[:x] + '*' + word[x+1:]
					  if adj_word in adj:
						  for nei in adj[adj_word]:
							  if nei not in visit:
								  q.append(nei)
								  visit.add(nei)
			  count += 1
			  
		  return 0

		  */