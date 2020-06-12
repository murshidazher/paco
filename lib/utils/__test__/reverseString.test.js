import reverseString from "../reverseString";

describe("Reverse String", () => {
  test("reverse a string", () => {
    const str = reverseString("Hi this is a test");
    expect(str).toMatch("tset a si siht iH");
  });
});
