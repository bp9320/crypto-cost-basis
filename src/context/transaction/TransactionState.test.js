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

// Validate Quantity is a decimal value
test("Returns true if input is a positive, decimal value", () => {
  expect(validations.isPositiveNumber(3.245)).toEqual(true);
});

test("Returns true if input is a positive integer", () => {
  expect(validations.isPositiveNumber(3)).toEqual(true);
});

test("Returns false if input is a NOT a positive decimal value", () => {
  expect(validations.isPositiveNumber(-36.24)).toEqual(false);
});

test("Returns false if input is a NOT a positive integer value", () => {
  expect(validations.isPositiveNumber(-36)).toEqual(false);
});

test("Returns false if input is zero", () => {
  expect(validations.isPositiveNumber(0)).toEqual(false);
});

test("Returns false if input is a NOT a numerical value", () => {
  expect(validations.isPositiveNumber({ test: "testObject" })).toEqual(false);
});

test("Returns false if input is null", () => {
  expect(validations.isPositiveNumber(null)).toEqual(false);
});

// Validate Transaction amount is two decimals max

// Validate Transaction fee is two decimals max
