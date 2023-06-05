import { Validator } from "../index";

describe("Validatorクラス", () => {
  it("Errorオブジェクトと一致する", () => {
    expect(Validator).toEqual(new Error("Not Implemented"));
  });
});
