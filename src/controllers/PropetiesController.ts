import { NextFunction, Request,Response } from "express";
import { injectable } from "inversify";
import { AbstractController } from "./AbstractController";

export class PropetiesController extends AbstractController{
    protected prefix:string='/propeties';

    hello(){
        return (req:Request,res:Response,next:NextFunction)=>{
            res.send("Hello api 1.0v datapropeties")
        }
    }
    registerRoutes(){
        this.forRoute('/').get(this.hello())
    }
}