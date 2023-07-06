import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Observable, map } from 'rxjs';
import { Product } from 'src/app/models/product';
import * as ProductActions from 'src/app/store/actions/product.actions';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<Product>;
  loading$: Observable<boolean>;
  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.product$ = this.store
      .select((state) => state.product.selectedProduct)
      .pipe(map((product) => product || ({} as Product)));
    this.loading$ = this.store.select((state) => state.product.loading);
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.store.dispatch(ProductActions.loadProduct({ productId }));
    }
  }
}
