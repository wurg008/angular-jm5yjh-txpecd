import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component"; //顶层组件
import { TopBarComponent } from "./top-bar/top-bar.component"; //导航栏
import { ProductListComponent } from "./product-list/product-list.component"; //商品一览
import { ProductAlertsComponent } from "./product-alerts/product-alerts.component"; //提示小窗
import { ProductDetailsComponent } from "./product-details/product-details.component"; //商品详细
import { CartService } from "./cart.service"; //购物车服务
import { CartComponent } from "./cart/cart.component"; //购物车一览

import { HttpClientModule } from "@angular/common/http";
import { ShippingComponent } from "./shipping/shipping.component"; //http模块导入

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailsComponent },
      { path: "cart", component: CartComponent },
      { path: "shipping", component: ShippingComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  bootstrap: [AppComponent],
  providers: [CartService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
