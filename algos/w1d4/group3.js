class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {

    constructor() {
        this.head = null;
        this.counter = 0;
    }

    // if data is contained within the current list, delete it.
    // return void
    // assume there are no duplicates
    // consider the edge case if you have to delete the head node
    // consider the edge case your list is empty
    // consider the edge case that your list does not contain the data at all
    delete(data) {
        var current = this.head;

        if(this.isEmpty()) {
            console.log("List is empty...");
            return;
        }

        if(! this.contains(data)) {
            console.log("Node not found in list...");
            return;
        }

        if(data == this.data) {
            console.log("Deleting the first node...");
            this.removeFromFront();
        }

        while (current.next != null) {
            if (current.next.data == data) {
                console.log("Removing the node from the list...");
                current.next = current.next.next;
                this.counter--;
                return;
            }
            current = current.next;
        }
    }

    // return the size of the current linked list
    // BONUS: how might you do this without linearly traversing the list?
    // you may have change other methods within this class...
    size() {
        return this.counter;
    }

    // console log (print) the data of every node in the current list
    // traversal
    read() {
        var current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        var current = this.head;

        while (current) {
            if (current.data === value) {
                return true;
            }
            current = current.next;
        }
        return false;q
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {

        if(this.isEmpty()) return null;

        var nodeToRemove = this.head;

        this.head = this.head.next;
        nodeToRemove.next = null;
        this.counter--;
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
        this.counter++;
    }

    // when a pointer is to the LEFT of an equal sign, we are CHANGING it
    // when a pointer is to the RIGHT of an equal sign, we are READING it

    // create a new node with given data, add it to the head. return void
    addDataToFront(data) { // 10
        var newNode = new Node(data); // create a new node with the data
        newNode.next = this.head; // set the new node's next to the head
        this.head = newNode; // move the head to the new node
        counter++;
    }
}

// ⚠ don't forget to instantiate the Singly Linked List
var myList = new SLL();

console.log("Building the list...");
myList.addToFront(new Node(10));
myList.addToFront(new Node(20));
myList.addToFront(new Node(30));
myList.addToFront(new Node(40));
myList.addToFront(new Node(50));

console.log("Reading the list...");
myList.read();
console.log("Checking the list for the value of 22...");
console.log(myList.contains(22));
console.log("Remove the first node from the list...");
myList.removeFromFront();
console.log("Display the size of the list...");
console.log(myList.size());
console.log("Reading the list...");
myList.read();
myList.delete(99);
myList.delete(40);
myList.delete(20);
console.log("Reading the list...");
console.log(myList.size());
console.log("Reading the list...");
myList.read();




