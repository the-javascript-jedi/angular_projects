import { createAction, props } from "@ngrx/store";

export const increment=createAction('increment');
export const decrement=createAction('decrement');
export const reset=createAction('reset');

// custom increment accepts number as props
export const customIncrement=createAction(
    'customIncrement', props<{value:number}>()
)

export const updateChannelName=createAction(
    'updateChannelName',props<{value:string}>()
)