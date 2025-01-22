import { Routes } from '@angular/router';
import {CartComponent} from './components/cart/cart.component';
import {ItemDetailComponent} from './components/item-detail/item-detail.component';
import {HomeComponent} from './components/home/home.component';

export const routes: Routes = [
  {path: 'src/app/components/cart', component: CartComponent},
  {path: 'src/app/components/item-detail', component: ItemDetailComponent},
  {path: 'src/app/components/home', component: HomeComponent}
];
