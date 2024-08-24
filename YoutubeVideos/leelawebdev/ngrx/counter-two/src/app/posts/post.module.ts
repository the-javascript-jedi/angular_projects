import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { StoreModule } from "@ngrx/store";
import { postsReducer } from "./state/posts.reducer";
import { POST_STATE_NAME } from "./state/posts.selector";

const routes:Routes=[
    {
        path:'posts',
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
        RouterModule.forChild(routes),
        StoreModule.forFeature(POST_STATE_NAME,postsReducer)
    ]
})
export class CounterModule{}