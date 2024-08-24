import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  postForm:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.postForm=new FormGroup({
      title:new FormControl(null,[Validators.required,Validators.minLength(6)]),
      description:new FormControl(null,[Validators.required,Validators.minLength(6)]),
    })
  }

  onAddForm(){
    console.log("this.postForm",this.postForm);
  }

  showDescriptionErrors(){
    const descriptionForm=this.postForm.get('description');
    if(descriptionForm.touched&&!descriptionForm.valid){
      if(descriptionForm.errors.required){
        return 'Description is required';
      }
      if(descriptionForm.errors.minlength){
        return 'Description should be of minimum 6 characters length';
      }
    }
    return undefined;  // or return undefined;
  }

}
