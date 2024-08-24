import { createReducer, on } from "@ngrx/store";
import { initialState } from "./posts.state";
import { addPost, deletePost, updatePost } from "./posts.action";

const _postsReducer=createReducer(initialState,on(addPost,(state,action)=>{
    let post={...action.post};
    // add a post
    post.id=(state.posts.length+1).toString();
    return {
        ...state,
        posts:[...state.posts,post]
    }
}),
on(updatePost,(state,action)=>{
    // modify the new post
    const updatedPosts=state.posts.map((post)=>{
        return action.post.id===post.id?action.post:post;
    })
    // update the posts in state
    return {
        ...state,
        posts:updatedPosts
    }
}),
on(deletePost,(state,action)=>{
    const updatedPosts=state.posts.filter(post=>{
        return post.id!==action.id
    })
    return {
        ...state,
        posts:updatedPosts
    }
})
)

export function postsReducer(state,action){
    return _postsReducer(state,action);
}