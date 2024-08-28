/*
there are no self edges 

coloring system


for node 0 we have the graph : [[1,2,3],[0,2],[0,1,3],[0,2]]

0 -> [1,2,3] we have to color so that the adj nodes are all 1 

initialize a color array with -1 indicating that this node has not been colored

do a bfs from every uncolored node

at any point if the adjacent node has the same color as its neighbor its not a bipartite

 */
var isBipartite = function(graph) {

    const color = Array(graph.length).fill(-1); // uncolored

    const bfs = (start) => {

        const queue = [start]
        color[start] = 0

        while(queue.length > 0) {
            const node = queue.shift()

            for(neighbor of graph[node]) {
                if(color[neighbor] === -1) {
                    //color this opposite
                    color[neighbor] = 1 - color[node]
                    queue.push(neighbor)
                } else if (color[neighbor] === color[node]) {
                    // two nodes of adjacent color
                    return false;
                }
            }
        }

        return true;
    }


    for(let i=0; i<graph.length; i++) {
        if(color[i] === -1) { // if the node is uncolored do bfs
            if(!bfs(i)) {
                return false;
            }
        }
    }

    return true;

};