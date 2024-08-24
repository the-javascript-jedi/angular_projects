import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./posts.state";

export const POST_STATE_NAME="posts";
const getPostsState=createFeatureSelector<PostsState>(POST_STATE_NAME);


export const getPosts=createSelector(getPostsState,(state)=>{
    return state.posts;
})
export const getPostById = createSelector(getPostsState, (state, props) => {
    console.log("state.posts",state.posts)
    console.log("props",props);
    return state.posts.find((post) => post.id === props.id);
});