import { Component } from '@angular/core';
import { EmployeeService } from '../services/employeeservice.service';
import { Router } from '@angular/router';
import { Employee } from '../entity/Employee';

@Component({
  templateUrl: './addemployee.component.html'
})
export class AddemployeeComponent {

  employee_name:string;
  employee_salary:number;
  employee_age:number;
  profile_image:string;
 
  employee: Employee;

  // Services injected in constructor
  constructor(private employeeService: EmployeeService, private router: Router) { 
  }

  // Method to save an employee
  saveEmployee(){
    this.employee = new Employee(this.makeRandomID(), this.employee_name, this.employee_age, this.employee_salary,this.profile_image);
    this.employeeService.addEmployee(this.employee);
    this.router.navigate(["Employees"]);
  }

  // Method to cancel the add operation
  cancelEmployee(){
    this.router.navigate(["Employees"]);
  }

  // Creates random id for employee
  makeRandomID(): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
}
