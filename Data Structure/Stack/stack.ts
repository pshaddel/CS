/**
 * Stack Data Structure (LIFO)
 */
export class Stack<T> {
	/**
	 * The size of the stack
	 */
	private readonly maxSize: number;

	private items: T[] = [];

	constructor(maxSize = Infinity) {
		this.maxSize = maxSize;
	}

	/**
	 * Check if the stack is full
	 * @returns true if the stack is full
	 */
	isFull(): boolean {
		return this.items.length === this.maxSize;
	}

	/**
	 * Check if the stack is empty
	 * @returns true if the stack is empty
	 */
	isEmpty(): boolean {
		return this.items.length === 0;
	}

	/**
	 * Push an item to the stack
	 * @returns the last item from the stack or error if the stack is full
	 * @param item the element we want to add to the stack
	 */
	push(item: T): void {
		if (this.isFull()) {
			throw new Error("Stack is full");
		}
		this.items.push(item);
	}

	/**
	 * Pop the last item from the stack
	 * @returns the last item from the stack
	 */
	pop(): T | undefined {
		if (this.isEmpty()) {
			throw new Error("Stack is empty");
		}
		return this.items.pop();
	}

	/**
	 * Peek at the last item in the stack
	 * @returns the last item from the stack or error if the stack is empty
	 */
	peek(): T {
		if (this.isEmpty()) {
			throw new Error("Stack is empty");
		}
		return this.items[this.items.length - 1];
	}
}
