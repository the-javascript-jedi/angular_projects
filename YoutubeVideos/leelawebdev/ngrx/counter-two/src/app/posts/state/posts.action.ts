import { Post } from "src/app/models/posts.model";
import { createAction,props } from "@ngrx/store";
export const ADD_POST_ACTION='[posts page] add post';
export const UPDATE_POST_ACTION='[posts page] update post';

export const addPost=createAction(ADD_POST_ACTION,props<{post:Post}>());
// we update a post id,title,description
export const updatePost=createAction(
    UPDATE_POST_ACTION,
    props<{post:Post}>()
)