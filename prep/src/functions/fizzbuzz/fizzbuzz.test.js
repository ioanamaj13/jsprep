import { fizzbuzz, fizzbuzzMultiple, fizzbuzzRange } from "./fizzbuzz";

test("fizzbuzz", () => {
  expect(fizzbuzz(15)).toBe("FizzBuzz");
  expect(fizzbuzz(3)).toBe("Fizz");
  expect(fizzbuzz(5)).toBe("Buzz");
  expect(fizzbuzz(7)).toBe(7);
  expect(fizzbuzz(-9)).toBe("Fizz");
});

test("fizzbuzzMultiple", () => {
  expect(fizzbuzzMultiple(3, 5, 7, 9, 15)).toEqual([
    "Fizz",
    "Buzz",
    7,
    "Fizz",
    "FizzBuzz",
  ]);
});

test("fizzbuzzRange", () => {
  expect(fizzbuzzRange(1, 10)).toEqual([
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
  ]);
  expect(fizzbuzzRange(10, 20)).toEqual([
    "Buzz",
    11,
    "Fizz",
    13,
    14,
    "FizzBuzz",
    16,
    17,
    "Fizz",
    19,
    "Buzz",
  ]);
});
