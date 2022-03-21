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
    },
    err=>{
      console.log("err",err);
      alert("Something went wrong");
    }
    )
  }
}
