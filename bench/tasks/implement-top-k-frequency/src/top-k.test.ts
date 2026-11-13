import { expect, test } from "bun:test";
import { topKFrequent } from "./top-k.js";

test("returns values in descending frequency order", () => {
  expect(topKFrequent(["a", "b", "a", "c", "b", "a"], 2)).toEqual(["a", "b"]);
});

test("preserves first-seen order when frequencies tie", () => {
  expect(topKFrequent(["b", "a", "c", "a", "b", "c"], 3)).toEqual(["b", "a", "c"]);
});

test("returns each value only once", () => {
  expect(topKFrequent(["x", "x", "y", "z"], 10)).toEqual(["x", "y", "z"]);
});

test("returns an empty array for empty input or non-positive k", () => {
  expect(topKFrequent([], 3)).toEqual([]);
  expect(topKFrequent(["a", "a"], 0)).toEqual([]);
  expect(topKFrequent(["a", "a"], -1)).toEqual([]);
});
