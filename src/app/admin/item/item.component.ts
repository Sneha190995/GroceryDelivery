import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { FormControl , FormGroup } from'@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
items : any;
showModal = false;
isDelete = "none";

itemForm = new FormGroup({
  id : new FormControl(""),
  item_name: new FormControl(""),
  price: new FormControl(""),
  item_photo: new FormControl(""),
  description: new FormControl(""),
  unit_id: new FormControl("")
});
// in constructor
  constructor(private _itemService : ItemService) {}

  ngOnInit(): void {
    let res = this._itemService.getItems();
    res.subscribe( data => {
      this.items = data;
      console.log(this.items);
    });
  }


  //submit function 
  onSubmit(itemForm) {
		console.log(itemForm.value);
		this._itemService.createItem(itemForm);
		// modal display unvisible
		this.showModal = false ;
  }

  //after confirm deleting when press yes then unit is Delete
  deleteItem = function() : void{
    this._itemService.deleteItem(this.deleteId);
    this.isDelete = "none";
  };

  //delete button
  confirmdeletion = function( id : number):void{
    this.deleteId = id;

    
    this.isDelete = "block";
  };

  onCloseHandled(flag){
    if( flag == "delete")
    {
      this.isDelete = "none";

    }
  }


  
}
