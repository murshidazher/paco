import mergeSortedArrays from "../mergeSortedArrays";

describe("Merge Array", () => {
  test("merge to sorted arrays", () => {
    const arr = mergeSortedArrays([0, 3, 4, 45], [4, 6, 32]);
    expect(arr).toEqual([0, 3, 4, 4, 6, 32, 45]);
  });
});
