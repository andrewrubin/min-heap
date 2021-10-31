import MinHeap from "../min-heap.js";

// TEST 1:
// Basic insertion and removal

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

// TEST 2:
// Custom comparison function

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

const comparisonFunction = (nodeA, nodeB) => {
  const yearA = nodeA.value.birthDate.year;
  const yearB = nodeB.value.birthDate.year;
  return yearB > yearA;
};

const beatlesHeap = new MinHeap(comparisonFunction);

beatlesHeap.insert(paul);
beatlesHeap.insert(john);
beatlesHeap.insert(george);

if (beatlesHeap.peek() === john) {
  console.log("✅ Test #2 passed!");
}
