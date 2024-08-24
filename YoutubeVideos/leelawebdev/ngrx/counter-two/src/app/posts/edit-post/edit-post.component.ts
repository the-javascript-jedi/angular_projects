import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/posts.selector';
import { Subscription } from 'rxjs';
import { updatePost } from '../state/posts.action';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit,OnDestroy {
  post:Post;
  postForm:FormGroup;
  postSubscription:Subscription;

  constructor(private route:ActivatedRoute,private store:Store<AppState>,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      const id=params.get('id');
      // get the data from store
      this.postSubscription=this.store.select(getPostById,{id:id,'test':"testData"}).subscribe((data)=>{
        this.post=data;
        //create a form with the returned data
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
    if(!this.postForm.valid){
      return;
    }

    const title=this.postForm.value.title;
    const description=this.postForm.value.description;

    const post:Post={
      id:this.post.id,
      title:title,
      description:description
    }
    // dispatch the action with updated post
    this.store.dispatch(updatePost({post}));
    this.router.navigate(['posts'])
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }

}
