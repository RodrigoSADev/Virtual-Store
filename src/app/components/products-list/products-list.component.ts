import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { AppState } from 'src/app/store/app.state';
import * as ProductActions from 'src/app/store/actions/product.actions';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products$: Observable<Product[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.products$ = this.store.select((state) => state.product.products);
    this.loading$ = this.store.select((state) => state.product.loading);
  }

  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadProducts());
  }
}
