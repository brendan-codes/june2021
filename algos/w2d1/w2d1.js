// Stacks

// A stack is a LIFO data structure
// LAST IN, FIRST OUT
// LIFO


// push - add to top
// pop - remove from top
// peek - check the top
// isEmpty - check if the stack is empty, true/false

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var node = new Node(7);

// slStack must be implemented using Nodes and pointers
class slStack {
    constructor() {
        this.top = null; // this.head, this.end
        this.length = 0;
    }

    // add to top
    push(newNode) {
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
    }

    // remove from top
    pop() {
        if (this.top === null) return null;

        const removed = this.top; // store previous top
        this.top = this.top.next; // move top pointer
        removed.next = null; // remove pointer from stored node

        return removed; // return the node
    }

    // aka check top
    peek() {
        return this.top;
    }

    // check if empty
    isEmpty() {
        return this.top === null;
    }

    count(){
        return this.length;
    }
}

// bonus challenge: countStack

// write the standalone function countStack
// given a slStack, count the nodes
// return the count
// you may use one stack or array as additional storage
// the given stack must be returned back to it's original order
// you may only use public stack methods push pop peek isempty
// see if you ccan do this faster than O(n)

var myStack = new Stack();
myStack.push(10);
myStack.push(10);
myStack.push(10);
myStack.push(10);

function countStack(stack) {
    let newStack = new slStack();

    let count = 0;

    while (!stack.isEmpty()) {
        let node = stack.pop();
        newStack.push(node);
        count++;
    }

    while (!newStack.isEmpty()) {
        stack.push(newStack.pop());
    }

    return count;
};

countStack(myStack);