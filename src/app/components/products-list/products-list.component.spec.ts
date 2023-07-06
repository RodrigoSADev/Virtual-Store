import { StoreModule } from '@ngrx/store';
import { ProductsListComponent } from './products-list.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { productReducer } from 'src/app/store/reducers/product.reducer';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListComponent],
      imports: [StoreModule.forRoot({ product: productReducer })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
