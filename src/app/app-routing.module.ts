import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./components/products/products.component";
import {CategoriesComponent} from "./components/categories/categories.component";
import {UsersComponent} from "./components/users/users.component";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {AuthGuard} from "../guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {message: 'Page Not Found!'}
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
