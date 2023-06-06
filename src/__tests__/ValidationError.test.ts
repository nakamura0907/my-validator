import { ValidationError, isValidationError } from "../ValidationError";

describe("ValidationError", () => {
  it("Errorクラスを継承しているか", () => {
    const validationError = new ValidationError("message");

    expect(validationError).toBeInstanceOf(Error);
    expect(validationError instanceof Error).toBeTruthy();
    expect(validationError instanceof ValidationError).toBeTruthy();
  });
});

describe("isValidationError", () => {
  it("ValidationErrorクラスか判定ができる", () => {
    const invalidValue = 1;
    const invalidObject = {};
    const invalidError = new Error("message");
    const validationError = new ValidationError("message");

    expect(isValidationError(invalidValue)).toBeFalsy();
    expect(isValidationError(invalidObject)).toBeFalsy();
    expect(isValidationError(invalidError)).toBeFalsy();
    expect(isValidationError(validationError)).toBeTruthy();
  });
});
