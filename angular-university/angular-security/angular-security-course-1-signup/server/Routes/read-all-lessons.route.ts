import {db} from "../Controller/database";
import { sessionStore } from "../Controller/session-store";

export function readAllLessons(req, res) {
    // return data only to authenticated users
    const sessionId=req.cookies["SESSIONID"];
    // check if session is valid
    const isSessionValid=sessionStore.isSessionValid(sessionId);
    // if session is not valid send a 403 error - forbidden
    if(!isSessionValid){
        // res.sendStatus(403);
        //  res.status(403).json({'forbidden':'forbidden'})
         res.status(403).json('forbidden');
    }else{
        res.status(200).json({lessons:db.readAllLessons()})
    }
}