class _Node{
  public data: number;
  public next: Node | null;

  constructor(value:number,  next: Node | null = null) {
        this.data = value; 
        this.next = next;
  }
}

class LinkedList {
    public head: Node | null;
    
    constructor(){
        this.head = null;
    }

    add(value:number): void{

        const node = new _Node(value);
    }

}