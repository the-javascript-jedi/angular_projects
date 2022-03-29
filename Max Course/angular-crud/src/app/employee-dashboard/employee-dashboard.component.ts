import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { EmployeeModel } from '../Models/employee-dashboard.model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  formValue!:FormGroup;
  employeeData:any;
  showAddButton!:boolean;
  showUpdateButton!:boolean;
  constructor(private formBuilder:FormBuilder,private _apiService:ApiService) { }
  // create an object of type Employee Model
  employeeModelObj:EmployeeModel=new EmployeeModel();

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      mobile:[''],
      salary:['']
    })
    // Make API Call to get employees
    this.getAllEmployees();
  }
  // PostEmployee details
  postEmployeeDetails(){
    this.employeeModelObj.firstName=this.formValue.value.firstName;
    this.employeeModelObj.lastName=this.formValue.value.lastName;
    this.employeeModelObj.email=this.formValue.value.email;
    this.employeeModelObj.mobile=this.formValue.value.mobile;
    this.employeeModelObj.salary=this.formValue.value.salary;
    // Make APi request
    this._apiService.postEmployeeService(this.employeeModelObj).subscribe(postResponse=>{
      console.log("postResponse",postResponse);
      alert("Employee Added Successfully");
      this.formValue.reset();
      // close the modal after successfully submitting the form
      let refClose=document.getElementById('closeBtn');
      // Get a reference of Bootstrap cancel button and trigger the click event
      refClose!.click();
      // Make API Call to get employees
      this.getAllEmployees();
    },
    err=>{
      console.log("err",err);
      alert("Something went wrong");
    }
    )
  }

  // Get All Employees
  getAllEmployees(){
    this._apiService.getEmployeeService().subscribe(responseGet=>{
      this.employeeData=responseGet;
    })
  }

  // Delete Employees
  deleteEmployee(row:any){
    this._apiService.deleteEmployeeService(row.id).subscribe((responseDelete)=>{
      console.log("responseDelete",responseDelete);
      alert(`Employee withm ${row.id} is deleted!!!`);
      this.getAllEmployees();
    })
  }
  // Edit Employee - Fill row values to modal
  onEdit(row:any){
    this.showUpdateButton=true;
    this.showAddButton=false;
    // store employee id in the object on edit click
    this.employeeModelObj.id=row.id;

    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['salary'].setValue(row.salary);
  }
  // Update Employee Details
  updateEmployeeDetails(){
    // Create an object with updated values
     this.employeeModelObj.firstName=this.formValue.value.firstName;
    this.employeeModelObj.lastName=this.formValue.value.lastName;
    this.employeeModelObj.email=this.formValue.value.email;
    this.employeeModelObj.mobile=this.formValue.value.mobile;
    this.employeeModelObj.salary=this.formValue.value.salary;
    // Make API request
    this._apiService.updateEmployeeService(this.employeeModelObj,this.employeeModelObj.id).subscribe(responseUpdate=>{
      console.log("Updated Successfully",responseUpdate);
      alert(`Updated ${this.employeeModelObj.firstName} successfully!!!`);
      this.formValue.reset();
      // close the modal after successfully submitting the form
      let refClose=document.getElementById('closeBtn');
      // Get a reference of Bootstrap cancel button and trigger the click event
      refClose!.click();
      // Make API Call to get employees
      this.getAllEmployees();
    })
  }
  // Add Employee Click
  clickAddEmployee(){
    this.formValue.reset();
    this.showAddButton=true;
    this.showUpdateButton=false;
  }
}
