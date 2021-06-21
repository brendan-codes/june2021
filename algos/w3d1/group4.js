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
    addHead(node) {
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;

        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;

    }

    // pop from tail
    removeTail() {
        if(this.isEmpty()) {
            console.log("Dll List is empty");
            return;
        }
        if(this.head == this.tail){
            this.tail = null;
            this.head = null;

        } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
        }
        this.length--;

    }

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
    addTail(node) {
        if(this.tail === null){
            this.head=node;
            this.tail=node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;

    }

    // pop from head
    removeHead() {
        if(this.head === null){
            return null;
        }
        if(this.head == this.tail){
            this.tail = null;
            this.head = null;
            this.length--;

        } else {
        let removed = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        removed.next = null;
        return removed;
        this.length--;

        }


    }
}