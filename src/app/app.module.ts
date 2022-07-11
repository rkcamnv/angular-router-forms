import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiButtonModule,
  TuiLoaderModule
} from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {TuiMoneyModule} from "@taiga-ui/addon-commerce";
import {HttpClientModule} from "@angular/common/http";
import {TuiTableDirective, TuiTableModule} from "@taiga-ui/addon-table";
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import {TuiInputModule} from "@taiga-ui/kit";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductAddComponent,
    LoginComponent,
    UsersComponent,
    CategoriesComponent,
    HomeComponent,
    NotFoundComponent,
    CategoryDetailComponent,
    CategoryAddComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TuiRootModule,
        BrowserAnimationsModule,
        TuiDialogModule,
        TuiAlertModule,
        TuiMoneyModule,
        TuiButtonModule,
        HttpClientModule,
        TuiLoaderModule,
        TuiTableModule,
        TuiInputModule
    ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
