// Queue
// FIFO (First in, first out)

// - enqueue
// - dequeue
// - peek
// - isEmpty

class Queue {
    constructor() {
        this.front = null; // sometimes called head "front of the line"
        this.back = null; // sometimes called rear or tail "back of the line"
    }

    // add to the back
    enqueue(node) {}

    // remove from the front
    dequeue() {}

    // check the front of the queue
    peek() {
        return this.front ? this.front.data : null;
    }

    // return if empty
    isEmpty() {
        return this.front === null;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// print every value in the queue
// you may only use one queue or stack for additional storage
// return the queue back to it's original order when you are done
// you are not allowed to linearly traverse the queue
// only use public methods enqueue, dequeue, peek, isempty
function readQueue(queue) {}