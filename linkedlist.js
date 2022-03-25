class LinkedList {
  constructor() {
    this.head = null;
    this.link = null;
    this.length = 0;
  }

  append(value) {
    this.length++;
    let newNode = createNode(value);

    if (this.link) {
      this.link.next = newNode;
      this.link = newNode;
      return newNode;
    }
  
    this.head = this.link = newNode;
    return newNode;
  }

  prepend(value) {
    this.length++;
    let newNode = createNode(value);

    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
      return newNode;
    }

    this.head = this.link = newNode;
    return newNode;
  }

  toArray() {
    let result = [];
    let current = this.top;

    while(current !== null) {
      result.push(current.data);
      current = current.link;
    }
    
    return result;
  }

}