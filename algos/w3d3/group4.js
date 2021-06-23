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
        var runner = this.head;
        // the list is empty?
        if(this.head === null){
            return "List is empty";
        }else if(this.head.data === val){
            this.head = this.head.next;
            runner.prev = null;
            runner.next = null;
            this.length--;
            return runner;
        }else if(this.head.data === val && this.tail.data === val && this.length==1){
            return this.removeTail();
        }
        // does the val even exist?
        while(runner){
            if(runner.data === val && runner === this.tail){
                var beforeCur = runner.prev;
                this.tail = beforeCur;
                this.tail.next = null;
                runner.prev = null;
                runner.next = null;
                this.length--;
                return runner;
            }
            if(runner.data === val){
                var beforeCur = runner.prev;
                var afterCur = runner.next;
                beforeCur.next = runner.next;
                afterCur.prev = beforeCur;
                runner.prev = null;
                runner.next=null;
                this.length--;
                return runner;
            }else{
                runner = runner.next;
            }
        }
        // val is the head?
        // val is the tail?
        // the val is both the head and tail?
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