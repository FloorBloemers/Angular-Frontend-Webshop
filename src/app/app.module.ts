import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { AppDropdownDirective } from './shared/app.dropdown.directive';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { CartEditComponent } from './cart/cart-edit/cart-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponent,
    ProductListComponent,
    HeaderComponent,
    AppDropdownDirective,
    ProductDetailComponent,
    CartEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
