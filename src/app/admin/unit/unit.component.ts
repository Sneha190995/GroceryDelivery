import { Component, OnInit } from '@angular/core';
import { UnitService } from '../../services/unit.service';
import { FormControl , FormGroup } from'@angular/forms';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
units :any;
showModal = false;
isDelete = "none";


unitForm = new FormGroup({
  id : new FormControl(""),
  unit_name : new FormControl(""),
  unit_short: new FormControl("")
});

constructor( private _unitService : UnitService) { }

  ngOnInit(): void {

    let res = this._unitService.getUnits();
    res.subscribe( data => {
      this.units = data;
      console.log(this.units);
    });
  }

  //submit function 
  onSubmit(unitForm) {
		console.log(unitForm.value);
		this._unitService.createUnit(unitForm);
		// modal display unvisible
		this.showModal = false ;
  }
  
  //after confirm deleting when press yes then unit is Delete
  deleteUnit = function() : void{
    this._unitService.deleteUnit(this.deleteId);
    this.isDelete = "none";
  };

  //delete button
  confirmdeletion = function( id : number):void{
    this.deleteId = id;

    //when click on delete button then modal in unvisible
    this.isDelete = "block";
  };

  onCloseHandled(flag){
    if( flag == "delete")
    {
      this.isDelete = "none";

    }
  }


  }



