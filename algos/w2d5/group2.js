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
        this.next = next;
    }
}

class minStack {
    constructor(){
        this.top = null;
        this.mins = []; // <-- huge hint, we don't just track a single min
    }

    // add a node
    // update the min if this new node is smaller than the min
    push(node){
        if(this.isEmpty()) {
            this.top = node;
            this.mins.push(node);
        } else {
            node.next = this.top;
            this.top = node;
            if(this.mins[0].data > node.data) {
                this.mins.pop();
                this.mins.push(node);
            }
        }
    };

    // remove a node
    // also pop from this.mins if the popped node is the smallest
    pop(){
        if(this.isEmpty()) return null;

        var removed = this.top;
        this.top = this.top.next;
        removed.next = null;

        if(removed.data == this.mins[0].data) {
            this.mins.pop();
        }

        return removed;
    }

    // return true false if stack is empty
    isEmpty(){
        return this.top === null;
    }

    // peek at the top node
    peek(){
        return this.top;
    }

    // get the minimum value from the list
    // how can we do this without looping??
    getMin(){
        return this.mins[0];
    }
};