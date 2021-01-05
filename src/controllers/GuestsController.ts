import { NextFunction, Response,Request} from "express";
import { forEachChild } from "typescript";
import { User } from "../../models/User";
import { AbstractController } from "./AbstractController";

export class GuestsController extends AbstractController{
    protected prefix:string='/user';

    hello(){
        return (req:Request,res:Response,next:NextFunction):Promise<Response>|any=>{
            return res.send("Hello api 1.0v data user")
        }
    }
    updateGuest(){
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
        this.forRoute('/update').put(this.updateGuest())
    }
    
}