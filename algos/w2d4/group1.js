// === CLASSES ===

// Stack
// LAST IN, FIRST OUT
class slStack {
    constructor() {
        this.top = null; // this.head, this.end
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
}

// Queue
// FIRST IN, FIRST OUT
class Queue {
    constructor() {
        this.front = null; // sometimes called head "front of the line"
        this.back = null; // sometimes called rear or tail "back of the line"
    }

    enqueue(node) {
        if (this.back === null) { // if back is null, list is empty
            this.back = node;
            this.front = node;
        } else { // otherwise add to back
            this.back.next = node;
            this.back = node;
        }
    }

    // remove from the front
    dequeue() {
        if (this.front === null) {
            return null; // if empty return nothing
        };
        if (this.front === this.back) {
            this.back = null;
        };
        let node = this.front;
        this.front = node.next;
        node.next = null;
        return node;
    }

    // check the front of the queue
    peek() {
        // return this.front ? this.front.data : this.front;
        return this.front;
    }

    // return if empty
    isEmpty() {
        return this.front === null;
    }
}

// Node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// === HELPER FUNCTIONS ===

// STACK - IS SORTED
// using only one extra stack for storage, check if a given stack is sorted
// return the stack back to it's original order when you are done
// assume node.data are integers
function isStackSorted(stack) {
    let previousNumber = stack.peek().data;
    let tempStack = new slStack();
    tempStack.push(stack.pop());
    while (! stack.isEmpty()) {
        if (stack.peek().data < previousNumber || stack.peek().data == previousNumber) {
            previousNumber = stack.peek().data;
            tempStack.push(stack.pop());
        } else {
            while (tempStack.isEmpty() == false) {
                stack.push(tempStack.pop());
                console.log("Number added back to Original Stack: " + stack.peek().data);
            }
            console.log("temp: " + tempStack.peek())
            return false
        }
    }
    while (! tempStack.isEmpty()) {
        stack.push(tempStack.pop());
        console.log("Number added back to Original Stack: " + stack.peek().data);
    }
    return true;
}

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
function isStackSorted(stack) {
    let isSorted = true;
    let size = countStack(stack);
    if (size < 2) {
        return isSorted;
    }
    let newStack = new slStack();
    while(!stack.isEmpty()) {
        let currentNode = stack.pop();
        if (!stack.isEmpty()) {
            let nextNode = stack.peek();
            isSorted = isSorted && (nextNode.data >= currentNode.data);
        }
        newStack.push(currentNode);
    }
    while(!newStack.isEmpty()) {
        stack.push(newStack.pop());
    }
    return isSorted;
}


// STACK - GREATER OF TWO STACKS
// return the stack with the greater sum of numbers
// return both stacks to their original order
// assume node.data are integers
// you may write helper methods to break this problem down into smaller steps
function count(stack) {
    let sum = 0;
    let tempStack = new slStack();
    while (! stack.isEmpty()) {
        let tempdata = stack.pop()
        tempStack.push(tempdata);
        sum += tempdata.data;
    }
    while (! tempStack.isEmpty()) {
        stack.push(tempStack.pop());
    }
    return "Stack Length: " + sum;
}

function greaterOfTwoStacks(stack1, stack2) {
    let sum1 = count(stack1);
    let sum2 = count(stack2);
    if (sum1 > sum2) {
        console.log("Stack 1 is larger");
        return sum1;
    } else if (sum1 < sum2) {
        console.log("Stack 2 is larger");
        return sum2;
    } else {
        console.log("Stacks have the same sum");
    }
}


// QUEUE - IS PALINDROME
// return true or false if the queue is a palindrome
// a palindrome is a string or number that is equal to itself when reversed

// racecar === racecar
// race !=== ecar

// you may not linearly iterate through your queue
// only use public queue methods (enqueue, dequeue, checkFront, isEmpty)
// return the queue back to it's original order

// you may use stacks queues arrays or dictionaries as additional storage
// you may create helper methods to break this challenge down into smaller parts
function isPalindrome(queue) {
    let temp = new Queue();
    let reverseString = ""; // d -> "abc"
    let normalString = ""; // "abc" <- d

    while (!queue.isEmpty()) {
        let node = queue.dequeue();
        reverseString = node.data + reverseString;
        normalString += node.data;
        temp.enqueue(node);
    }

    while (!temp.isEmpty()) {
        queue.enqueue(temp.dequeue());
    }

    console.log(normalString);
    console.log(reverseString);

    return reverseString === normalString;
}

var myQueue = new Queue();
myQueue.enqueue(new Node("r"));
myQueue.enqueue(new Node("a"));
myQueue.enqueue(new Node("c"));
myQueue.enqueue(new Node("e"));
myQueue.enqueue(new Node("c"));
myQueue.enqueue(new Node("a"));
myQueue.enqueue(new Node("r"));

var myOtherQueue = new Queue();
myOtherQueue.enqueue(new Node("a"));
myOtherQueue.enqueue(new Node("p"));
myOtherQueue.enqueue(new Node("p"));
myOtherQueue.enqueue(new Node("l"));
myOtherQueue.enqueue(new Node("e"));

// console.log(isPalindrome(myQueue)); // true
// console.log(isPalindrome(myOtherQueue)); // false