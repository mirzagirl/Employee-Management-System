export class Employee {
    id: string;
    employee_name: string;
    
    employee_age: number;
    employee_salary: number;
    profile_image:string;


    constructor(id: string,
        employee_name: string,
        
        employee_age: number,
        employee_salary: number,
        profile_image:string,
        ) {
        this.id = id;
        this.employee_name =employee_name;
        this.employee_age=employee_age;
        this.employee_salary =employee_salary;
        this.profile_image=this.profile_image
    }
}