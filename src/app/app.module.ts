import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ProductListComponent } from './components/product-list/product-list.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product/admin-product.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard/dashboard.component';
import { HomePageComponent } from './pages/home-page/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found/page-not-found.component';
import { ProductAddComponent } from './pages/product-add/product-add/product-add.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail/product-detail.component';
import { ProductEditComponent } from './pages/product-edit/product-edit/product-edit.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout/base-layout.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AdminProductComponent,
    DashboardComponent,
    HomePageComponent,
    PageNotFoundComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductEditComponent,
    AdminLayoutComponent,
    BaseLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
