import { NextFunction, Response,Request} from "express";
import { Propetie } from "../../models/Propetie";
import { User } from "../../models/User";
import { AbstractController } from "./AbstractController";

export class GuestsController extends AbstractController{
    protected prefix:string='/guest';

    hello(){
        return (req:Request,res:Response,next:NextFunction):Promise<Response>|any=>{
            return res.send("Hello api 1.0v data user")
        }
    }
    updateGuest(){
        return async(req:Request,res:Response,next:NextFunction)=>{
            let user:User|undefined= new User()
            try{
                user= await User.findOne({UserId: req.body.id});
                if(user){
                     user= await User.merge(user,req.body)
                     user.save()
                    res.status(200).send({msg:"Informações atualizadas com sucesso"})
                }
            }catch(err){
                res.send({msg:"houve um erro ao atualizar as informações"})
            }
        }
    }
    registerRoutes(){
        this.forRoute('/').get(this.hello())
        this.forRoute('/update').put(this.updateGuest())
    }
    
}