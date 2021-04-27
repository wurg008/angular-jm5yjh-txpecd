import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; //http内置模块引入

@Injectable()
export class CartService {
  //构造器注入http
  constructor(private http: HttpClient) {}

  items = [];

  //商品追加到购物车
  addToCart(product) {
    this.items.push(product);
  }
  //购物车商品一览
  getItems() {
    return this.items;
  }
  //清空购物车
  clearCart() {
    this.items = [];
    return this.items;
  }
  //商品价格
  getShippingPrices() {
    return this.http.get("/assets/shipping.json");
  }
}
