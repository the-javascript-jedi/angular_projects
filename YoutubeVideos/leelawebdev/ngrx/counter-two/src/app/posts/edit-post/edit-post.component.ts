import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/posts.selector';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit,OnDestroy {
  post:Post;
  postForm:FormGroup;
  postSubscription:Subscription;

  constructor(private route:ActivatedRoute,private store:Store<AppState>) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      const id=params.get('id');
      // get the data from store
      this.postSubscription=this.store.select(getPostById,{id:id,'test':"testData"}).subscribe((data)=>{
        this.post=data;
        this.createForm();
        console.log("this.post",this.post)
      })
    })
  }

  createForm(){
    this.postForm=new FormGroup({
      title:new FormControl(this.post.title,[Validators.required,Validators.minLength(3)]),
      description:new FormControl(this.post.description,[Validators.required,Validators.minLength(3)]),
    });
  }

  updatePost(){

  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }

}
