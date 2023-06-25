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
