export class Graph {
	private adjacencyList: Map<string, Set<string>>;

	constructor() {
		this.adjacencyList = new Map();
	}

	addVertex(vertex: string): void {
		if (!this.adjacencyList.has(vertex)) {
			this.adjacencyList.set(vertex, new Set());
		}
	}

	addEdge(fromVertex: string, toVertex: string, undirected: Boolean): void {
		if (!this.adjacencyList.has(fromVertex) || !this.adjacencyList.has(toVertex)) {
			console.log("nothig here");
			return;
		}
		this.adjacencyList.get(fromVertex)!.add(toVertex);
		if (undirected) {
			this.adjacencyList.get(toVertex)!.add(fromVertex);
		}
	}

	getNeighbors(vertex: string): Set<string> | undefined {
		return this.adjacencyList.get(vertex);
	}

	print(): void {
		for (const [vertex, neighbors] of this.adjacencyList.entries()) {
			console.log(`${vertex} -> ${Array.from(neighbors).join('')} `);
		}
	}

	dfs()

}
