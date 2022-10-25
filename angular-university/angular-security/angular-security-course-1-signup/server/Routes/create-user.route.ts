import { Request,Response } from "express";
import { db } from "../Controller/database";
import { USERS } from "../Data/database-data";
import * as argon2 from 'argon2';
import { validatePassword } from "../Utils/password-validation";
import { randomBytes } from "../Utils/security.util";
import { sessionStore } from "../Controller/session-store";

export function createUser(req:Request,res:Response){
    const credentials=req.body;
    const errors=validatePassword(credentials.password);
    // after checking if there are errors
    if(errors.length>0){
        res.status(400).json({errors})
    }else{
            argon2.hash(credentials.password).then(passwordDigest=>{
                /* // code using async await and session id */               
                createUserAndSession(res,credentials);
                /* // original code without using async await and no session id */               
                // instead of password send the passwordDigest
                // const user=db.createUser(credentials.email,passwordDigest);
                // console.log("USERS",USERS);
                //solution to use await keyword in an IIFE to overcome compilation error
                // (async()=>{
                //      // create a session id
                //     const sessionId=await randomBytes(32);
                // })()
                // // create a session id -- getting compilation error due to async await
                // const sessionId=await randomBytes(32);
                // res.status(200).json({
                //     id:user.id,
                //     email:user.email
                // })
            })
    }
}
// async function creating a session id
async function createUserAndSession(res:Response,credentials){
    const passwordDigest=await argon2.hash(credentials.password);
    // instead of password send the passwordDigest
    const user=db.createUser(credentials.email,passwordDigest);
    console.log("USERS",USERS);
    const sessionId=await randomBytes(32).then(bytes=>bytes.toString('hex'));
    console.log("sessionId",sessionId);
    // store the session id
    sessionStore.createSession(sessionId,user);
    // set the session id to cookie
    res.cookie("SESSIONID",sessionId);
    res.status(200).json({
                    id:user.id,
                    email:user.email
    })
}