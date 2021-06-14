class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// slStack must be implemented using Nodes and pointers
class slStack {
    constructor() {
        this.top = null; // this.head, this.end
    }

    // add to top
    push(newNode) {
        newNode.next = this.top; // set the new node's next to the head
        this.top = newNode; // move the head to the new node
        this.length++;
    }
i
    // remove from top
    pop() {
        if(this.isEmpty()) return null;

        var nodeToRemove = this.top;
        this.top = this.top.next;
        nodeToRemove.next = null;
        this.length--;
        return nodeToRemove;
    }

    // aka check top
    peek() {
        return this.top;
    }

    // check if empty
    isEmpty() {
        return this.top === null;
    }

    // bonus challenge: countStack

    // write the standalone function countStack
    // given a slStack, count the nodes
    // return the count
    // you may use one stack or array as additional storage
    // the given stack must be returned back to it's original order
    // you may only use public stack methods push pop peek isempty
    // countStack(stack) {
    //     return this.length;
    // }
}

var s = new slStack();
console.log("add a node: " + s.push(new Node(10)));
console.log("check out my new node: " + s.peek());
console.log("add a node: " + s.push(new Node(20)));
console.log("check out my new node: " + s.peek());
console.log("add a node: " + s.push(new Node(30)));
console.log("check out my new node: "+ s.peek());
console.log("popping a node: " + s.pop());
console.log("peeking: " + s.peek());
// console.log("counting the stack: " + s.countStack(s));