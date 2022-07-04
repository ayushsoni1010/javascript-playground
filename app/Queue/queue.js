// 1. Queue: When dealing with Arrays
// Complexity = Linear due to shift method

class ArrayQueue {
  constructor() {
    this.items = [];
  }
  enqueqe(element) {
    this.items.push(element);
  }
  dequeqe() {
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    return this.items.toString();
  }
}

const arrayQueue = new ArrayQueue();
arrayQueue.enqueqe(10);
arrayQueue.enqueqe(20);
arrayQueue.enqueqe(30);
arrayQueue.isEmpty();
arrayQueue.size();
arrayQueue.dequeqe();
arrayQueue.peek();

console.log(arrayQueue);

/******************************************************************************************************/

// 2. Queue: When dealing with Objects

class ObjectQueue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }
  enqueqe(element) {
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeqe() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    return this.items;
  }
}

const objectQueue = new ObjectQueue();
objectQueue.enqueqe(10);
objectQueue.enqueqe(20);
objectQueue.enqueqe(30);
objectQueue.enqueqe("Hey");
objectQueue.dequeqe();
objectQueue.isEmpty();
objectQueue.size();
objectQueue.print();

console.log(objectQueue);
