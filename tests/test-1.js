// TEST 1:
// Basic insertion and removal

import MinHeap from "../min-heap.js";

const numberHeap = new MinHeap();

numberHeap.insert(22);
numberHeap.insert(0);
numberHeap.insert(1);
numberHeap.insert(9);
numberHeap.insert(4);
numberHeap.insert(-2);
numberHeap.insert(14);

numberHeap.pull();

if (numberHeap.pull() === 0) {
  console.log("✅ Test #1 passed!");
}
