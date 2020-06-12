function reverseString(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string")
    return "Exception: Expected a string";

  // str.splir('').reverse().join('')
  const backwards = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  console.log(backwards);

  return backwards.join("");
}

export default reverseString;
