import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import {delay, map, Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import { IProductResponse } from '../interfaces/response';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products = 'products';

  private url = environment.endPoint;

  constructor(private http: HttpClient) {}

  getProducts = (): Observable<IProduct[]> =>
    this.http
      .get<IProductResponse>(`${this.url}/${this.products}`)
      .pipe(
        delay(500),
        map((response) => response.data));
}
