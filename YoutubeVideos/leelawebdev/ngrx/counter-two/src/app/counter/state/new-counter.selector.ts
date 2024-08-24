import { CounterState } from "./counter.state";
import { createFeatureSelector,createSelector } from "@ngrx/store";

// get the state from the reducer used in app.module
const getCounterState=createFeatureSelector<CounterState>('counter');

// get state specifically for Counter
export const getCounter=createSelector(getCounterState,(state)=>{
    return state.counter;
})

// get state for channel name
export const getChannelName=createSelector(getCounterState,(state)=>{
    return state.channelName;
})

