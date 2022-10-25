import { Request,Response } from "express";
import { sessionStore } from "../Controller/session-store";

export function logout(req:Request,res:Response){
    // identify the user that needs to be logged out
    const sessionId=req.cookies['SESSIONID'];
    // destroy the session
    sessionStore.destroySession(sessionId);
    res.clearCookie("SESSIONID");
    // logout succesful
    // res.sendStatus(200);
    res.status(200).json('logged out');
}