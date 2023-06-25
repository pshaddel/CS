// BEGIN: 6d4b5f5d8c2a
import { breadthFirstSearch } from './breadthFirstSearch';

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

