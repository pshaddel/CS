export class Queue<T> {
  private items: T[] = [];

  private readonly maxSize: number;

  constructor(maxSize: number = Infinity) {
    this.maxSize = maxSize;
  }

  public enqueue(item: T): void {
    if (this.items.length < this.maxSize) {
      this.items.push(item);
    } else {
      throw new Error("Queue is full");
    }
  }

  public dequeue(): T | undefined {
    if (this.items.length > 0) {
      return this.items.shift();
    } else {
      throw new Error("Queue is empty");
    }
  }

  public peek(): T | undefined {
    if (this.items.length > 0) {
      return this.items[0];
    } else {
      throw new Error("Queue is empty");
    }
  }

  public isFull(): boolean {
    return this.items.length === this.maxSize;
  }

  public isEmpty(): boolean {
    return this.items.length === 0;
  }
}
