import { Component, OnInit } from '@angular/core';
import { Product } from './shared/models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  products: Product[] = [new Product('Refrigerante (2L)', 6.00),
  new Product('Arroz (1kg)', 8.00),
  new Product('Geléia (500g)', 7.00),
  new Product('Farinha Láctea (500g)', 15.00),
  new Product('Água (1,5L)', 4.00),
  new Product('Ovo (dúzia)', 12.00),
  new Product('Requeijão (200g)', 5.00)];
  itens: number[] = [];

  constructor(){ }

  ngOnInit(): void {  }

  add() {
    this.itens.push(1)
  }

  removeItem(i: number){
    console.log(i)
    console.log(this.itens)
  }
}
