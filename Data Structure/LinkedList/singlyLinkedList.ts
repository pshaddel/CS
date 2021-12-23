/**
 * Node of a singly linked list.
 * Each Node has a data and a pointer to the next node.
 */
export class Node<T> {
	public data: T;
	public next: Node<T> | null;
	constructor(data: T) {
		this.data = data;
		this.next = null;
	}
}

/**
 * Singly linked list.
 */
export class LinkedList<T> {
	public head: null | Node<T> = null;
	constructor(head?: Node<T>) {
		if (head) this.head = head;
		else this.head = null;
	}

	/**
	 * Clear the list by setting the head to null.
	 * Complexity: O(1)
	 */
	public clear() {
		this.head = null;
	}

	/**
	 * @returns the length of the linked list
	 * Complexity: O(n)
	 */
	public size() {
		let current = this.head;
		let counter = 0;
		while (current) {
			counter++;
			current = current.next;
		}
		return counter;
	}

	/**
	 * insertFirst is an alias for `insertAt` with index 0.
	 * Complexity: O(1)
	 * @returns void
	 * @param data gets the value and adds it to the linked list as first Node
	 */
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

	/**
	 * insertLast is an alias for insertAt with index = size()
	 * Complexity: O(n)
	 * @return void
	 * @param data insert the data at the end of the linked list
	 */
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

	/**
	 * removeFirsr removes the first Node of the linked list.
	 * Complexity: O(1)
	 * @return void
	 */
	public removeFirst() {
		if (this.head) {
			this.head = this.head.next;
		}
	}

	/**
	 * removeLast removes the last Node of the linked list.
	 * Complexity: O(n)
	 * @return void
	 */
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

	/**
	 * removeByValue removes the first Node with the given value.
	 * Complexity: O(n)
	 * @param data data of the Node to be removed
	 * @returns void
	 */
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

	/**
	 *
	 * @param data data to be searched
	 * @returns Node with the given data and null if not found
	 * Complexity: O(n)
	 * @returns
	 */
	public findByValue(data: T): Node<T> | null {
		let current = this.head;
		while (current) {
			if (current.data === data) {
				return current;
			}
			current = current.next;
		}
		return null;
	}

	/**
	 * getFirst returns the first Node of the linked list.
	 * Complexity: O(1)
	 * @returns the head of the linked list
	 */
	public getFirst() {
		return this.head;
	}

	/**
	 * getLast returns the last Node of the linked list.
	 * Complexity: O(n)
	 * @returns the last Node of the linked list
	 */
	public getLast() {
		let current = this.head;
		while (current?.next) {
			current = current.next;
		}
		return current;
	}

	/**
	 * getAt returns the Node at the given index.
	 * Complexity: O(n)
	 * @param index index of the Node to be returned
	 * @returns Node at the given index or null if not found
	 */
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

	/**
	 * insertAt inserts the given data at the given index.
	 * Complexity: O(n)
	 * @param index place of the Node to be inserted
	 * @param data data of the Node to be inserted
	 */
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

	/**
	 * removeAt removes the Node at the given index.
	 * Complexity: O(n)
	 * @param index index of the Node to be removed
	 */
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
	/**
	 * toString returns a string representation of the linked list.
	 * Complexity: O(n)
	 * @returns string representation of the linked list
	 */
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
