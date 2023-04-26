export class Users{
    id:string;
    firstName:string;
    lastName:string;
    email:string;
    mobile:string;
    salary:string;

    constructor(id,firstName,lastName,email,mobile,salary){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.mobile=mobile;
        this.salary=salary;
    }
}