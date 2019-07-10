import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.scss']
})
export class SearchCustomersComponent implements OnInit {
  customers :Customer[];
  customers2 :Customer[];
  age: number;
  name: any;

  constructor(private dataService: CustomerService) { }

  ngOnInit() {
    this.age = 0;
  }

  private searchCustomers() {
    this.dataService.getCustomersByAge(this.age)
      .subscribe(customers =>{
         this.customers = customers.body;
      } );   
  }

  private searchNameCustomers() {
    this.dataService.getCustomersByName(this.name)
      .subscribe(customers =>{
         this.customers2 = customers.body;
      } );   
  }

  onSubmit() {
    this.searchCustomers();
  }

  Submit() {
    this.searchNameCustomers();
  }
}