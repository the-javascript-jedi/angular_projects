import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./posts.state";

const getPostsState=createFeatureSelector<PostsState>('posts');

export const getPosts=createSelector(getPostsState,(state)=>{
    return state.posts;
})
export const getPostById = createSelector(getPostsState, (state, props) => {
    console.log("state.posts",state.posts)
    console.log("props",props);
    return state.posts.find((post) => post.id === props.id);
});