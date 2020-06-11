import Array from "../Array";

describe("Array", () => {
  test("check the length", () => {
    const arr = new Array(7);
    expect(arr.length).toEqual(7);
  });
});
