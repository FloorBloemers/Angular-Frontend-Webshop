import {Component, EventEmitter, Output} from '@angular/core';
import { Product } from "../../models/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @Output() productWasSelected = new EventEmitter<Product>();
  products: Product[] = [
    new Product('t-shirt 1', 'this is a t-shirt 1', '../assets/images/shirt1.png', 10),
    new Product('t-shirt 2', 'this is a t-shirt 2', '../assets/images/shirt2.png', 20),
    new Product('t-shirt 3', 'this is a t-shirt 3', '../assets/images/shirt3.png', 30),
    new Product('t-shirt 4', 'this is a t-shirt 4', '../assets/images/shirt4.png', 40),
    new Product('t-shirt 5', 'this is a t-shirt 5', '../assets/images/shirt5.png', 50),
    new Product('t-shirt 6', 'this is a t-shirt 6', '../assets/images/shirt6.png', 60),
  ];

  onProductSelected(product: Product) {
    this.productWasSelected.emit(product);
  }
}
