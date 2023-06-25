type Graph = {
    [key: string]: string[];
};

export function breadthFirstSearch(graph: Graph, node: string) {
    const visitedNodes: string[] = [];
    const queue: string[] = [Object.keys(graph)[0]]; // pushing neighbors into the queue

    while (queue.length > 0) {
        const currentNode = queue.shift();

        if (currentNode === undefined) { // TS Compiler
            continue;
        }

        if (currentNode === node) {
            return true;
        } else {
            // pushing neigbors into the queue
            graph[currentNode].forEach((neigbor) => {
                if (!visitedNodes.includes(neigbor)) {
                    visitedNodes.push(neigbor);
                    queue.push(neigbor);
                }
            });
        }
    }
    return false;
}

export function shortestPath(graph: Graph, start: string, end: string) {
    const visitedNodes: string[] = [];
    const distances: { [key: string]: number } = { [start]: 0 };
    const queue: string[] = [start];

    while (queue.length > 0) {
        const currentNode = queue.shift();

        if (currentNode === undefined) { // TS Compiler
            continue;
        }

        if (currentNode === end) {
            return distances[end];
        } else {
            // pushing neighbors into the queue
            graph[currentNode].forEach((neighbor) => {
                if (!visitedNodes.includes(neighbor)) {
                    visitedNodes.push(neighbor);
                    distances[neighbor] = distances[currentNode] + 1;
                    queue.push(neighbor);
                }
            });
        }
    }
    return -1; // there is no path from start to end
}

// Define a Graph
const graph = {
    a: ['b', 'c'],
    b: ['f'],
    c: ['d', 'e'],
    d: ['f'],
    e: ['f'],
    f: ['g'],
    g: [],
};
