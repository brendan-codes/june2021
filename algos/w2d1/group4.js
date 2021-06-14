
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
        newNode.next = this.top;
        this.top = newNode;
    }

    // remove from top
    pop() {
        var toBeRemoved = this.top;
        this.top = this.top.next;
        toBeRemoved.next = null;
        console.log(toBeRemoved);
    }

    // aka check top
    peek() {
        return this.top;
    }

    // check if empty
    isEmpty() {
        return this.top === null;
    }
}

// bonus challenge: countStack

// write the standalone function countStack
// given a slStack, count the nodes
// return the count
// you may use one stack or array as additional storage
// the given stack must be returned back to it's original order
// you may only use public stack methods push pop peek isempty

var myStack = new slStack();
myStack.push(new Node(10));
myStack.push(new Node(10));
myStack.push(new Node(25));
myStack.pop();
console.log(myStack);

function countStack(stack) {
    var count = 0;
    var newStack = new slStack();
    while(stack.peek != null){
        count++;
        newStack.push(stack.peek());
        stack.pop();
    }
    while(newStack.peek !=null){
        stack.push(newStack.peek());
    }
    console.log(stack);
    return count;
};