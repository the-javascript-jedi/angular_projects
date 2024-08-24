import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";

const routes:Routes=[
    {
        path:'',
        component:PostsListComponent,
        children:[
            {path:'add',component:AddPostComponent},
            {path:'edit/:id',component:EditPostComponent},
          ]
    }
];

@NgModule({    
    declarations:[
        PostsListComponent,
        AddPostComponent,
        EditPostComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class CounterModule{}