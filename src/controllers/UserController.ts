import { injectable } from "inversify";
import { AbstractController } from "./AbstractController";

export class UserController extends AbstractController{
    protected prefix:string='/user';

    hello(){
        return (req:any,res:any,next:any)=>{
            res.send("Hello api 1.0v data user")
        }
    }
    registerRoutes(){
        this.forRoute('').get(this.hello())
    }
}