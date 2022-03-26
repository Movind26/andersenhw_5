class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.link = null;
    this.length = 0;
  }

  append(elem) {
    this.length++;
    let temp = new Node(elem);

    if (this.link) {
      this.link.next = temp;
      this.link = temp;
      return temp;
    }
  
    this.head = this.link = temp;
    return temp;
  }

  prepend(elem) {
    this.length++;
    let temp = new Node(elem);

    if (this.head) {
      temp.next = this.head;
      this.head = temp;
      return temp;
    }

    this.head = this.link = temp;
    return temp;
  }

  find(elem) {
    let current = this.head;

    while (current !== null) {
      if (current.data == elem) {
        return current.data;
      }

      current = current.next;
    }

    return null;
  }

  toArray() {
    let result = [];
    let current = this.head;

    while(current !== null) {
      result.push(current.data);
      current = current.next;
    }
    
    return result;
  }

  print() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('The entity is not iterable');
    }

    const result = new LinkedList();

    for (let i = 0; i < iterable.length; i++) {
      result.prepend(iterable[i]);
    }

    return result;
  }
}