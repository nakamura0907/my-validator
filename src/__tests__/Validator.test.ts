import { Validator } from "../index";

describe("Validatorクラス", () => {
  it("Errorオブジェクトと一致する", () => {
    expect(Validator.email).toEqual(new Error("Not Implemented"));
  });
});

describe("メールアドレス", () => {
  it("通常", () => {
    const value = "aaa@example.com";
    const tmp = Validator.email(value);
    expect(tmp).toEqual(value);
  });
  it(".を二個含む", () => {
    const value = "bbb@sample.co.jp";
    const tmp = Validator.email(value);
    expect(tmp).toEqual(value);
  });

  it("@を含まない", () => {
    const value = "ccc.example.com";
    const tmp = Validator.email(value);
    expect(tmp).toEqual(new Error("Not Matched"));
  });
});
