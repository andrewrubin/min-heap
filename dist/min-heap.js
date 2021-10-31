/**
 * Creates a HeapNode object for use in the MinHeap class.
 * The purpose of HeapNode is to establish some consistency across different
 * potential data types you'd use with MinHeap.
 */ class $1adda35646c6d3d0$var$HeapNode {
    /**
   * Instantiates a HeapNode with a value property equal to the value passed.
   * @param {*} value
   */ constructor(value){
        this.value = value;
    }
}
/**
 * Creates a min heap data structure
 * Public methods are insert(), pull(), and peek().
 */ class $1adda35646c6d3d0$var$MinHeap {
    #list = [];
    /**
   * Compares two nodes. Can be overridden with a custom function passed to the
   * class constructor.
   *
   * @param {HeapNode} n1 - a node to compare
   * @param {HeapNode} n2 - a node to compare
   * @returns Returns true if n2's value is greater than n1's; false otherwise.
   */ #compare = (n1, n2)=>{
        if (!n1 instanceof $1adda35646c6d3d0$var$HeapNode || !n2 instanceof $1adda35646c6d3d0$var$HeapNode) throw "Comparison argument must be an instance of HeapNode.";
        return n2.value > n1.value;
    };
    /**
   * Instantiates a MinHeap.
   *
   * @param {Function} compareFunction - optional custom comparison function.
   * See the #compare member for implementation details.
   */ constructor(compareFunction){
        if (compareFunction && typeof compareFunction === "function") this.#compare = compareFunction;
    }
    /**
   * Gets the parent node's index.
   *
   * @param {Number} i - index of the node whose parent you want.
   * @returns the index of the parent node.
   */  #parent(i) {
        return Math.floor((i - 1) * 0.5);
    }
    /**
   * Gets the index of the node's left child.
   *
   * @param {Number} i - index of the node whose left child you want.
   * @returns the index of the node's left child.
   */  #leftChild(i) {
        const childIndex = i * 2 + 1;
        return this.#list[childIndex] && childIndex;
    }
    /**
   * Gets the index of the node's right child.
   *
   * @param {Number} i - index of the node whose right child you want.
   * @returns the index of the node's right child.
   */  #rightChild(i) {
        const childIndex = i * 2 + 2;
        return this.#list[childIndex] && childIndex;
    }
    /**
   * Bubbles a node up the heap to its proper position, to maintain the min heap
   * strutcure.
   *
   * @param {Number} i - index of the node to bubble up.
   */  #heapifyUp(i) {
        if (this.#list.length < 2) return;
        while(this.#parent(i) >= 0){
            const iParent = this.#parent(i);
            // Get references to the nodes themselves
            let node = this.#list[i];
            let parentNode = this.#list[iParent];
            // Exit early if the node at i is greater than the parent node
            if (this.#compare(parentNode, node)) break;
            // Swap the nodes and set them:
            [parentNode, node] = [
                node,
                parentNode
            ];
            this.#list[iParent] = parentNode;
            this.#list[i] = node;
            i = iParent;
        }
    }
    /**
   * Moves a node down the heap to its proper position, to maintain the min heap
   * strutcure.
   *
   * @param {Number} i - index of the node to move down.
   */  #heapifyDown(i) {
        if (this.#list.length < 2) return;
        while(this.#leftChild(i)){
            // Get the child indeces, and find the smaller of the two nodes
            const iChildL = this.#leftChild(i);
            const iChildR = this.#rightChild(i);
            let iSmallestChild = iChildR && this.#compare(this.#list[iChildR], this.#list[iChildL]) ? iChildR : iChildL;
            // Get references to the nodes themselves
            let node = this.#list[i];
            let childNode = this.#list[iSmallestChild];
            // Exit early if the child is greater than the node at i
            if (this.#compare(node, childNode)) break;
            // Swap the nodes and set them
            [node, childNode] = [
                childNode,
                node
            ];
            this.#list[i] = node;
            this.#list[iSmallestChild] = childNode;
            i = iSmallestChild;
        }
    }
    /**
   * Peek the root node.
   *
   * @returns the root node's value property.
   */ peek() {
        return this.#list[0].value;
    }
    /**
   * Removes and returns the root node. Readjusts the heap to maintain its
   * required structure.
   *
   * @returns the root node's value property.
   */ pull() {
        if (this.#list.length === 0) return;
        const firstNode = this.#list[0];
        this.#list[0] = this.#list.pop();
        this.#heapifyDown(0);
        return firstNode.value;
    }
    /**
   * Inserts a HeapNode instance.
   *
   * @param {*} value - The value of the node to insert.
   * @returns the value passed.
   */ insert(value) {
        const length = this.#list.push(new $1adda35646c6d3d0$var$HeapNode(value));
        this.#heapifyUp(length - 1);
        return value;
    }
    /**
   * Gets the heap array. Useful for debugging/logging.
   *
   * @returns the heap array.
   */ getList() {
        return this.#list;
    }
    /**
   * Checks if the heap is empty.
   *
   * @returns true if empty, false otherwise.
   */ isEmpty() {
        return this.#list.length === 0;
    }
}
var $1adda35646c6d3d0$export$2e2bcd8739ae039 = $1adda35646c6d3d0$var$MinHeap;


export {$1adda35646c6d3d0$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=min-heap.js.map
