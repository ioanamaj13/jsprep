import { isPalindrome, isPalindromeRecursive } from "./palindrome";

test("isPalindrome", () => {
  expect(isPalindrome("racecar")).toBe(true);
  expect(isPalindrome("racecar racecar")).toBe(true);
  expect(isPalindrome("abba")).toBe(true);
  expect(isPalindrome("ab")).toBe(false);
  expect(isPalindrome("a")).toBe(true);
  expect(isPalindrome("")).toBe(true);
  expect(isPalindrome(" ")).toBe(true);
  expect(isPalindrome(" ! ! ")).toBe(true);

  expect(isPalindrome("racecar racecar ")).toBe(false);
  expect(isPalindrome("abc")).toBe(false);
  expect(isPalindrome("abc ")).toBe(false);
  expect(isPalindrome("123")).toBe(false);
});

test("isPalindromeRecursive", () => {
  expect(isPalindromeRecursive("racecar")).toBe(true);
  expect(isPalindromeRecursive("racecar racecar")).toBe(true);
  expect(isPalindromeRecursive("abba")).toBe(true);
  expect(isPalindromeRecursive("ab")).toBe(false);
  expect(isPalindromeRecursive("a")).toBe(true);
  expect(isPalindromeRecursive("")).toBe(true);
  expect(isPalindromeRecursive(" ")).toBe(true);
  expect(isPalindromeRecursive(" ! ! ")).toBe(true);
});
