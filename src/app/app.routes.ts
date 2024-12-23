import { Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductsListComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];