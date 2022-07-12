import { Injectable } from "@angular/core";
import { HttpEvent,HttpInterceptor,HttpHandler,HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
// for interceptor just pass the keyword Injectable
@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor{
    //req contains the request details
    //next will be called to send off to next interceptor
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        console.log("AuthHttpInterceptor--req",req);
        // since req is read only so we cannot directly modify them
        //we need to clone it and make changes
        const modifiedReq=req.clone({withCredentials:true})
        // return next so if necessary the request can be handled in another interceptor
        //pass the modified request to next interceptor if necessary
        //chain request here if necessary using tap
        return next.handle(modifiedReq);
    }
}
