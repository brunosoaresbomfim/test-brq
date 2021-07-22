import { AfterViewInit, Component, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Customer } from "src/app/shared/models/Customer";
import { CheckoutService } from "src/app/shared/services/checkout.service";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"],
})
export class CustomerComponent implements OnInit {
  customer: Customer = new Customer('', '');
  formCustomer: FormGroup;

  constructor(private checkoutService: CheckoutService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formCustomer = this.formBuilder.group({
      name: [null, Validators.nullValidator],
      identity: [null, Validators.nullValidator]
    });
  }

  blur() {
    this.checkoutService.transportCustomer(this.customer);
    console.log(this.customer);
  }
}
