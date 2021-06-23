// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // == Main Methods ==

    // remove and return the first node with data === val, if it exists
    removeVal(val) {
        // the list is empty?
        // does the val even exist?
        // val is the head?
        // val is the tail?
        // the val is both the head and tail?
        if(this.isEmpty()){
            console.log("List is empty");
         return null;
        } else if(this.head === this.tail && val === this.head.data) {
            let returnNode = this.head;
            this.head = null;
            this.tail = null;
            return returnNode;
        } else if(val === this.head.data) {
            let returnNode = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            returnNode.next = null;
            return returnNode;
        } else if(val === this.tail.data) {
            let returnNode = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            returnNode.prev = null;
            return returnNode;
        } else {
            let returnNode = this.head;
            while(returnNode.next != null) {
                if(returnNode.data === val) { //  1   2   [3]    4
                    returnNode.prev.next = returnNode.next;
                    returnNode.next.prev = returnNode.prev;
                    returnNode.next = null;
                    returnNode.prev = null;
                    return returnNode;
                }
                returnNode = returnNode.next;
            }
        }
        console.log("Value is not in List");
        return null;
    }

    // add before target
    prepend(target, node) {
        if (this.head !== null) { // Must have at least one node
            var curNode = this.head;
            if (curNode.data === target) { // Edge case: first node only
                node.next = curNode; // Connect nodes
                curNode.prev = node;
                this.head = node; // Move this.head to new node
            } else {
                while (curNode.next !== null) {
                    curNode = curNode.next; // Move to next node
                    if (curNode.data === target) {
                        // Link this new node to the others
                        node.next = curNode;
                        node.prev = curNode.prev;
                        // Link other nodes to this new node
                        curNode.prev.next = node;
                        curNode.prev = node;
                        return; // Exit while loop assuming only before first instance of target
                    }
                }
            }
        }
    }

    // cleaner add before target
    prependClean(target, node) {
        var runner = this.head; // set a runner
        if(runner.data === target){
            this.addHead(node);
            return;
        }
        while (runner) { // loop
            if (runner.data !== target) { // check runner data against the target
                runner = runner.next;     // move forward if no match
            } else {                      // else we found a match
                node.next = runner;       // point the node at the matched runner
                node.prev = runner.prev;  // point the node's prev to the matched runner's prev
                node.prev.next = node;    // link previous node next
                runner.prev = node;       // link runner to node
                return;
            }
        }
    }

    // push to head
    addHead(node) {
        if (!this.head) { // empty list
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;

            // this.tail.next = node;
            // node.prev = this.tail;
            // this.tail = node;
        }
    }

    // pop from tail
    removeTail() {
        if (this.head == null) return; // empty list
        if (this.head === this.tail) { // one node
            var temp = this.tail; // set a temp
            this.head = null; // disconnect the head
            this.tail = null; // disconnect the tail
            return temp;
        }
        var temp = this.tail; // set a temp
        this.tail = tail.prev; // move the tail back
        this.tail.next = null; // null out the new tail's next
        temp.prev = null; // null out the temp's prev
        return temp;
    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) {}

    // pop from head
    removeHead() {}

    append(target, node){}
}