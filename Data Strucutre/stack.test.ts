import { Stack } from "./Stack";

describe("Data Strtucture: Stack", () => {
  it("we should be able to initiate an empty stack with passing max size", () => {
    const stack = new Stack(5);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.isFull()).toBe(false);
  });
  it("we should be able to add item to stack and peek this item", () => {
    const stack = new Stack(5);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.isFull()).toBe(false);
    expect(stack.peek()).toBe(1);
  });

  it("we should be able to remove item from stack", () => {
    const stack = new Stack(5);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.isFull()).toBe(false);
  });
});
