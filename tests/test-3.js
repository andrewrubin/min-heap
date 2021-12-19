// TEST 3:
// Removal assurance

import MinHeap from "../index.js";

const numberHeap = new MinHeap();

numberHeap.insert(1);
numberHeap.insert(2);
numberHeap.insert(3);

if (numberHeap.isEmpty()) {
  console.log("🚨 Test #3 failed!");
}

numberHeap.pull();
numberHeap.pull();
numberHeap.pull();

if (numberHeap.isEmpty()) {
  console.log("✅ Test #3 passed!");
} else {
  console.log("🚨 Test #3 failed!");
}
