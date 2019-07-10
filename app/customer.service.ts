import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../app/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  deneme: Customer[];
  private baseUrl = "http://localhost:8080/api/customers"

  constructor(private http: HttpClient) { }

  createCustomer(customer: Customer): Observable<HttpResponse<any>> {
    return this.http.post<Customer>(this.baseUrl + '/create', customer, { observe: 'response' });
  }

/*   updateCustomer(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 */
  deleteCustomer(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<Customer>(this.baseUrl + '/' + id, { observe: 'response' });
  }

  findAll(): Observable<HttpResponse<Customer[]>> {
    console.log(this.baseUrl);
    return this.http.get<Customer[]>(this.baseUrl, { observe: 'response' });
  }

  getCustomersByAge(age: number): Observable<HttpResponse<Customer[]>> {
    return this.http.get<Customer[]>(this.baseUrl + '/age/' + age, { observe: 'response' });
  }

  getCustomersByName(name: String): Observable<HttpResponse<Customer[]>> {
    return this.http.get<Customer[]>(this.baseUrl + '/name/' + name, { observe: 'response' });
  }

  deleteAll(): Observable<HttpResponse<any>> {
    return this.http.delete<Customer>(this.baseUrl + '/delete', { observe: 'response' });
  }
}
