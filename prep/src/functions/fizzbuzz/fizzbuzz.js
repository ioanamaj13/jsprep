//single numeric input
export const fizzbuzz = (num) => {
  let output = "";

  if (num % 3 === 0) {
    output += "Fizz";
  }

  if (num % 5 === 0) {
    output += "Buzz";
  }

  if (output === "") {
    output = num;
  }

  return output;
};

//multiple numeric inputs
export const fizzbuzzMultiple = (...args) => {
  return args.map(fizzbuzz);
};

//numeric range input
export const fizzbuzzRange = (start, end) => {
  let output = [];
  for (let i = parseInt(start); i <= parseInt(end); i++) {
    output.push(fizzbuzz(i));
  }
  return output;
};
