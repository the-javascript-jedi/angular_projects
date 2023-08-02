import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";

export class LoggingInterceptorServce implements HttpInterceptor{
    intercept(req:HttpRequest<any>,next:HttpHandler){
        console.log("req.headers--logging service",req.headers);
        return next.handle(req).pipe(tap(event=>{
            console.log("event",event);
            console.log("Logging Response from interceptor");
            if(event.type===HttpEventType.Response){
                console.log("event.body",event.body);
            }
        }));
    }
}