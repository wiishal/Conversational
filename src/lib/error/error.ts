export class AppError extends Error {
  public code: string;
  public status: number;

  constructor(message: string, status: number, code: string | "INTERNAL_ERROR") {
    super(message);
    this.code = code;
    this.status = status;
    Object.setPrototypeOf(this, AppError.prototype);
  }
}
