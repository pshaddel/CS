/**
 * # Queue Data Structure
 *
 * In computer science, a queue is a collection of entites in a sequence. We can add an entity to one end and remove entity from the other end.
 * <p align="center">
 *  <img width="250px" src="https://i1.faceprep.in/Companies-1/queue-operations.gif"/>
 * </p>
 *
 */
export class Queue<T> {
	private items: T[] = [];

	/**
	 * Queue should have a size limit
	 */
	private readonly maxSize: number;

	constructor(maxSize = Infinity) {
		this.maxSize = maxSize;
	}

	/**
	 * Enqueue an item to the queue
	 * @param item the element we want to add to the queue
	 */
	public enqueue(item: T): void {
		if (this.items.length < this.maxSize) {
			this.items.push(item);
		} else {
			throw new Error("Queue is full");
		}
	}

	/**
	 * dequeue an item from the queue
	 * @returns deques the first item from the queue
	 */
	public dequeue(): T | undefined {
		if (this.items.length > 0) {
			return this.items.shift();
		} else {
			throw new Error("Queue is empty");
		}
	}

	/**
	 * peek at the first item in the queue
	 * @returns the first item from the queue
	 */
	public peek(): T | undefined {
		if (this.items.length > 0) {
			return this.items[0];
		} else {
			throw new Error("Queue is empty");
		}
	}

	/**
	 * Check if the queue is full
	 * @returns true if the queue is full
	 */
	public isFull(): boolean {
		return this.items.length === this.maxSize;
	}

	/**
	 *  Check if the queue is empty
	 * @returns true if the queue is empty
	 */
	public isEmpty(): boolean {
		return this.items.length === 0;
	}
}
