import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
  { path: '', component: StoreComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent }
];

@NgModule({
  declarations: [StoreComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StoreModule { }
