import { NextFunction, Request,Response } from "express";
import { User } from "../../models/User";
import { AbstractController } from "./AbstractController";
import bcrypt from 'bcrypt'
require("dotenv-safe").config();
const jwt = require('jsonwebtoken'); 
export class LoginController extends AbstractController {
    protected prefix:string='/login';

    Login(){
        return async (req:Request,res:Response,next:NextFunction)=>{
            let user:User |undefined = await User.findOne({email:req.body.email})
            console.log(user)
            let isMatch;
            if(user?.password){
                 isMatch= await bcrypt.compareSync(req.body.password,user?.password)
            }else{
                isMatch=false;
            }
            if(user){
                if(isMatch){
                    let id= user.UserId;
                    const token = jwt.sign({ id}, process.env.SECRET, {
                        expiresIn: 3000 // expires in 5min
                      });
                       res.status(200).send({ auth: true, token: token });
                }else{
                    res.status(406).send({msg:"senha inválida"})
                }
            }else{
                res.status(406).send({msg:"Email não cadastrado"})
            }
        }       
    }
    logout(){
        return (req:Request,res:Response,next:NextFunction)=>{
            res.send({auth: false, token: null })
        }
    }
    registerRoutes(){
        this.forRoute('').post(this.Login())
        this.forRoute('/logout').get(this.logout())
    }
}