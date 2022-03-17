import { Component } from "@angular/core";

// The value for these selector option is a custom tag name for our components.
@Component({
  selector:"app-root", 
  templateUrl:"./app.component.html",
  styleUrls:["app.component.css"], 
})
export class AppComponent{
  name="nithin samuel";
  imgUrl="https://i.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0";
  currentDate=new Date();

  getName(){
    return this.name;
  }
  changeImage(e:KeyboardEvent){
    //e.target interface does not contain the value property so we use type assertion and convert it to HTMLInputElement type
    console.log((e.target as HTMLInputElement).value);
    this.imgUrl=(e.target as HTMLInputElement).value;
  }
  logImg(event:string){
    console.log("event-logImg",event);
  }
}