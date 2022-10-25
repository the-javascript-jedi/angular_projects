import { Session } from "../Models/session";
import {User} from '../../src/app/model/user'

class SessionStore{
    // initialize the session to empty map
    private sessions:{[key:string]:Session}={};

    createSession(sessionId:string,user:User){
        // key of the session map is going to be the session id
        this.sessions[sessionId]=new Session(sessionId,user);
    }
}
// global app singleton , so only one instance of session store in whole nodejs server
export const sessionStore=new SessionStore();