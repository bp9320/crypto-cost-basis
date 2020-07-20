// Validate input is alphanumeric
const isAlphanumeric = (textString) => {
  if (typeof textString !== "string") {
    return false;
  }
  return !!textString.match(/^[0-9a-z]+$/i);
};

// Validate Timestamp is valid ISO-8601 format

// Validate Quantity is a decimal value

// Validate Transaction amount is two decimals max

// Validate Transaction fee is two decimals max

module.exports.isAlphanumeric = isAlphanumeric;
