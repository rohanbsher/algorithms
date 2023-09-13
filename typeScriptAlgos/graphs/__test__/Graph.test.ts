import { Graph } from '../Graph';
import { describe, expect, it, beforeEach } from '@jest/globals';

describe('Graph', () => {
	let graph: Graph;

	beforeEach(() => {
		graph = new Graph();
	});

	it('should add vertices', () => {
		graph.addVertex('A');
		graph.addVertex('B');

		expect(graph.getNeighbors('A')).toEqual(new Set());
		expect(graph.getNeighbors('B')).toEqual(new Set());
	});

	it('should add edges', () => {
		graph.addVertex('A');
		graph.addVertex('B');
		graph.addEdge('A', 'B', true);

		expect(graph.getNeighbors('A')).toEqual(new Set(['B']));
		expect(graph.getNeighbors('B')).toEqual(new Set(['A']));
	});

	it('should not add edges if vertices do not exist', () => {
		graph.addEdge('A', 'B', true);

		expect(graph.getNeighbors('A')).toBeUndefined();
		expect(graph.getNeighbors('B')).toBeUndefined();
	});

	// it('should print the graph', () => {
	// 	graph.addVertex('A');
	// 	graph.addVertex('B');
	// 	graph.addEdge('A', 'B', true);

	// 	const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });

	// 	graph.print();

	// 	expect(consoleSpy).toHaveBeenCalledWith('A -> B ');
	// 	expect(consoleSpy).toHaveBeenCalledWith('B -> A ');

	// 	consoleSpy.mockRestore();
	// });
});
