"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class Node {
    constructor(value, next = null) {
        this.data = value;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.listLength = 0;
        this.head = null;
    }
    add(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    get length() {
        return this.listLength;
    }
    at(index) {
        if (!this.head) {
            throw new Error("Index out of bound");
        }
        let counter = 0;
        let node = this.head;
        while (node.next) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error("Index out of bound");
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('empty list');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    swap(leftIndex, rightIndex) {
        let leftNode = this.at(leftIndex);
        let rightNode = this.at(rightIndex);
        let temp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = temp;
    }
    print() {
        if (!this.head) {
            return;
        }
        let node = this.head;
        while (node) {
            // @ts-ignore: Unreachable code error
            console.log(node.data);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
