import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {EmployeeModal} from './employee-dashboard.model'
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {

  formValue!:FormGroup;
  employeeModelObj:EmployeeModal=new EmployeeModal();
  constructor(private formbuilder:FormBuilder,private api:ApiService) { }


  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      mobile:[''],
      salary:['']
    })
  }

  postEmployeeDetails(){
    this.employeeModelObj.firstName=this.formValue.value.firstName;
    this.employeeModelObj.lastName=this.formValue.value.lastName;
    this.employeeModelObj.email=this.formValue.value.email;
    this.employeeModelObj.mobile=this.formValue.value.mobile;
    this.employeeModelObj.salary=this.formValue.value.salary;
    this.api.postEmployee(this.employeeModelObj).subscribe(res=>{
      console.log("res",res);
      alert("Employee Added successfully");
      let ref=document.getElementById("cancel");
      ref?.click()
      this.formValue.reset();
    },
    err=>{
       alert("Something went wrong");
    })
  }
}
