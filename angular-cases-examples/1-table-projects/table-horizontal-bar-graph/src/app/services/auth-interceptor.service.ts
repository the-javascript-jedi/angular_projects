import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req:HttpRequest<any>,next:HttpHandler){
        // we can handle the url here using below code
        console.log("req.url",req.url)
        // if(req.url==""){
            
        // }
        // after modifying the request we must return request.handle
        console.log("Sending Request Interceptor");
        return next.handle(req);
    }
}