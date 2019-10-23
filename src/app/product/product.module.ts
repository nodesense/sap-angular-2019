import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';



@NgModule({
  declarations: [
      ProductListComponent,
      ProductEditComponent,
      ProductSearchComponent, 

      //100 of components
      // some may be private, controls, reusable...
    ],
  imports: [
    CommonModule,
     RouterModule,

     FormsModule,
     ReactiveFormsModule
  ]
})
export class ProductModule { }
