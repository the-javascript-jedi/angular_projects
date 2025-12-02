import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from '../store/products.state';
import { addProduct, removeProduct } from '../store/products.actions';
import { selectAllProducts } from '../store/products.selectors';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  products$: Observable<Product[]>;

  constructor(private store: Store) {
    this.products$ = this.store.select(selectAllProducts);
  }

  add(name: string) {
    if (!name) return;

    this.store.dispatch(
      addProduct({
        product: { id: Date.now(), name },
      })
    );
  }

  remove(id: number) {
    this.store.dispatch(removeProduct({ id }));
  }
}
