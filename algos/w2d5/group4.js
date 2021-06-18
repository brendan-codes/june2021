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
    constructor(){
        this.top = null;
        this.mins = []; // <-- huge hint, we don't just track a single min
    }

    // add a node
    // update the min if this new node is smaller than the min
    push(node){
        if(this.top === null){
            this.top = node;
            this.mins.push(node.data);
        }else{
            if(node.data < this.mins[this.mins.length-1]){
                this.mins.push(node.data);
            }
            node.next = this.top;
            this.top = node;
        }
    };

    // remove a node
    // also pop from this.mins if the popped node is the smallest
    pop(){
        if(this.top === null){
            return null;
        }
        const toBeRemoved = this.top;
        if(toBeRemoved.data === this.mins[this.mins.length-1]){
            this.mins.pop();
        }
        this.top = this.top.next;
        toBeRemoved.next = null;
        return toBeRemoved;
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
        return this.mins[this.mins.length-1];
    }
};

var thisStack = new minStack();
thisStack.push(new Node(15));
thisStack.push(new Node(10));
thisStack.push(new Node(20));
thisStack.push(new Node(2));
console.log(thisStack);
thisStack.pop();
console.log(thisStack);
console.log(thisStack.getMin());