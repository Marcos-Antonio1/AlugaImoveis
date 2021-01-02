import { AbstractController } from "./AbstractController";

export class LoginController extends AbstractController {
    protected prefix:string='/login';

    Login(){
        return (req:any,res:any,next:any)=>{
            res.send("to access this page is need do login")
        }
    }
    registerRoutes(){
        this.forRoute('').get(this.Login())
    }
}