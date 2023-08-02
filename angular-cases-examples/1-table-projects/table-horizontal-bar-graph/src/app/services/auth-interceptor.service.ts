import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req:HttpRequest<any>,next:HttpHandler){
        // we can handle the url here using below code
        console.log("req.url",req.url)
        // if(req.url==""){}
        console.log("Sending Request Interceptor");
        // modify the request
        let modifiedRequest=req.clone({
            // headers:req.headers.append('test','abc'),
            // params:req.params.append('hi','hello world')
        })

        // after modifying the request we must return request.handle
        // we handle the response by adding pipe as it is an observable
        return next.handle(modifiedRequest).pipe(tap(event=>{
            console.log("event",event);
            console.log("Response from interceptor");
            if(event.type===HttpEventType.Response){
                console.log("event.body",event.body);
            }
        }));
    }
}