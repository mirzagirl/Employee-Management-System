import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employeeservice.service';
import { Router } from '@angular/router';
import { Employee } from '../entity/Employee';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html'
})
export class EmployeeListComponent implements OnInit {
  _listFilterBy: string;
  al=false;
  allEmployees: Employee[];
  filteredList: Employee[];
  url=null;
  page=1;
  totalRec:number;
  // Service injected in constructor
  constructor(private employeeService:EmployeeService, private router: Router,private http:HttpClient) { }

  // Gets filter by value from the search box
  get listFilterBy(): string {
    return this._listFilterBy;
  }

  // Sets filter by value from the search box
  set listFilterBy(value: string) {
    this._listFilterBy = value;
    this.filteredList = this._listFilterBy ? this.performFilter(this._listFilterBy) : this.allEmployees;
  }

  
  performFilter(filterBy: string): Employee[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.allEmployees.filter((employee: Employee) => employee.employee_name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  // Initializes all employees list from employee service
  ngOnInit() {
    this.allEmployees = this.employeeService.getAllEmployees();
    this.filteredList = this.allEmployees;
    this._listFilterBy = "";
  }

  // Method to add an employee to the list
  addEmployee(){
    this.router.navigate(["AddEmployee"]);
  }
  getEmployee(){
    
     const url="http://dummy.restapiexample.com/api/v1/employees";
     this.http.get(url).subscribe(
      (r:any)=>{if(r.data.length>0){
        this.allEmployees.push(r.data);
    this.filteredList.push(r.data);}
        // console.log(r);
        // console.log(r.data[0]);
        // console.log(r.data[0].employee_name);
        // console.log(r.data[0].employee_age);
        // console.log(r.data[0].employee_salary);
        // console.log(r.data[0].profile_image);
       }
    )
    this.al=true;
  }
  getEmployeeFire(){
    
    this.http.
    get<any>('https://employeemangementsystem-f56c6-default-rtdb.firebaseio.com/data.json').
    subscribe(
      (reponse)=>{  console.log(reponse);
        
        this.allEmployees.push(reponse);
        this.filteredList =reponse;
        console.log(this.allEmployees[0]);
      }
    )
    this.al=true;
  }
  
  // Method to refresh the employee list after successful delete
  refreshList(){
    this.allEmployees = this.employeeService.getAllEmployees();
    this.filteredList = this.allEmployees;
  }

}