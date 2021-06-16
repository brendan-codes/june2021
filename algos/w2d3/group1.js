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

// QUEUE - IS PALINDROME
// return true or false if the queue is a palindrome
// a palindrome is a string or number that is equal to itself when reversed

// racecar === racecar
// race !=== ecar

// you may not linearly iterate through your queue
// only use public queue methods (enqueue, dequeue, checkFront, isEmpty, length)
// return the queue back to it's original order

// you may use stacks queues arrays or dictionaries as additional storage
// you may create helper methods to break this challenge down into smaller parts
function isPalindrome(queue) {
    let mysls = new slStack();
    let mysls2 = new slStack();
    let word_forward = "";
    let word_backward = "";
    while (queue.isEmpty() == false) {
        let datum = queue.dequeue();
        word_forward += datum.data;
        mysls.push(datum)
    }
    while (mysls.isEmpty() == false) {
        let datum2 = mysls.pop();
        word_backward += datum2.data;
        mysls2.push(datum2);
    }
    while (mysls2.isEmpty() == false) {
        queue.enqueue(mysls2.pop())
    }
    if (word_forward !== word_backward) {
        return false;
    } else {
        return true;
    }
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

console.log(isPalindrome(myQueue)); // true
console.log(isPalindrome(myOtherQueue)); // false