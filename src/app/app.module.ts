import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';

import { AppComponent } from './app.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { Router, RouterModule, Routes  } from '@angular/router';
import { EmployeeListComponent } from './employeelist/employeelist.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import { SignComponent } from './sign/sign.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  
  { path:"Employees", component:EmployeeListComponent },
  { path:"AddEmployee", component:AddemployeeComponent },
  { path:"EditEmployee/:id", component:EditemployeeComponent },
  {
    path:'sign',component:SignComponent,
  },
  {path:"",component:DashboardComponent},
  { path:"**", redirectTo:'Employees' },
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeedetailComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    EmployeeListComponent,
    SignComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    PanelModule,
    HttpClientModule,
    CardModule,
    NgxPaginationModule,
    InputTextModule,
    ReactiveFormsModule,
 
    RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})
  ],
  providers:[],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
