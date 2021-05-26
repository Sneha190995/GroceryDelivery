import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private http : HttpClient) { }

  //get 
  getUnits()
  {
    return this.http.get("http://localhost:5000/myunits/units");
   }


  //delete 
  deleteUnit = function( id ){
    console.log("Inside Service" , id);
    this.http
    .delete("http://localhost:5000/myunits/units/" + id).subscribe(data => {
      console.log( data);
    });
  };

  //post 
  createUnit = function( unitForm ){
    console.log("Inside Service" , unitForm);
    this.http
    .post("http://localhost:5000/myunits/units/" , unitForm.value)
    .subscribe(data => {
      console.log( data);
    });
  };
 }
 