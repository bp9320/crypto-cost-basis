let validations = require("./inputValidations");

// Tests

// Alphanumeric tests
describe("Test isAlphanumeric function", () => {
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
});

// Validate Quantity is a decimal value
describe("Test isPositiveNumber function", () => {
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
});

// Validate Transaction amount is two decimals max
describe("Test isNumberWithMaxTwoDecimals function", () => {
  test("Returns true if input is a positive number with two decimals", () => {
    expect(validations.isNumberWithMaxTwoDecimals(1.23)).toEqual(true);
  });

  test("Returns true if input is a positive integer", () => {
    expect(validations.isNumberWithMaxTwoDecimals(1)).toEqual(true);
  });

  test("Returns false if input is a positive number with more than two decimals", () => {
    expect(validations.isNumberWithMaxTwoDecimals(1.234)).toEqual(false);
  });

  test("Returns true if input is a negative number with two decimals", () => {
    expect(validations.isNumberWithMaxTwoDecimals(-1.23)).toEqual(true);
  });

  test("Returns true if input is a negative integer", () => {
    expect(validations.isNumberWithMaxTwoDecimals(-1)).toEqual(true);
  });

  test("Returns false if input is a negative number with more than two decimals", () => {
    expect(validations.isNumberWithMaxTwoDecimals(-1.234)).toEqual(false);
  });

  test("Returns true if input is zero", () => {
    expect(validations.isNumberWithMaxTwoDecimals(0)).toEqual(true);
  });

  test("Returns false if input is not of type 'number'", () => {
    expect(
      validations.isNumberWithMaxTwoDecimals({ test: "testObject" })
    ).toEqual(false);
  });

  test("Returns false if input is null", () => {
    expect(validations.isNumberWithMaxTwoDecimals(null)).toEqual(false);
  });

  test("Returns false if input is NaN", () => {
    expect(validations.isNumberWithMaxTwoDecimals(NaN)).toEqual(false);
  });
});

// Validate Transaction fee is two decimals max
