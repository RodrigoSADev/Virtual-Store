import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly API = 'https://ranekapi.origamid.dev/json/api/produto';
  loading: boolean = false;
  constructor(private http: HttpClient) {}
  getAllProducts(): Observable<Product[]> {
    this.loading = true;
    return this.http
      .get<Product[]>(this.API)
      .pipe(finalize(() => (this.loading = false)));
  }
  getProductById(id: string): Observable<Product> {
    this.loading = true;
    return this.http
      .get<Product>(`${this.API}/${id}`)
      .pipe(finalize(() => (this.loading = false)));
  }
}
