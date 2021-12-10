import { LinkedList, Node } from "./singlyLinkedList";

describe("Data Structure: Singly Linked List", () => {
  it("should create a new singly linked list", () => {
    let list = new LinkedList<number>();
    expect(list.head).toBeNull();
    expect(list.size()).toBe(0);
  });

  it("should insert a new node to the singly linked list", () => {
    let list = new LinkedList<number>();
    list.insertFirst(1);
    expect(list.head).toBeDefined();
    expect(list.size()).toBe(1);
  });

  it("should insert a few node to the singly linked list", () => {
    let list = new LinkedList<number>();
    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(3);
    expect(list.head).toBeDefined();
    expect(list.size()).toBe(3);
  });

  it("should get first element of the singly linked list", () => {
    let list = new LinkedList<number>();
    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(3);
    expect(list.getFirst()?.data).toBe(3);
  });

  it("should get last element of the singly linked list", () => {
    let list = new LinkedList<number>();
    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(3);
    expect(list.getLast()?.data).toBe(1);
  });

  it("should get element at index of the singly linked list", () => {
    let list = new LinkedList<number>();
    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(3);
    expect(list.getAt(1)?.data).toBe(2);
  });

  it("should remove first element of the singly linked list", () => {
    let list = new LinkedList<number>();
    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(3);
    list.removeFirst();
    expect(list.getFirst()?.data).toBe(2);
  });

  it("should remove last element of the singly linked list", () => {
    let list = new LinkedList<number>();
    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(3);
    list.removeLast();
    expect(list.getLast()?.data).toBe(2);
  });

  it("should remove element at index of the singly linked list", () => {
    let list = new LinkedList<number>();
    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(3);
    list.removeAt(1);
    expect(list.getAt(1)?.data).toBe(1);
    list.removeAt(0);
    expect(list.getAt(0)?.data).toBe(1);
  });

  it("should return size of the singly linked list", () => {
    let list = new LinkedList<number>();
    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(3);
    expect(list.size()).toBe(3);
  });

  it("should delete nodes of linked list with clear method", () => {
    let list = new LinkedList<number>();
    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(3);
    list.clear();
    expect(list.size()).toBe(0);
  });

  it("should be able to insert node at tail by using insertLast", () => {
    let list = new LinkedList<number>();
    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);
    expect(list.getLast()?.data).toBe(3);
  });

  it("should be able to delete last element by removeLast", () => {
    let list = new LinkedList<number>();
    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);
    list.removeLast();
    expect(list.getLast()?.data).toBe(2);
    list.removeLast();
    expect(list.getLast()?.data).toBe(1);
    list.removeLast();
    expect(list.getLast()).toBeNull();
  });

  it("should be able to remove element by value", () => {
    const list = new LinkedList<number>();
    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(3);
    list.removeByValue(2);
    expect(list.getAt(1)?.data).toBe(1);
    expect(list.findByValue(2)).toBeNull();
    list.removeByValue(3);
    expect(list.getAt(0)?.data).toBe(1);
    expect(list.findByValue(3)).toBeNull();
    list.removeByValue(1);
    expect(list.getAt(0)).toBeNull();
  });

  it("we should be able to insert at specific index by insertAt", () => {
    const list = new LinkedList<number>();
    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(3);
    list.insertAt(2, 4);
    expect(list.getAt(2)?.data).toBe(4);
    list.insertAt(0, 5);
    expect(list.getAt(0)?.data).toBe(5);
  });

  it("we should be able to print the linkedlist", () => {
    const list = new LinkedList<number>();
    list.insertFirst(1);
    list.insertFirst(2);
    expect(list.toString()).toBe("[HEAD]:2 => [NODE1]:1");
  });

  it("should find element by value", () => {
    const list = new LinkedList<number>();
    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(3);
    expect(list.findByValue(2)?.data).toBe(2);
  });

  it("should be able to create a linkedList by passing a node", () => {
    const node = new Node(1);
    const list = new LinkedList<number>(node);
    expect(list.getFirst()?.data).toBe(1);
  });
});
