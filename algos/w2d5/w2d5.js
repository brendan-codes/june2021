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
        this.mins = [];
    }

    push(node){
        if (this.mins.length === 0 || node.data < this.getMin().data){
            this.mins.push(node);
        }
        node.next = this.top;
        this.top = node;
    };

    pop(){
        if(this.top === null){
            return null;
        };

        var popped = this.top;
        this.top = this.top.next;
        popped.next = null;

        if(popped.data === this.getMin().data){
            this.mins.pop();
        }

        return popped;
    }

    isEmpty(){
        return this.top === null;
    }

    peek(){
        return this.top ? this.top : null;
    }

    getMin(){
        if(this.mins.length === 0){
            return null;
        }
        return this.mins[this.mins.length - 1];
    }
};