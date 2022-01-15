import { Injectable } from '@angular/core';
import { Employee } from '../entity/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  allEmployees: Employee[] = [

  ];

  getAllEmployees(): Employee[] {
    return this.allEmployees;
  }

  addEmployee(employee: Employee) {
    this.allEmployees.push(employee);
  }


  updateEmployee(employee: Employee) {
    var updateEmployee = this.allEmployees.find(emp => emp.id == employee.id);
    updateEmployee.employee_name = employee.employee_name;
    updateEmployee.employee_age = employee.employee_age;
    updateEmployee.employee_salary = employee.employee_salary;
    updateEmployee.profile_image = employee.profile_image;
  }

  deleteEmployee(id: string) {
    this.allEmployees = this.allEmployees.filter(employee => employee.id != id);
  }


  getEmployee(id: string): Employee {
    return this.allEmployees.find(emp => emp.id == id);
  }
}
