import { ValidationError } from "../ValidationError";

describe("ValidationErrorクラス", () => {
  it("Errorクラスを継承しているか", () => {
    const validationError = new ValidationError("message");

    expect(validationError).toBeInstanceOf(Error);
    expect(validationError instanceof Error).toBeTruthy();
    expect(validationError instanceof ValidationError).toBeTruthy();
  });
});
