import { add } from "./add";

describe("add function", () => {
  it("adds two numbers correctly", () => {
    expect(add(1,2)).toBe(3)
  });
});