import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyProductPageComponent } from './page/buy-product-page/buy-product-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { NotFoundPageComponent } from './page/not-found-page/not-found-page.component';
import { ProductsPageComponent } from './page/products-page/products-page.component';


const routes: Routes = [
  {
    path:'produto/:id',
    component:BuyProductPageComponent
  },
  {
    path:'produtos',
    component: ProductsPageComponent
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path:'**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
