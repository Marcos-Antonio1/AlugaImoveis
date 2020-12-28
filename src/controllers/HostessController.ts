import { injectable } from "inversify";
import { AbstractController } from "./AbstractController";

export class HotessController extends AbstractController {
    protected prefix:string='/hotess';

    hello(){
        return (req:any,res:any,next:any)=>{
            res.send("hello hotess Data Api")
        }
    }
    registerRoutes(){
        this.forRoute('').get(this.hello())
    }
}