# 🥞 min-heap

A Min Heap data structure for use in JavaScript

## Usage

Install it:

```
npm install @andrewrubin/min-heap
```

Import it:

```js
import MinHeap from "@andrewrubin/min-heap";
```

Use it:

```js
const minHeap = new MinHeap();

minHeap.insert(22);
minHeap.insert(6);
minHeap.insert(-2);

minHeap.peek(); // -2

minHeap.pull(); // removes and returns -2
```

---

## Custom comparison

MinHeap's default behavior is to directly compare the values of nodes (consider the usage example above, where the inserted values are integers). However, if your data takes on a different form, MinHeap allows you to pass a custom comparison callback to its constructor.

The comparison callback receives two arguments: each is a node to compare within the heap. The comparison function is expected to return `true` if the second node passed is greater than the first, and false otherwise (technically "greater than" could mean anything — how you prioritize your data is up to you!).

"Nodes" in this implementation of a min heap are always objects (specifically, instances of the `HeapNode` class defined in the source code) which MinHeap creates upon calling `insert(value)`. You can access the a node's value for comparison via `node.value`.

In the example below, we need the priority of nodes to be based on their values' birth year.

### Custom comparison example:

```js
import MinHeap from "@andrewrubin/min-heap";

// First, some sample data…

const john = {
  firstName: "John",
  lastName: "Lennon",
  birthDate: {
    month: 10,
    day: 9,
    year: 1940,
  },
};

const paul = {
  firstName: "Paul",
  lastName: "McCartney",
  birthDate: {
    month: 6,
    day: 18,
    year: 1942,
  },
};

const george = {
  firstName: "George",
  lastName: "Harrison",
  birthDate: {
    month: 2,
    day: 25,
    year: 1943,
  },
};

// Create our custom compare function, based on our known data shape:
const comparisonFunction = (nodeA, nodeB) => {
  const yearA = nodeA.value.birthDate.year;
  const yearB = nodeB.value.birthDate.year;
  return yearB > yearA;
};

// Instantiate the min heap, passing our compare function as the sole argument:
const minHeap = new MinHeap(comparisonFunction);

minHeap.insert(paul);
minHeap.insert(john);
minHeap.insert(george);

minHeap.peek();
// => returns the John object, as it is at the root of the min heap.
```
