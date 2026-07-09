export interface CartLine {
  readonly id: string;
  readonly name: string;
  readonly imageUrl: string;
  readonly quantity: number;
  readonly unitPrice: number;
}