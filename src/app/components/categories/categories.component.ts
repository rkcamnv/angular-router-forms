import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../interfaces/category';
import { Observable } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';
import {TuiTableDirective} from "@taiga-ui/addon-table";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories$: Observable<ICategory[]> = new Observable<ICategory[]>();
  columns = ['_id','name','slug'];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories = () =>
    (this.categories$ = this.categoriesService.getCategories());
}
