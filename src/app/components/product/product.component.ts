import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input('list')
  products: Product[] = [];
  productSelected: Product;
  quantity: number = 1;
  priceOld: number = 0;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
  }

  backPrice() {
    this.productSelected.price = this.priceOld;
  }

  verifyPrice() {
    if(this.productSelected.price > this.priceOld) {
      this.alertService.error('Você não pode escolher um preço acima/igual ao preço original.');
      this.productSelected.price = this.priceOld;
    }
  }

  selectedItem() {
    //console.log(this.productSelected)
    this.priceOld = this.productSelected.price;
  }

  desc() {
    if(this.productSelected) {
      if(this.quantity > 1) {
        this.quantity-=1;
        this.productSelected.price = this.priceOld * this.quantity;
      } else {
        this.backPrice();
      }
    }
  }

  asc() {
    if(this.productSelected) {
      this.quantity = this.quantity + 1;
      this.productSelected.price = this.priceOld * this.quantity;
    }
  }

}
