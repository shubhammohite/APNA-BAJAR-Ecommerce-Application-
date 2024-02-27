import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './dashboard/cart/cart.component';
import { ProductsComponent } from './dashboard/products/products.component';

const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products',component:ProductsComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
