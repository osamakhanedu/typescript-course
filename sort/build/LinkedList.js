"use strict";
class Node {
    constructor(value, next = null) {
        this.data = value;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(value) {
        const node = new Node(value);
    }
}
