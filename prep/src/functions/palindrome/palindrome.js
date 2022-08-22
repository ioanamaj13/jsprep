export const isPalindrome = (str) => {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
};

export const isPalindromeRecursive = (str) => {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindromeRecursive(str.slice(1, -1));
};
