class Graph{
	constructor(val, node=null, vertices=[]){
		this.val = val,
		this.node = node,
		this.vertices = []
	}


}
const airports = ["JFK", "LHR", "CDG", "PEK", "ORD"];
const airportConnections = [
  { from: "JFK", to: "LHR" },
  { from: "JFK", to: "CDG" },
  { from: "LHR", to: "CDG" },
  { from: "LHR", to: "PEK" },
  { from: "PEK", to: "ORD" }
];

// const airports = [
// 	"JFK",
// 	"LHR",
// 	"CDG",
// 	"PEK",
// 	"ORD",
// 	"DXB",
// 	"AMS",
// 	"SFO",
// 	"SIN",
// 	"ICN",
// 	"MUC",
// 	"LAX",
// 	"BKK",
// 	"SYD",
// 	"IST"
//   ];

//   const airportConnections = [
// 	{ from: "JFK", to: "LHR" },
// 	{ from: "JFK", to: "CDG" },
// 	{ from: "LHR", to: "CDG" },
// 	{ from: "LHR", to: "SFO" },
// 	{ from: "CDG", to: "SIN" },
// 	{ from: "CDG", to: "BKK" },
// 	{ from: "PEK", to: "DXB" },
// 	{ from: "PEK", to: "ICN" },
// 	{ from: "DXB", to: "SIN" },
// 	{ from: "DXB", to: "SYD" },
// 	{ from: "SFO", to: "LAX" },
// 	{ from: "SFO", to: "ORD" },
// 	{ from: "LAX", to: "SIN" },
// 	{ from: "LAX", to: "SYD" },
// 	{ from: "SIN", to: "IST" },
// 	{ from: "IST", to: "AMS" },
// 	{ from: "AMS", to: "MUC" }
// 	// Add more connections as needed
//   ];

function createAdjList(vertices, edges, isUndirected){
	/*
		loop over the vertices and add them to the adjList
		add the edges to create connections 
	*/
	let adjList = new Map()
	
	vertices.forEach(element => {
		adjList.set(element, [])
	});

	edges.forEach(airport => {
		adjList.get(airport.from).push(airport.to)
		if(isUndirected){
			adjList.get(airport.to).push(airport.from)
		}
	})

	return adjList
}

let adjList = createAdjList(airports, airportConnections, true)

function dfs(root, adjList){
	let visitedNodes = new Set()

	function dfsHelper(curr_node){
		visitedNodes.add(curr_node)
		let neighbors = adjList.get(curr_node)

		//base case
		if(neighbors.length === 0){
			console.log('print')
			return
		}

		for(let neighbor of neighbors){
			if(visitedNodes.has(neighbor)){
				continue
			}
			dfsHelper(neighbor)
		}
	}
	dfsHelper(root)
	console.log(visitedNodes)
}  

dfs("JFK", adjList)

  
  