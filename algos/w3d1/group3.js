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
        this.length = 0;
    }

    // == Main Methods ==

    // push to head
        addHead( node ) {
        var newNode = node;
        if ( this.head == null ) {
            this.head = newNode;
            this.tail = newNode;
        }
        if ( this.head != null ) {
            newNode.next = this.head;
            this.head = newNode;
            this.head.next.prev = this.head;
        }
    }

    // pop from tail
    removeTail() {}

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // return length
    size() {
        return this.length;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) {}

    // pop from head
    removeHead() {}
}