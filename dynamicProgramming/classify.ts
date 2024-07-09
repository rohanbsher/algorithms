
//SOL
function classify(adjList) {
	// The initial set of potential roots is all of the nodes
	// that have children, so the keys of the adjacency lists object.
	const potentialRoots = new Set(Object.keys(adjList).map(k => Number(k)));
  
	// Special case: if the graph is empty, then it can be any
	// type so make it the most restrictive.
	if (potentialRoots.size === 0) return "BINARY TREE";
  
	let maxChildren = 0;
	let maxParents = 0;
	const parentCounts = {};
  
	// Cull out potential roots that appear in child lists.
	// Also count the number of parents a child has.
	for (const node of Object.keys(adjList)) {
	  maxChildren = Math.max(maxChildren, adjList[node].length);
	  for (const child of adjList[node]) {
		// This node has a parent so it's not a root.
		potentialRoots.delete(child);
  
		// Add this to the parent count for this child node.
		if (parentCounts[child] === undefined) {
		  parentCounts[child] = 0;
		}
		parentCounts[child]++;
		maxParents = Math.max(maxParents, parentCounts[child]);
	  }
	}
  
	// If any node has more than one parent, it's a graph.
	if (maxParents > 1) return "GRAPH";
  
	// If there is any number of potential roots OTHER than 1,
	// it's a graph.
	if (potentialRoots.size !== 1) return "GRAPH";
  
	// Helper function to detect cycles vs DFS
	function hasCycle(root) {
	  const visited = new Set();
	  const queue = [root];
	  let position = 0;
  
	  while (position < queue.length) {
		const node = queue[position++];
		visited.add(node);
		if (adjList[node] === undefined) continue;
		for (const child of adjList[node]) {
		  if (visited.has(child)) {
			return true;
		  }
		  queue.push(child);
		}
  
	  }
	  return false;
	}
  
	// We know we have one root. Is there a cycle from this point?
	const [singleRoot] = potentialRoots;
	if (hasCycle(singleRoot)) return "GRAPH";
  
	// After eliminating other possibilities, it's a tree or binary tree
	// based on the max number of children.
	return maxChildren > 2 ? "TREE" : "BINARY TREE";
  }