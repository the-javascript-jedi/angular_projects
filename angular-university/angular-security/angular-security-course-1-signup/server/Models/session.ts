import { Moment } from "moment";
import { User } from "../../src/app/model/user";
import moment=require('moment');

export class Session{
   static readonly VALIDITY_MINUTES=2
   
   private ValidUntil:Moment;

   constructor(
    public sessionId:string,
    public user:User
    ){
        this.ValidUntil=moment().add(Session.VALIDITY_MINUTES,'minutes') 
     }

     isValid(){
        // calculate the difference between the time and Valid until so that we know the session is valid
        return moment().diff(this.ValidUntil,'minutes')<=0;
     }
}