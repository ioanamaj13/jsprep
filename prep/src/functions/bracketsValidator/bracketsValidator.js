export const bracketsValidator = (str) => {
  console.log(str);

  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
    "<": ">",
  };

  let stack = [];
  // Traverse each charater in input string...
  for (let idx = 0; idx < str.length; idx++) {
    // If open parentheses are present, push it to stack...

    if (str[idx] in brackets) {
      stack.push(brackets[str[idx]]);
      console.log("stack", stack);
    }

    // If a close bracket is found, check that it matches the last stored open bracket
    else if (stack.pop() !== str[idx]) {
      console.log("stack after pop", stack);
      return false;
    }
  }
  return !stack.length;
};
