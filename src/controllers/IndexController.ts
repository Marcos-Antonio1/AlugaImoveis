import { Application, IRoute, NextFunction, Response, Request } from "express";
import { injectable } from "inversify";
import { User } from "../../models/User";
import { AbstractController } from "./AbstractController";

export class IndexController extends AbstractController{
    protected prefix:string='';

    hello(){
        return (req:Request,res:Response,next:NextFunction)=>{
            res.send("Hello api 1.0v")
        }
    }
    register(){
        return async (req:Request,res:Response,next:NextFunction)=>{
            let user= new User();
            user.name= req.body.name
            user.last_name=req.body.last_name
            user.password=req.body.password
            user.born_date=req.body.born_date
            user.cpf=req.body.cpf
            user.hostess=req.body.hostess
            user.guest=req.body.guest
            user.phone1=req.body.phone1
            user.phone2=req.body.phone2
            try{
                await user.save()
                res.status(201).send({msg: "usuário cadastrado com sucesso"})
            }catch(erro:any){
                res.send(400).send({msg:"houve um erro ao cadastrar o usuário"})
            }      
        }
    }
    registerRoutes(){
        this.forRoute('/').get(this.hello())
        this.forRoute('/register').post(this.register())
    }
}