import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomerComponent } from './admin/customer/customer.component';
import { UnitComponent } from './admin/unit/unit.component';
import { ItemComponent } from './admin/item/item.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ItemService } from './services/item.service';
import { UnitService } from './services/unit.service';
import { CustomerService } from './services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CustomerComponent,
    UnitComponent,
    ItemComponent,
    DashboardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ItemService,
    UnitService,
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
