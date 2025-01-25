export class Prompt {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  toString(): string {
    return this.message;
  }
}
