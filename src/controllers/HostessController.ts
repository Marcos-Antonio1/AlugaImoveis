import { NextFunction, Request,Response } from "express";
import { User } from "../../models/User";
import  {Propetie} from '../../models/Propetie';
import { AbstractController } from "./AbstractController";
import { ImagesPropetie } from "../../models/ImagesPropetie";

export class HotessController extends AbstractController {
    protected prefix:string='/hotess';
    
    hello(){
        return (req:any,res:any,next:any)=>{
            res.send("hello hotess Data Api")
        }
    }
    updateHotess(){
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
    registerPropetie(){
        return async (req:Request,res:Response,next:NextFunction)=>{
            let propetie: Propetie= new Propetie()
            let user: User | undefined =new User()
            let img: ImagesPropetie= new ImagesPropetie()
            console.log('vim aqui')
            propetie.description=req.body.description
            propetie.rua =req.body.rua
            propetie.cidade=req.body.rua
            propetie.estado=req.body.estado
            propetie.pais=req.body.pais
            propetie.latitude=req.body.latitude   
            propetie.longitude=req.body.longitude
            propetie.vagas=req.body.vagas
            propetie.preco_diaria=req.body.preco_diaria
            propetie.nome=req.body.nome;  
             try{  
                propetie.save()
                user= await User.findOne({UserId: req.body.id})
                console.log(user)
                if(user){
                    user.pro?.push(propetie)
                     user.save()
                    res.status(201).send({msg:"Imóvel cadastrado com sucesso"})
                }
            }catch(err:any){
                res.send({msg:"Ocorreu um erro ao cadastrar o Imóvel"})
            } 
        }
    }
    listPropeties(){
        return async (req:Request,res:Response,next:NextFunction)=>{
            try{
                let user:User|undefined = new User()
                console.log(req)
                console.log(req.params)
                let id:number=parseInt(req.params.id);
                user= await User.findOne({UserId: id})
                if(user){
                    res.send(user.pro)
                }
            }catch(errr){
                res.status(502).send({msg:errr})
            }
        }
    }
    detailProteties(){
        return async (req:Request,res:Response,next:NextFunction)=>{
            try{
               res.send(await Propetie.find({PropetieId : req.body.id}))
            }catch(errr){
                res.status(502).send({msg:errr})
            }
        }
    }
    updatePropetie(){
        return async (req:Request,res:Response,next:NextFunction)=>{
            let prop:Propetie|undefined= new Propetie()
            try{
                prop= await Propetie.findOne({PropetieId: req.body.id})
                if(prop){
                    let pro= Propetie.merge(prop,req.body)
                    pro.save()
                    res.status(200).send({msg:"Imóvel atualizado com sucesso"})
                }
            }catch(err){
                res.status(502).send({msg:"ocorreu um erro ao atualizar os dados"})
            }
        }
    }
    deletePropetie(){
        return async (req:Request,res:Response,next:NextFunction)=>{
            let pro:Propetie|undefined= new Propetie()
            try{
                pro =await Propetie.findOne({PropetieId: req.body.id})
                if(pro){
                    pro.remove()
                    res.status(200).send({msg: "Imovél deletado com sucesso"})
                }
            }catch(err){
                res.status(502).send({msg:"ocorreu um erro ao deleta os dados"})
            }
        }
    }
    
    registerRoutes(){
        this.forRoute('/').get(this.hello())
        this.forRoute('/update').put(this.updateHotess())
        this.forRoute('/resgister-propetie').post(this.registerPropetie())
        this.forRoute('/list/:id').get(this.listPropeties())
        this.forRoute('/update-propetie').put(this.updatePropetie())
        this.forRoute('/delete-propetie').delete(this.deletePropetie())
        this.forRoute('/detail-propetie').get(this.detailProteties())
    }
}