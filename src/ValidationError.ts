export class ValidationError extends Error {
  constructor(message: string) {
    super(message);

    // instanceof演算子の有効化
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
