export class Stack {
  private readonly maxSize: number;

  private items: any[] = [];

  constructor(maxSize: number) {
    this.maxSize = maxSize;
  }

  isFull(): boolean {
    return this.items.length === this.maxSize;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  push(item: any): any {
    if (this.isFull()) {
      throw new Error("Stack is full");
    }
    return this.items.push(item);
  }

  pop(): any {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items.pop();
  }

  peek(): any {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items[this.items.length - 1];
  }
}
