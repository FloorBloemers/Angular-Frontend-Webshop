import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent{
  @Input() product!: Product;
  @Output() productSelected = new EventEmitter<void>();

  onSelected() {
    this.productSelected.emit();
  }
}
