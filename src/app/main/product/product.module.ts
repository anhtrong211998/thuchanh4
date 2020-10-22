import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { OrderComponent } from './order/order.component';
// import { ProductComponent } from './product/product.component';
import { TypeComponent } from './type/type.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ 
    // OrderComponent,ProductComponent,
    TypeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      // {
      //   path: 'order',
      //   component: OrderComponent,
      // },
      // {
      //   path: 'product',
      //   component: ProductComponent,
      // },
      {
        path: 'type',
        component: TypeComponent,
      },
  ]),  
  ]
})
export class ProductModule { }
