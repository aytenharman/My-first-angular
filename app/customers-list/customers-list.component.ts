import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Observable } from 'rxjs';


@Component({
  selector: 'customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  customers: Observable<Customer[]>;
  customers2: Array<Customer> = new Array<Customer>();

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteCustomers() {
    this.customerService.deleteAll()
      .subscribe(
        data => {
          this.reloadData();
        });  
  }

  reloadData() {
    this.customerService.findAll().subscribe(
      data => {
        console.log(data.body);
        this.customers2 = data.body;
      } 
    )
  }

  deleteCustomer(customer: Customer) {
    console.log(customer);
    this.customerService.deleteCustomer(customer.id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}