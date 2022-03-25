class Node {
  constructor() {
    this.data = 0;    // значение узла
    this.link = null; // указатель/адрес след. узла
  }
}

class Stack {
  constructor(max = 10) {
    this.top = null;  // даёт доступ к полному списку адресов
    this.max = max;
    this.length = 0;
  }    

  push(element) {
    let temp = new Node(); // временный независимый узел

    if (temp === null || this.length === this.max) {
      throw new Error('Overflow');
    }

    temp.data = element;  // задаём значение
    temp.link = this.top; // указываем на существующую вершину
    this.top = temp;      // саму вершину указываем на новый узел
    this.length++;
  }

  pop() {
    if (this.top === null) {
      throw new Error('Stack Underflow');
    }
    let temp = new Node();
    temp = this.top;          // указываем на верхний (последний) узел
    this.top = this.top.link; // устанавливаем верхний адрес как адрес след. узла
  }

  peek() {
    if (!this.isEmpty()) {
      return this.top.data;
    }
    else {
      throw new Error('Stack is empty');
    }
  }

  isEmpty() {
    return this.top === null;
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

  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] === 'function') {
      throw new Error('The entity is not iterable');
    }

    const max = iterable;
    let length = 0;
    let result = [];

    for (let i = 0; i <= max; i++) {
      result = push(i);
      length++;
    }
  }
}

function pushArray(array, ...items) {
  return [
    ...array,
    ...items,
  ]
}

module.exports = { Stack };
