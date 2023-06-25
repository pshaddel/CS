// BEGIN: 6d4b5f5d8c2a
import { breadthFirstSearch, shortestPath } from './breadthFirstSearch';

describe('breadthFirstSearch', () => {
  const graph = {
    a: ['b', 'c'],
    b: ['f'],
    c: ['d', 'e'],
    d: ['f'],
    e: ['f'],
    f: ['g'],
    g: [],
  };

  it('should return true if the node exists in the graph', () => {
    expect(breadthFirstSearch(graph, 'a')).toBe(true);
    expect(breadthFirstSearch(graph, 'b')).toBe(true);
    expect(breadthFirstSearch(graph, 'c')).toBe(true);
    expect(breadthFirstSearch(graph, 'd')).toBe(true);
    expect(breadthFirstSearch(graph, 'e')).toBe(true);
    expect(breadthFirstSearch(graph, 'f')).toBe(true);
    expect(breadthFirstSearch(graph, 'g')).toBe(true);
  });

  it('should return false if the node does not exist in the graph', () => {
    expect(breadthFirstSearch(graph, 'h')).toBe(false);
    expect(breadthFirstSearch(graph, 'i')).toBe(false);
    expect(breadthFirstSearch(graph, 'j')).toBe(false);
  });
});

describe('shortestPath', () => {
  const graph = {
    a: ['b', 'c'],
    b: ['f'],
    c: ['d', 'e'],
    d: ['f'],
    e: ['f'],
    f: ['g'],
    g: [],
  };

  it('should return the shortest path between two nodes', () => {
    expect(shortestPath(graph, 'a', 'g')).toBe(3);
    expect(shortestPath(graph, 'b', 'g')).toBe(2);
    expect(shortestPath(graph, 'c', 'g')).toBe(3);
    expect(shortestPath(graph, 'd', 'g')).toBe(2);
    expect(shortestPath(graph, 'e', 'g')).toBe(2);
    expect(shortestPath(graph, 'f', 'g')).toBe(1);
    expect(shortestPath(graph, 'g', 'g')).toBe(0);
    expect(shortestPath(graph, 'a', 'b')).toBe(1);
    expect(shortestPath(graph, 'a', 'c')).toBe(1);
    expect(shortestPath(graph, 'a', 'd')).toBe(2);
  });

  it('should return -1 if there is no path between two nodes', () => {
    expect(shortestPath(graph, 'a', 'h')).toBe(-1);
    expect(shortestPath(graph, 'b', 'h')).toBe(-1);
    expect(shortestPath(graph, 'c', 'h')).toBe(-1);
    expect(shortestPath(graph, 'd', 'h')).toBe(-1);
    expect(shortestPath(graph, 'e', 'h')).toBe(-1);
    expect(shortestPath(graph, 'f', 'h')).toBe(-1);
    expect(shortestPath(graph, 'g', 'h')).toBe(-1);
  });
}
);

