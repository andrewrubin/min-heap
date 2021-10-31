// TEST 2:
// Custom comparison function

import MinHeap from "../index.js";

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
