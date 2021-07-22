import { Injectable, EventEmitter } from '@angular/core';
import { Customer } from '../models/Customer';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  products: Product[];
  customer: Customer;
  transferCustomer: EventEmitter<any> = new EventEmitter();
  transferProduct: EventEmitter<any> = new EventEmitter();

  constructor() { }

  getProducts(): Product[] {
    this.products = [new Product('Refrigerante (2L)', 6.00),
    new Product('Arroz (1kg)', 8.00),
    new Product('Geléia (500g)', 7.00),
    new Product('Farinha Láctea (500g)', 15.00),
    new Product('Água (1,5L)', 4.00),
    new Product('Ovo (dúzia)', 12.00),
    new Product('Requeijão (200g)', 5.00)];
    return this.products;
  }

  transportProduct(dados: Product){
    this.transferProduct.emit(dados);
  }

  transportCustomer(dados: Customer){
    this.transferCustomer.emit(dados);
  }

  removeProductSelect(productSelected: Product) {
    this.products.splice(this.products.indexOf(productSelected), 1);
  }


  customers() : Customer {
    return this.customer;
  }

  setCustomer(name: string, identity: string): void {
    this.customer = new Customer(name, identity);
  }
}
