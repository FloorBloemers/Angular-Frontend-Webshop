import {Component, EventEmitter, Output} from '@angular/core';
import {Product} from "./models/product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  loadedFeature = 'product'

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
