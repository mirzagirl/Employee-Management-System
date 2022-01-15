import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../entity/Employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employeeservice.service';
import { Router } from '@angular/router/';

@Component({
  templateUrl: './editemployee.component.html'
})
export class EditemployeeComponent implements OnInit {

  employee: Employee;


  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    var id = this.route.snapshot.params["id"];
    this.employee = this.employeeService.getEmployee(id);
  }


  updateEmployee(){
    this.employeeService.updateEmployee(this.employee);
    this.router.navigate(["Employees"]);
  }

  cancelEmployee(){
    this.router.navigate(["Employees"]);
  }
}
