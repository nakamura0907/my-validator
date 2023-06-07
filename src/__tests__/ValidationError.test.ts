import { ValidationError, isValidationError } from "../ValidationError";

const failedValue = 1;
const errorMessage = `failed value: ${failedValue}`;
const validationError = new ValidationError(errorMessage, failedValue);

describe("ValidationError", () => {
  it("Errorクラスを継承しているか", () => {
    expect(validationError).toBeInstanceOf(Error);
    expect(validationError instanceof Error).toBeTruthy();
    expect(validationError instanceof ValidationError).toBeTruthy();
  });
  it("バリデーションに失敗した値のフィールドを持つ", () => {
    expect(validationError.data).toBe(failedValue);
  });
});

describe("isValidationError", () => {
  it("ValidationErrorクラスか判定ができる", () => {
    const invalidNull = null;
    const invalidValue = 1;
    const invalidObject = {};
    const invalidError = new Error("message");

    expect(isValidationError(invalidNull)).toBeFalsy();
    expect(isValidationError(invalidValue)).toBeFalsy();
    expect(isValidationError(invalidObject)).toBeFalsy();
    expect(isValidationError(invalidError)).toBeFalsy();
    expect(isValidationError(validationError)).toBeTruthy();
  });
});
