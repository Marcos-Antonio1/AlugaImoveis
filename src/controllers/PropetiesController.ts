import { injectable } from "inversify";
import { AbstractController } from "./AbstractController";

export class PropetiesController extends AbstractController{
    protected prefix:string='/propeties';

    hello(){
        return (req:any,res:any,next:any)=>{
            res.send("Hello api 1.0v datapropeties")
        }
    }
    registerRoutes(){
        this.forRoute('').get(this.hello())
    }
}