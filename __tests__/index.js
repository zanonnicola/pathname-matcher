import pathnameMatcher from "../src";

describe("pathname-matcher Module", () => {
  it("should return true if the path is matched", () => {
    const result = pathnameMatcher("/search/myPage", "search/myPage");
    expect(result).toBeTruthy();
  });
  it("should return false if the path is not matched", () => {
    const result = pathnameMatcher("/search/myPage", "myPages");
    expect(result).toBeFalsy();
  });
  it("should throw an error if arg is missing", () => {
    expect(() => {
      pathnameMatcher("/search/jobs");
    }).toThrow();
  });
});
