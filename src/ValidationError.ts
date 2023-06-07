export class ValidationError<T = any> extends Error {
  private readonly _data: T;

  /**
   * @param message
   * @param data バリデーションに失敗した値
   */
  constructor(message: string, data: T) {
    super(message);
    this._data = data;

    // Error出力時にこのクラス名を表示
    // instanceof演算子の有効化
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }

  /**
   * バリデーションに失敗した値を取得する
   */
  get data() {
    return this._data;
  }
}

export const isValidationError = <T>(
  error: unknown,
): error is ValidationError<T> => {
  return error instanceof ValidationError;
};
