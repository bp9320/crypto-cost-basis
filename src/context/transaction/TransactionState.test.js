let validations = require("./inputValidations");

// Tests

// Alphanumeric tests
test("Returns true if input is alphanumeric string.", () => {
  expect(validations.isAlphanumeric("alphanumeric123")).toEqual(true);
});

test("Returns false if input is NOT alphanumeric string.", () => {
  expect(validations.isAlphanumeric("alphanumeric123!@#$@#")).toEqual(false);
});

test("Returns false if input is NOT a string.", () => {
  expect(validations.isAlphanumeric({ test: "testObject" })).toEqual(false);
});

test("Returns false if input is null.", () => {
  expect(validations.isAlphanumeric(null)).toEqual(false);
});

// Validate Timestamp is valid ISO-8601 format

// Validate Quantity is a decimal value

// Validate Transaction amount is two decimals max

// Validate Transaction fee is two decimals max
