import {Product} from "./product.model";

export class cartProduct {
  public Product: Product;
  public amount: number;

  constructor(Product: Product, amount: number) {
    this.Product = Product;
    this.amount = amount;
  }
}
