import { Request,Response } from "express";
import { sessionStore } from "../Controller/session-store";

export function getUser(req:Request,res:Response){
    const sessionId=req.cookies['SESSIONID'];
    // retreive the user corresponding to the session id
    const user=sessionStore.findUserBySessionId(sessionId);
    if(user){
        res.status(200).json(user);
    }else{
        // 204 no content to send back to client
        res.sendStatus(204)

    }
}