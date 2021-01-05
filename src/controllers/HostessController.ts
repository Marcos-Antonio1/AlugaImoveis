import { NextFunction, Request,Response } from "express";
import { injectable } from "inversify";
import { User } from "../../models/User";
import { AbstractController } from "./AbstractController";

export class HotessController extends AbstractController {
    protected prefix:string='/hotess';

    hello(){
        return (req:any,res:any,next:any)=>{
            res.send("hello hotess Data Api")
        }
    }
    updateHotess(){
        return async(req:Request,res:Response,next:NextFunction)=>{
            let user:User|undefined= new User
            try{
                user= await User.findOne({UserId: req.body.id});
            }catch(error){
                res.send({msg:"houve um erro ao atualizar as informações"})
            }
            if(user){
                let update= await User.merge(user,req.body)
                 res.send(update)
            }
        }
    }
    registerRoutes(){
        this.forRoute('/').get(this.hello())
        this.forRoute('/update').put(this.updateHotess())
    }
}