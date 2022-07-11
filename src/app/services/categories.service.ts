import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { delay, map, Observable } from 'rxjs';
import { ICategory, ICategoryDetail } from '../interfaces/category';
import {
  ICategoryDetailResponse,
  ICategoryResponse,
} from '../interfaces/response';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private categories = 'categories';
  private url = environment.endPoint;

  constructor(private http: HttpClient) {}

  getCategories = (): Observable<ICategory[]> =>
    this.http.get<ICategoryResponse>(`${this.url}/${this.categories}`).pipe(
      delay(500),
      map((response) => response.data)
    );

  getCategory = (slug: string): Observable<ICategoryDetail> =>
    this.http
      .get<ICategoryDetailResponse>(`${this.url}/${this.categories}/${slug}`)
      .pipe(
        map((response) => response.data)
      );
}
