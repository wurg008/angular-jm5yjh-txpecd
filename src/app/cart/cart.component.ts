import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms"; //表单控件
import { CartService } from "../cart.service"; //添加商品服务

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items;
  checkoutForm; //存储表单
  constructor(
    private cartService: CartService, //购物车服务
    private formBuilder: FormBuilder //Form表单
  ) {
    //表单初期
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
  //表单提交
  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart(); //清空购物车
    this.checkoutForm.reset();

    console.warn("Your order has been submitted", customerData);
  }
}
