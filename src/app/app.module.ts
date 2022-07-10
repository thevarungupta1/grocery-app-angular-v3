import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// built-in module
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

// modules
import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CategoryComponent,
    HomePageComponent,
    ProductPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    SubCategoryComponent,
    ProductsComponent,
    ProductDetailPageComponent,
    PageNotFoundComponent,
    RegisterPageComponent,
    LoginPageComponent,

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
