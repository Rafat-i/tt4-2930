import { Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { GithubUsersComponent } from './components/github-users/github-users.component';

export const routes: Routes = [
  {path: 'counter', component: CounterComponent},
  {path: 'products', component: ListProductsComponent},
  {path: 'github', component: GithubUsersComponent}
];
