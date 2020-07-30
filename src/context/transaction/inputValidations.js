// Validate input is alphanumeric
const isAlphanumeric = (textString) => {
  if (typeof textString !== "string") {
    return false;
  }
  return !!textString.match(/^[0-9a-z]+$/i);
};

// Validate Quantity is a decimal value
const isPositiveNumber = (input) => {
  if (typeof input !== "number") {
    return false;
  }
  return input > 0;
};
// Validate Transaction amount is two decimals max

// Validate Transaction fee is two decimals max

module.exports.isAlphanumeric = isAlphanumeric;
module.exports.isPositiveNumber = isPositiveNumber;
