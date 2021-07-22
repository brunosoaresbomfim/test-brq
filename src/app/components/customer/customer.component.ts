import { Component, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/shared/models/Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  @Output('customer')
  customer: Customer = new Customer();

  constructor() { }

  ngOnInit() {
  }

}
