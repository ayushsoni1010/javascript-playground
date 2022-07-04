class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    return this.items.toString();
  }
}

const stack = new Stack();

stack.isEmpty();
stack.push(10);
stack.push(20);
stack.push(30);
stack.size();
stack.pop();
stack.peek();
