import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRowsComponent } from './cart-rows/cart-rows.component';
import { CartService } from './cart.service';



@NgModule({
  declarations: [CartComponent,CartRowsComponent],
  providers:[CartService],
  imports: [
    CommonModule
  ],
  exports:[CartComponent]
})
export class CartModule { }
