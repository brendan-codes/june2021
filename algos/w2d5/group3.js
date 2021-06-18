// minStack

// recreate the Stack class as a minStack.
// minStacks support the following methods:
// push(node), pop(), peek(), isEmpty()
// and a new method called
// getMin()

// getMin() should retrieve the minimum element of the stack.
// We should be able to do this in constant time with no looping!
// How would we modify push and pop to keep track of a minimum element?
// Always checking if we need to update the new minimum value!!

// minStacks are also basically just stacks, so FILO (first in last out) rules apply
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class minStack {
    constructor() {
        this.top = null;
        this.mins = []; // <-- huge hint, we don't just track a single min
    }

    // add a node
    // update the min if this new node is smaller than the min
    push(node) {
        if (this.top === null) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }

        this.mins.push(node.data); // add the data to mins array

        if (node.data < this.mins[0]) {
            // console.log("you made it to the conditional");
            // console.log("\nnode.data is " + node.data + "\nmins[0] is " + this.mins[0]);
            this.mins.sort(function(a, b){return a-b}); // sort the array
            // console.log(this.mins);
        }
    };

    // remove a node
    // also pop from this.mins if the popped node is the smallest
    pop() {
        if (this.top === null) {
            return null;
        }

        const removed = this.top; // stores the previous top
        this.top = this.top.next; // move the pointer
        removed.next = null; // remove the pointer from the node to be removed so gc cna pick it up

        if (removed.data == this.mins[0]) {
            this.mins.pop();
        }
    }

    // return true false if stack is empty
    isEmpty() {
        return this.top === null;
    }

    // peek at the top node
    peek() {
        return this.top;
    }

    // get the minimum value from the list
    // how can we do this without looping??
    getMin() {
        return this.mins[0];
    }
};

var min = new minStack();
min.push(new Node(10));
min.push(new Node(20));
min.push(new Node(30));
min.push(new Node(5));
console.log(min.peek());
console.log(min.pop());