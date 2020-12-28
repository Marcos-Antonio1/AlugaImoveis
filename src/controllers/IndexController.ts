import { Application, IRoute } from "express";
import { injectable } from "inversify";
import { AbstractController } from "./AbstractController";

export class IndexController extends AbstractController{
    protected prefix:string='/';

    hello(){
        return (req:any,res:any,next:any)=>{
            res.send("Hello api 1.0v")
        }
    }
    registerRoutes(){
        this.forRoute('').get(this.hello())
    }
}