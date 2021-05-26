import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  

  constructor(private http : HttpClient) { }
//in getItems call get method 
  getItems() {
          return this.http.get("http://localhost:5000/myitems/items");
  }
  
  //delete api
  deleteItem = function( id ){
    console.log("Inside Service" , id);
    this.http
    .delete("http://localhost:5000/myitems/items/" + id)
    .subscribe(data => {
      console.log( data);
    });
  };

   //post 
   createItem = function( itemForm ){
    console.log("Inside Service" , itemForm);
    this.http
    .post("http://localhost:5000/myitems/items/" , itemForm.value)
    .subscribe(data => {
      console.log( data);
    });
  };
}
