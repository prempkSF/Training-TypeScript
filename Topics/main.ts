//Inheritance
import { UserInterface } from "./registerInterface";
class UserRegister implements UserInterface
{
    constructor(public id:number,public name:string)
    {

    }

    register(): string {
        return 'Hello '+this.name+' your id is '+this.id;
    }
}



class UserPosition extends UserRegister
{
    constructor(public id:number,public name:string,public position:string)
    {
        super(id,name);
    }

    userPosition():string
    {
        return 'Hello '+this.name+' your id is '+this.id+' your position is '+this.position;
    }
}

var userDetails = new UserPosition(1,"Prem","Software Engineer");

console.log(userDetails.userPosition());