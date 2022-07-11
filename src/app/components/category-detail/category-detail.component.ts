import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, switchMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { ICategoryDetail } from '../../interfaces/category';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent implements OnInit {
  category: ICategoryDetail = null as any;

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory = () =>
    this.route.params
      .pipe(
        distinctUntilChanged(),
        switchMap(({ slug }) =>
          this.categoriesService
            .getCategory(slug)
            .pipe(tap((category) => (this.category = category)))
        )
      )
      .subscribe();
}
