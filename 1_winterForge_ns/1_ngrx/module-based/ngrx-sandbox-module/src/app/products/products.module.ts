import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';

import { StoreModule } from '@ngrx/store';
import { productsReducer } from './store/products.reducer';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,

    StoreModule.forFeature('products', productsReducer),
  ],
})
export class ProductsModule {}
