
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
        if(this.isEmpty()) {
            this.top = newNode;
        } else {
            var returnNode = this.top;
            this.top = this.top.next;
            return returnNode;
        }
    }

    // remove from top
    pop() {
        if(this.isEmpty()){
            console.log("Stack is empty");
        } else {
            var returnNode = this.top;
            this.top = this.top.next;
            return returnNode;
        }
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
    let newStack = new slStack();
    let count = 0;
    while(!stack.isEmpty()) {
        newStack.push(stack.pop());
        count++;
    }
    //  let newNStack = stack;
    //  while(!newNStack.isEmpty()) {
    //     newNStack.pop();
    //     count++;
    // }
};


var myStack = new slStack();
myStack.push(new Node(1));
myStack.push(new Node(2));
myStack.push(new Node(3));
myStack.push(new Node(4));

var count = countStack(myStack);
console.log(count);
