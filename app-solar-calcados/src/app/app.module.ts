import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { SlideComponent } from './component/slide/slide.component';
import { BenefitsShowcaseComponent } from './component/benefits-showcase/benefits-showcase.component';
import { FooterComponent } from './component/footer/footer.component';
import { VisitUsMapsComponent } from './component/visit-us-maps/visit-us-maps.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { CategoryCardComponent } from './component/category-card/category-card.component';
import { CategoryListComponent } from './component/category-list/category-list.component';
import { FiltrableProductListComponent } from './component/filtrable-product-list/filtrable-product-list.component';
import { ProductFilterComponent } from './component/product-filter/product-filter.component';
import { CategoryFilterListComponent } from './component/category-filter-list/category-filter-list.component';
import { ProductsPageComponent } from './page/products-page/products-page.component';
import { BuyProductPageComponent } from './page/buy-product-page/buy-product-page.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { NotFoundPageComponent } from './page/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideComponent,
    BenefitsShowcaseComponent,
    FooterComponent,
    VisitUsMapsComponent,
    HomePageComponent,
    ProductCardComponent,
    ProductListComponent,
    CategoryCardComponent,
    CategoryListComponent,
    FiltrableProductListComponent,
    ProductFilterComponent,
    CategoryFilterListComponent,
    ProductsPageComponent,
    BuyProductPageComponent,
    ProductDetailComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
