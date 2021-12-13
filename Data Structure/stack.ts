export class Stack<T> {
	private readonly maxSize: number;

	private items: T[] = [];

	constructor(maxSize = Infinity) {
		this.maxSize = maxSize;
	}

	isFull(): boolean {
		return this.items.length === this.maxSize;
	}

	isEmpty(): boolean {
		return this.items.length === 0;
	}

	push(item: T): void {
		if (this.isFull()) {
			throw new Error("Stack is full");
		}
		this.items.push(item);
	}

	pop(): T | undefined {
		if (this.isEmpty()) {
			throw new Error("Stack is empty");
		}
		return this.items.pop();
	}

	peek(): T {
		if (this.isEmpty()) {
			throw new Error("Stack is empty");
		}
		return this.items[this.items.length - 1];
	}
}
