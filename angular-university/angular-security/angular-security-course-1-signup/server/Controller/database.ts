
import * as _ from 'lodash';
import {LESSONS, USERS} from "../Data/database-data";
import { DbUser } from '../Models/db-user';
class InMemoryDatabase {
    // to create a key
    userCounter=0;
    readAllLessons() {
        return _.values(LESSONS);
    }
    createUser(email:string,passwordDigest:string){
        this.userCounter++;
        const id=this.userCounter++;
        const user:DbUser={
            id,
            email,
            passwordDigest
        }
        USERS[id]=user;
        return user;
    }
    findUserByEmail(email:string):DbUser{
        const users=_.values(USERS);
        return _.find(users,user=>user.email===email);
    }
}
export const db = new InMemoryDatabase();