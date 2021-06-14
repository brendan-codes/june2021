class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // reverse linked list in place
    // you may not swap values between nodes
    // input:  head -> (1) -> (2) -> (3) ->
    // output: head -> (3) -> (2) -> (1) ->
    reverse() {
        let prev = null;
        let curr = this.head;
        let nextTemp = curr.next;

        while(curr!= null) {
            nextTemp = curr.next; // 22, 109, 1337, 9001, null
            curr.next = prev; // null, 11, 22, 109, 1337
            prev = curr; // 11, 22, 109, 1337, 9001
            curr = nextTemp; //22, 109, 1337, 9001, null
        }
        return prev;
    }

    // print nth to last
    // if the link list has a nth to last value, print it
    // return nothing
    // input: head -> (1) -> (5) -> (11) -> (7) -> (9) -> (4) -> (19) -> (30) ->
    //        n = 4
    // print: 9
    printNthToLast(n) {
        var runner = this.head;

        if (this.length < n) {
            console.log("N is larger than the length of the list");
            return;
        }
        var count = 0;
        while(runner != null) {
            if (count >= (this.length - n + 1)) {
                console.log(runner.data);
            }
            count++;
            runner = runner.next;
        }
    }

    delete(data) {
        // create a runner
        let runner = this.head;

        // check if head is empty
        if (!runner) {
            return;
        }

        // check if head is target
        if (runner.data == data) {
            this.removeFromFront();
            return;
        }

        // while next exists
        while (runner.next) {
            // check if runner next is data
            if (runner.next.data == data) {
                // remove it and return
                runner.next = runner.next.next;
                this.length--;
                return;
            }
            // otherwise traverse
            runner = runner.next;
        }
    }

    delete2(val) {
        var runner = this.head;
        var prev = null;

        if (runner !== null && runner.data == val) {
            this.head = runner.next;
            this.length--;
            return;
        }

        while (runner && runner.data !== val) {
            prev = runner;
            runner = runner.next;
        }

        if (runner === null) {
            return;
        }
        //runner is now our node to be deleted
        this.length--;
        prev.next = runner.next;
    }

    // return length
    size() {
        return this.length;
    }

    // console log (print) the data of every node in the current list
    // traversal
    read() {
        var current = this.head; // set current as the head, if it exists or not
        while(current) { // if current, log and move to current.next
            console.log(current.data);
            current = current.next // move current to the next node
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        // start at the head
        var runner = this.head;
        // while we have a runner
        while(runner) {
            // return true if data === value
            if (runner.data === value) {
                return true;
            }
            // otherwise move to the next node
            runner = runner.next;
        }
        // if the while loop completes, return false
        return false;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        if (this.isEmpty()) return null; // nothing to remove

        var nodeToRemove = this.head; // save the head in a temp var
        this.head = this.head.next; // move the head
        nodeToRemove.next = null // make the removed node to no longer reference the list
        this.length--;
        return nodeToRemove;
    }

    // -------------------------------------------
    // return true or false if this.head is null
    isEmpty() {
        return this.head == null;
    }

    // add given node to the head, if it exists. return void
    addToFront(node) {
        node.next = this.head; // set the new node's next to the head
        this.head = node; // move the head to the new node
        this.length++;
    }

    // when a pointer is to the LEFT of an equal sign, we are CHANGING it
    // when a pointer is to the RIGHT of an equal sign, we are READING it

    // create a new node with given data, add it to the head. return void
    addDataToFront(data) { // 10
        var newNode = new Node(data); // create a new node with the data
        newNode.next = this.head; // set the new node's next to the head
        this.length++;
        this.head = newNode; // move the head to the new node
    }
}

// ⚠ don't forget to instantiate the Singly Linked List
var list = new SLL()

list.addToFront(new Node(9001));
list.addToFront(new Node(1337));
list.addToFront(new Node(109));
list.addToFront(new Node(22));
list.addToFront(new Node(11));

console.log("------ Read all nodes ------");
list.read();
console.log("The length of the list is: " + list.size());
list.head = list.reverse();
list.read();
console.log("------ Print the nth to last ------");
list.printNthToLast(3);