import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
 
@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
 
  customer: Customer = new Customer();
  updated = false;

  constructor(private customerService: CustomerService) { }
 
  ngOnInit() {
  }

  updateCustomer(): void{
    this.updated = false;
    this.customer = new Customer();
  }

  update(){
    this.customerService.updateCustomer(this.customer.id,
      { name: this.customer.name, age: this.customer.age, active: this.customer.active})
      .subscribe(
        data=> {
          console.log(data);
          this.customer = data as Customer;
        },
     error => console.log(error));
     this.customer = new Customer();
  }

  Submit(){
    this.updated = true;
    this.update();
  }

}  