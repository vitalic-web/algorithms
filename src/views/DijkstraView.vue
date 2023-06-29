<template>
  <div>
    <div>
      <label for="start">
        Start:
        <input v-model="start" id="start">
      </label>
    </div>
    <div>
      <label for="end">
        End:
        <input v-model="end" id="end">
      </label>
    </div>
    <button @click="findShortestPath">Find shortest path</button>
    <p v-if="shortestPath">{{ shortestPath.join(' -> ') }}</p>
  </div>
</template>

<script setup>
// eslint-disable-next-line max-classes-per-file
import { ref } from 'vue';

const start = ref('');
const end = ref('');
const shortestPath = ref([]);

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(val, priority) {
    this.queue.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.queue.shift();
  }

  sort() {
    this.queue.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  // eslint-disable-next-line no-shadow
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];
    let smallest;

    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (nodes.queue.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        // eslint-disable-next-line guard-for-in,no-restricted-syntax
        for (const neighbor in this.adjacencyList[smallest]) {
          const nextNode = this.adjacencyList[smallest][neighbor];
          const candidate = distances[smallest] + nextNode.weight;
          const nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B', 1);
graph.addEdge('B', 'C', 2);
graph.addEdge('A', 'C', 3);

console.log('graph', graph);

const findShortestPath = () => {
  shortestPath.value = graph.Dijkstra(start.value, end.value);
};
</script>
