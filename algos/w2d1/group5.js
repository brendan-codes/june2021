
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
        let node = new Node(newNode)
        node.next = this.top;
        this.top = node;
    }

    // remove from top
    pop() {
        let grabtop = this.top;
        this.top = grabtop.next;
        grabtop.next = null;
        return grabtop;
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
function countStack(stack) {
    let tempStack = new slStack();
    let count = 0;
    while (stack){
        if (stack.isEmpty()) break;
        else {
            tempStack.push(stack.pop());
            count++;
        }
    }

    while(tempStack){
        if (tempStack.isEmpty()) break;
        else {
            stack.push(tempStack.pop());
        }
    }

    return count;
};
var myStack = new slStack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.push(40);

console.log(countStack(myStack))