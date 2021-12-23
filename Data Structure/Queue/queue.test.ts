import { Queue } from "./queue";

describe("Data Strtucture: Queue", () => {
	it("should create a queue", () => {
		const queue = new Queue(2);
		expect(queue).toBeDefined();
	});

	it("should enqueue an item", () => {
		const queue = new Queue(2);
		queue.enqueue(1);
		expect(queue.peek()).toEqual(1);
	});

	it("should dequeue an item", () => {
		const queue = new Queue(2);
		queue.enqueue(1);
		queue.enqueue(2);
		expect(queue.dequeue()).toEqual(1);
		expect(queue.dequeue()).toEqual(2);
		expect(queue.isEmpty()).toEqual(true);
	});

	it("should throw an error when dequeue from an empty queue", () => {
		const queue = new Queue(2);
		expect(() => queue.dequeue()).toThrow();
	});

	it("should throw error when enqueueing and queue is full", () => {
		const queue = new Queue(2);
		queue.enqueue(1);
		queue.enqueue(2);
		expect(() => queue.enqueue(3)).toThrow();
	});

	it("should throw error on peek when queue is empty", () => {
		const queue = new Queue(2);
		expect(() => queue.peek()).toThrow();
	});

	it("isFull should return true when queue is full", () => {
		const queue = new Queue(2);
		queue.enqueue(1);
		queue.enqueue(2);
		expect(queue.isFull()).toEqual(true);
	});

	it("stack size should be infinite when we do not pass the size in constructor", () => {
		const queue = new Queue();
		queue.enqueue(1);
		queue.enqueue(2);
		expect(queue.isFull()).toEqual(false);
	});
});
