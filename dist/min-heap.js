function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $e41147138ac3b7e7$export$2e2bcd8739ae039);
class $e41147138ac3b7e7$var$HeapNode {
    constructor(value){
        this.value = value;
    }
}
class $e41147138ac3b7e7$var$MinHeap {
    #list = [];
    /**
   * Compares two nodes. Can be overridden with a custom function by passing
   * said function as an argument to the constructor.
   *
   * @param {HeapNode} i - a node to compare with j
   * @param {HeapNode} j - a node to compare with i
   * @returns Returns true if j is greater than i, false otherwise.
   */ #compare = (i, j)=>{
        if (!i instanceof $e41147138ac3b7e7$var$HeapNode || !j instanceof $e41147138ac3b7e7$var$HeapNode) throw "Comparison argument must be an instance of HeapNode.";
        return this.#list[j].value > this.#list[i].value;
    };
    constructor(compareFunction){
        if (compareFunction) this.#compare = compareFunction;
    }
     #parent(i) {
        return Math.floor((i - 1) * 0.5);
    }
     #leftChild(i) {
        return i * 2 + 1;
    }
     #rightChild(i) {
        return i * 2 + 2;
    }
     #heapifyUp(i) {
        while(this.#parent(i)){
            const iParent = this.#parent(i);
            // Exit early if the node at i is greater than the parent node
            if (this.#compare(iParent, i)) break;
            // Get references to the nodes themselves
            let node = this.#list[i];
            let parentNode = this.#list[iParent];
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
     #heapifyDown(i) {
        while(this.#leftChild(i)){
            // Get the child indeces, and find the smaller of the two
            const iChildL = this.#leftChild(i);
            const iChildR = this.#rightChild(i);
            let iSmallestChild = iChildR && this.#compare(iChildR, iChildL) ? iChildR : iChildL;
            // Exit early if the child is greater than the node at i
            if (this.#compare(i, iSmallestChild)) break;
            // Get references to the nodes themselves
            let node = this.#list[i];
            let childNode = this.#list[iSmallestChild];
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
    peek() {
        return this.#list[0];
    }
    pull() {
        const firstNode = this.#list[0];
        this.#list[0] = this.#list.pop();
        this.#heapifyDown(0);
        return firstNode.value;
    }
    insert(value) {
        const length = this.#list.push(new $e41147138ac3b7e7$var$HeapNode(value));
        this.#heapifyUp(length - 1);
        return value;
    }
}
var $e41147138ac3b7e7$export$2e2bcd8739ae039 = $e41147138ac3b7e7$var$MinHeap;


//# sourceMappingURL=min-heap.js.map
