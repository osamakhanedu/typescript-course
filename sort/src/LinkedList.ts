class Node {
    public data: number;
    public next: Node | null;

    constructor(value: number, next: Node | null = null) {
        this.data = value;
        this.next = next;
    }
}

class LinkedList {
    public head: Node | null;
    private listLength: number = 0;

    constructor() {
        this.head = null;
    }

    add(value: number): void {

        const node = new Node(value);

        ++this.listLength;

        // empty head
        if (!this.head) {
            this.head = node;
            return;
        }

        // find last node and attach node. 
        // 1,next -> 2, next -> 3,null

        let tail = this.head;

        while (tail.next) {
            tail = tail.next;
        }

        tail.next = node;


    }

    get length(): number {

        return this.listLength;

    }

    at(index: number): Node {

        if (!this.head) {
            throw new Error("Index out of bound");
        }

        let counter = 0;

        let node: Node | null = this.head;

        while (node.next) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }



        throw new Error("Index out of bound");


    }

    compare(leftIndex: number, rightIndex: number): boolean {


        if (!this.head) {
            throw new Error('empty list')
        }


        return this.at(leftIndex).data > this.at(rightIndex).data;


    }


    swap(leftIndex: number, rightIndex: number): void {


        let leftNode = this.at(leftIndex);
        let rightNode = this.at(rightIndex);

        let temp = leftNode.data;

        leftNode.data = rightNode.data;
        rightNode.data = temp;

    }


    print(): void {

        if (!this.head) {
            return;
        }

        let tail = this.head;

        while (tail.next) {

            // @ts-ignore: Unreachable code error
            console.log(tail.data);

            tail = tail.next;

        }

    }

}