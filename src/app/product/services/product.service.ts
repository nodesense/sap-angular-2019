import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http
               .get<Product[]>(`${environment.apiEndPoint}/api/products`);
  }

  getBrands(): Observable<Brand[]> {
    return this.http
               .get<Brand[]>(`${environment.apiEndPoint}/api/brands`);
  }


  getProduct(id: number): Observable<Product> {
    return this.http
               .get<Product>(`${environment.apiEndPoint}/api/products/${id}`);
  }



}
