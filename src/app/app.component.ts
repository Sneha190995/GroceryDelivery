import { Component } from '@angular/core';
import{ ItemService} from'./services/item.service';
import{ CustomerService } from './services/customer.service';
import { UnitService } from './services/unit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   items : any;
//   customers : any;
// units :any;
  constructor() {}
  ngOnInit() {
    // let resp = this._itemService.getItems();
		// resp.subscribe(data => {
		// 	this.items = data;
    //   console.log(this.items);
      
    // });
// //private _itemService : ItemService , private _customerService : CustomerService , private _unitService : UnitService
//     let res3 = this._customerService.getCustomers();
//     res3.subscribe( data => {
//       this.customers = data;
//       console.log(this.customers);
//     });

//     let res4 = this._unitService.getUnits();
//     res4.subscribe( data => {
//       this.units = data;
//       console.log(this.units);
//     });
  }



  }

