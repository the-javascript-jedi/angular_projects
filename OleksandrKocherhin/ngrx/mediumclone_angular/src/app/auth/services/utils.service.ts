import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class UtilsService{
    // 1,50 => O/P - [1,2,3,4,5...,50]
    range(start:number,end:number):number[]{
        console.log("start",start)
        console.log("end",end)
        console.log("[...Array(end-start).keys()].map(el=>el+start)",[...Array(end-start).keys()].map(el=>el+start))
        return [...Array(end-start).keys()].map(el=>el+start)
    }
}