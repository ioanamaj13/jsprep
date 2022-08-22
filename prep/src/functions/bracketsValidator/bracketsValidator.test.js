import { bracketsValidator } from "./bracketsValidator";

test("bracketsValidator", () => {
  expect(bracketsValidator("(())")).toBe(true);

  expect(bracketsValidator("(()())")).toBe(true);
  expect(bracketsValidator("({}(<>)())")).toBe(true);

  expect(bracketsValidator("(")).toBe(false);
  expect(bracketsValidator("(()")).toBe(false);
  expect(bracketsValidator("({}(>)(<))")).toBe(false);
});
