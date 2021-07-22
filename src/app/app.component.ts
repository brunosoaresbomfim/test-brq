import { Component, Input, OnInit } from "@angular/core";
import { Customer } from "./shared/models/Customer";
import { Product } from "./shared/models/Product";
import { CheckoutService } from "./shared/services/checkout.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  products: Product[];
  itens: number[] = [];

  customer: Customer;
  productRemoved: Product;

  constructor(private checkoutService: CheckoutService) {
    this.products = this.checkoutService.getProducts();
    this.customer = this.checkoutService.customers();
  }

  ngOnInit(): void {
    this.checkoutService.transferCustomer.subscribe(res => this.customer = res);
  }

  add() {
    this.itens.push(this.itens.length + 1);
    //console.log(this.customer);
    this.checkoutService.transferProduct.subscribe(res => this.productRemoved = res);
    this.checkoutService.removeProductSelect(this.productRemoved);
  }

  removeItem(i: number) {
    this.itens.splice(this.itens.findIndex(e => e === i) - 1 ,1);

    if(this.productRemoved) {
      this.products.push(this.productRemoved);
    }
    //console.log(this.productRemoved)
  }
}
