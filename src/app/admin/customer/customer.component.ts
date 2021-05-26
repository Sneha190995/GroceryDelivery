import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { FormControl , FormGroup } from'@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
customers : any;
showModal = false;
isDelete ="none";

customerForm = new FormGroup({
  id : new FormControl(""),
  first_name: new FormControl(""),
  last_name: new FormControl(""),
  user_name: new FormControl(""),
  password: new FormControl(""),
  time_inserted: new FormControl(""),
  confirmation_code: new FormControl(""),
  time_confirmed: new FormControl(""),
  contact_email: new FormControl(""),
  contact_phone: new FormControl(""),
  city_id: new FormControl(""),
  address: new FormControl(""),
  delivery_city_id: new FormControl(""),
  delivery_address: new FormControl("")
});
  constructor( private _customerService : CustomerService) { }

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
		this.showModal = false ;
  }


 //after confirm deleting when press yes then unit is Delete
 deleteCustomer = function() : void{
  this._customerService.deleteCustomer(this.deleteId);
  this.isDelete = "none";
};

//delete button
confirmdeletion = function( id : number):void{
  this.deleteId = id;

  
  this.isDelete = "block";
};

onCloseHandled(flag)
{
  if( flag == "delete")
  {
    this.isDelete = "none";

  }
}

}
