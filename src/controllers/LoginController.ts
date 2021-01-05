import { NextFunction, Request,Response } from "express";
import { AbstractController } from "./AbstractController";

export class LoginController extends AbstractController {
    protected prefix:string='/login';

    Login(){
        return (req:Request,res:Response,next:NextFunction)=>{
            res.send("to access this page is need do login")
        }
    }
    registerRoutes(){
        this.forRoute('/').get(this.Login())
    }
}