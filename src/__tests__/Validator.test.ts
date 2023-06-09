describe("validatorオブジェクト", () => {
  it("正規表現チェック", () => {
    const schema = validator.regex(/^[0-9]+$/);

    expect(schema.validate(123)).toEqual(123);
  });
  it("複数のチェックを行う", () => {
    const schema = validator
      .make()
      .required()
      .min(3)
      .build();
    
    expect(schema.validate("aaa")).toEqual("aaa");
  });
});

describe("Schemaクラス", () => {
  const schema = validator.regex(/^[0-9]+$/);

  const validValue = 123;
  const invalidValue = "abc";

  it("値または例外を返す", () => {
    expect(schema.validate(validValue)).toEqual(validValue);
    expect(() => schema.validate(invalidValue)).toThrow(ValidationError);
  });

  it("Resultクラスを返す", () => {
    expect(schema.validate(validValue)).toBeInstanceOf(Result);
    expect(schema.validate(invalidValue)).toBeInstanceOf(Result);
  });
})
