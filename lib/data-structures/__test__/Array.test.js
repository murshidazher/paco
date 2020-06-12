import Array from "../Array";

describe("Array", () => {
  test("check the length", () => {
    const arr = new Array(7);
    expect(arr.length).toEqual(7);
  });

  test("get item from the array", () => {
    const arr = new Array();
    arr.push(1);
    expect(arr.get(0)).toEqual(1);
  });

  test("add item to the array", () => {
    const arr = new Array();
    arr.push(1);
    arr.push(2);
    arr.push(3);
    expect(arr.get(2)).toEqual(3);
  });

  test("add item to the array and check the length", () => {
    const arr = new Array();
    arr.push(1);
    arr.push(2);
    arr.push(3);
    expect(arr.length).toEqual(3);
  });

  test("pop item from to the array", () => {
    const arr = new Array();
    arr.push(1);
    arr.push(2);
    expect(arr.pop()).toEqual(2);
  });

  test("pop item from to the array and check the length", () => {
    const arr = new Array();
    arr.push(1);
    arr.push(2);
    arr.pop();
    expect(arr.length).toEqual(1);
  });

  test("delete the item at the index of the array", () => {
    const arr = new Array();
    arr.push(1);
    arr.push(2);
    arr.push(3);
    arr.push(4);
    expect(arr.delete(2)).toEqual(3);
  });
});
