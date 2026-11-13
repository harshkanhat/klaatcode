import { expect, test } from "bun:test";
import { parsePort } from "./port";

test("parses valid numeric and string ports", () => {
  expect(parsePort(8080)).toBe(8080);
  expect(parsePort("3001")).toBe(3001);
  expect(parsePort(" 443 ")).toBe(443);
  expect(parsePort("1")).toBe(1);
  expect(parsePort("65535")).toBe(65535);
});

test("uses the fallback for missing and blank values", () => {
  expect(parsePort(undefined)).toBe(3000);
  expect(parsePort("")).toBe(3000);
  expect(parsePort("   ", 8080)).toBe(8080);
});

test("preserves an explicitly supplied zero fallback", () => {
  expect(parsePort(undefined, 0)).toBe(0);
  expect(parsePort("invalid", 0)).toBe(0);
});

test("rejects non-integer and malformed values", () => {
  for (const value of ["abc", "3.5", "-1", "+8", "1e3", 2.5, Number.NaN, Number.POSITIVE_INFINITY]) {
    expect(parsePort(value as string | number, 9000)).toBe(9000);
  }
});

test("rejects values outside the valid port range", () => {
  for (const value of [0, 65536, -10, "0", "65536"]) {
    expect(parsePort(value as string | number, 7000)).toBe(7000);
  }
});
