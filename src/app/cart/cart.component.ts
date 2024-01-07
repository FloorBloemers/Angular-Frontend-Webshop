import { Component } from '@angular/core'
import {Product} from "../models/product.model";
import {cartProduct} from "../models/cartProduct.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartProducts: cartProduct[] = [
    new cartProduct(new Product('t-shirt 1', 'this is a t-shirt 1', '../assets/images/shirt1.png', 10), 1),
    new cartProduct(new Product('t-shirt 2', 'this is a t-shirt 2', '../assets/images/shirt1.png', 20), 2),
  ];
}
