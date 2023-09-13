import { Graph } from './Graph';

class Driver {
  static main() {
    // Create a new graph
    const graph = new Graph();

    // Add vertices
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');

    // Add edges
    graph.addEdge('A', 'B', true);
    graph.addEdge('B', 'C', true);
    graph.addEdge('C', 'D', true);
    graph.addEdge('D', 'A', true);

    // Print the graph
    console.log('Graph:');
    graph.print();

    // Get neighbors of a vertex
    const neighborsOfA = graph.getNeighbors('A');
    if (neighborsOfA) {
      console.log('Neighbors of A:', Array.from(neighborsOfA));
    } else {
      console.log('Vertex A does not exist in the graph.');
    }
  }
}

// Call the main method to run the example
Driver.main();
