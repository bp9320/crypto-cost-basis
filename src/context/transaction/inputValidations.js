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

// Validate number is two decimals max
const isNumberWithMaxTwoDecimals = (input) => {
  if (typeof input !== "number" || isNaN(input)) {
    return false;
  }
  const inputString = input.toString();
  const decimal = inputString.split(".")[1];
  const hasNoDecimal = !decimal;
  return hasNoDecimal || decimal.length <= 2;
};

module.exports.isAlphanumeric = isAlphanumeric;
module.exports.isPositiveNumber = isPositiveNumber;
module.exports.isNumberWithMaxTwoDecimals = isNumberWithMaxTwoDecimals;
