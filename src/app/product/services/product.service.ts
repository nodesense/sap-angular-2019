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


  saveProduct(product: Product): Observable<any> {
    if (product.id) { //updating existing product using put method
      return this.http.put(`${environment.apiEndPoint}/api/products/${product.id}`, product);
    } else  { // new product, insert, using post 
      return this.http.post(`${environment.apiEndPoint}/api/products`, product);
    }
  }


}
