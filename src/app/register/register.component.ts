import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from'@angular/forms';
import {CustomerService } from'../services/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customers : any;
  display ="none";
  isDelete = "none";

  loginForm = new FormGroup({
    contact_email : new FormControl(""),
    password : new FormControl("")
  });

  customerForm = new FormGroup({
    id : new FormControl(""),
    first_name: new FormControl(""),
    last_name: new FormControl(""),
    user_name: new FormControl(""),
    contact_email: new FormControl(""),
    password : new FormControl(""),
    contact_phone: new FormControl("")
  });

  constructor(private _customerService: CustomerService) { }

 

    ngOnInit(): void {
      let res = this._customerService.getCustomers();
      res.subscribe( data => {
        this.customers = data;
        console.log(this.customers);
      });
    }
  
    //submit function 
  onSubmit(customerForm) {
		console.log(customerForm.value);
		this._customerService.createCustomer(customerForm);
		// modal display unvisible
		this.display = "none" ;
  }


  loginSubmit(loginForm){
    this._customerService.loginCustomer(loginForm);
    this.display ="none";
  }

  openModal(){
    this.display = "block";
  }

  onCloseHandled(flag)
{
  if( flag == "addItem")
  {
    this.display = "none";
  }
  else
  {
    this.isDelete = "none";

  }
}
}
