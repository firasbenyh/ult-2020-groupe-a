import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


const routes: Routes = [
  { path: '', component: ShoppingCartComponent },
  { path: 'customer-info', component: CustomerInfoComponent }
];

@NgModule({
  declarations: [ShoppingCartComponent, CustomerInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShoppingCartModule { }
