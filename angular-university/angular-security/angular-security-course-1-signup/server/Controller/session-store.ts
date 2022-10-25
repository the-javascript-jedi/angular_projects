import { Session } from "../Models/session";
import {User} from '../../src/app/model/user'

class SessionStore{
    // initialize the session to empty map
    private sessions:{[key:string]:Session}={};

    createSession(sessionId:string,user:User){
        // key of the session map is going to be the session id
        this.sessions[sessionId]=new Session(sessionId,user);
    }

    findUserBySessionId(sessionId:string):User|undefined{
        const session=this.sessions[sessionId];
        // if session is valid return the session else return undefined
        return this.isSessionValid(sessionId)?session.user:undefined;
    }
    // helper to check the session id
    isSessionValid(sessionId:string):boolean{
        const session=this.sessions[sessionId];
        return session&&session.isValid();
    }
    destroySession(sessionId:string){
        delete this.sessions[sessionId]
    }
}
// global app singleton , so only one instance of session store in whole nodejs server
export const sessionStore=new SessionStore();