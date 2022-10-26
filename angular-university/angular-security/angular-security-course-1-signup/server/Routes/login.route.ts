import * as argon2 from 'argon2';
import {Request,Response} from 'express';
import { db } from '../Controller/database';
import { sessionStore } from '../Controller/session-store';
import { DbUser } from '../Models/db-user';
import { randomBytes } from '../Utils/security.util';

export function login(req:Request,res:Response){
    const credentials=req.body;
    const user=db.findUserByEmail(credentials.email);

    if(!user){
        res.status(403).json('forbidden');
    }else{
        loginAndBuildResponse(credentials,user,res);
    }
}

async function loginAndBuildResponse(credentials:any,user:DbUser,res:Response){
    try{
        // promise returns session id
        const sessionId=await attemptLogin(credentials,user);
        console.log("loginAndBuildResponse-login successful");
        res.cookie("SESSIONID",sessionId,{
            httpOnly:true,
            secure:true
        });
        res.status(200).json({
            id:user.id,
            email:user.email
        })
    }catch(err){
        console.log("loginAndBuildResponse-login failed!");
        res.status(403).json('forbidden');
    }

}
// return session id when passsword is valid
async function attemptLogin(credentials:any,user:DbUser){
    // compare the password with hashed password
    const isPasswordValid=await argon2.verify(user.passwordDigest,credentials.password)
    if(!isPasswordValid){
         throw new Error("Password Invalid");
    }
    // instead of password send the passwordDigest
    const sessionId=await randomBytes(32).then(bytes=>bytes.toString('hex'));
    console.log("sessionId--attemptLogin",sessionId);
    // store the session id
    sessionStore.createSession(sessionId,user);
    // since marked with async this will return a password
    return sessionId;
}