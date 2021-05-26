import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
loggedIn = false;

  constructor(private http : HttpClient ) { }

  
  getCustomers() {
    return this.http.get("http://localhost:5000/mycustomers/customers");
}

//delete api
deleteCustomer = function( id ){
  console.log("Inside Service" , id);
  this.http
  .delete("http://localhost:5000/mycustomers/customers/" + id)
  .subscribe(data => {
    console.log( data);
  });
}
   //post 
   createCustomer = function( customerForm ){
    console.log("Inside Service" , customerForm);
    this.http
    .post("http://localhost:5000/mycustomers/customers/" , customerForm.value)
    .subscribe(data => {
      console.log( data);
    });
  };

  
  loginCustomer = function(loginForm){
    console.log("Inside Service" , loginForm);
    let info;
    this.http
    .post("http://localhost:5000/mycustomers/login/" , loginForm.value)
    .subscribe(data => {
      info =data;
      console.log("asdfgg",info);
      if(info.id){
        console.log("Inside",true);
        this.loggedIn = true;
      }
      else{
        this.loggedIn = false;
      }
    });
  };

}