import { testobj } from "./jsobject";

test("testobj", function () {
  expect(testobj.get()).toBe(0);
  expect(testobj.add(2).get()).toBe(2);
  expect(testobj.multiply(2).get()).toBe(4);
  expect(testobj.divide(2).get()).toBe(2);
  expect(testobj.get()).toBe(2);
});
