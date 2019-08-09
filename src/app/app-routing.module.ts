import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  // { path: '', component: AppComponent,},
  // , data: {breadcrumb: 'Home'}, loadChildren: ''
  { path: 'product-list', component: ProductListComponent}
  // , data: {breadcrumb: 'Home/All Albums'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
