export class Node<T> {
	public data: T;
	public next: Node<T> | null;
	constructor(data: T) {
		this.data = data;
		this.next = null;
	}
}

export class LinkedList<T> {
	public head: null | Node<T> = null;
	constructor(head?: Node<T>) {
		if (head) this.head = head;
		else this.head = null;
	}

	public clear() {
		this.head = null;
	}

	public size() {
		let current = this.head;
		let counter = 0;
		while (current) {
			counter++;
			current = current.next;
		}
		return counter;
	}

	public insertFirst(data: T) {
		if (this.head === null) {
			this.head = new Node(data);
		} else {
			const oldHead = this.head;
			const newNode = new Node(data);
			newNode.next = oldHead;
			this.head = newNode;
		}
	}

	public insertLast(data: T) {
		if (this.head === null) {
			this.head = new Node(data);
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = new Node(data);
		}
	}

	public removeFirst() {
		if (this.head) {
			this.head = this.head.next;
		}
	}

	public removeLast() {
		if (this.head) {
			if (this.head.next === null) {
				this.head = null;
			} else {
				let current = this.head;
				while (current?.next?.next) {
					current = current.next;
				}
				current.next = null;
			}
		}
	}

	public removeByValue(data: T) {
		let current = this.head;
		let previous: null | Node<T> = null;
		while (current) {
			if (current.data === data) {
				if (previous) {
					previous.next = current.next;
				} else {
					this.head = current.next;
				}
				return;
			}
			previous = current;
			current = current.next;
		}
	}

	public findByValue(data: T) {
		let current = this.head;
		while (current) {
			if (current.data === data) {
				return current;
			}
			current = current.next;
		}
		return null;
	}

	public getFirst() {
		return this.head;
	}

	public getLast() {
		let current = this.head;
		while (current?.next) {
			current = current.next;
		}
		return current;
	}

	public getAt(index: number) {
		let current = this.head;
		let counter = 0;
		while (current) {
			if (counter === index) {
				return current;
			}
			current = current.next;
			counter++;
		}
		return null;
	}

	public insertAt(index: number, data: T) {
		if (index === 0) {
			this.insertFirst(data);
		} else {
			const current = this.getAt(index - 1);
			if (current) {
				current.next = new Node(data);
			}
		}
	}

	public removeAt(index: number) {
		if (index === 0) {
			this.removeFirst();
		} else {
			const current = this.getAt(index - 1);
			if (current?.next) {
				current.next = current.next?.next;
			}
		}
	}

	public toString() {
		let current = this.head;
		let str = "";
		let counter = 0;
		while (current) {
			str +=
				(counter === 0 ? `[HEAD]:` : `[NODE${counter++}]:`) +
				current.data +
				(current.next ? " => " : "");
			counter++;
			current = current.next;
		}
		return str;
	}
}
