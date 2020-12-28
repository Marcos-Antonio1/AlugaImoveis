import { Application, IRoute } from "express";
import { injectable } from "inversify";
import { Icontroller } from "./Icontroller";
import 'reflect-metadata';
@injectable()
export abstract class AbstractController implements Icontroller{
    private app?:Application;
    protected abstract  prefix:string;

    forApp(app:Application):Icontroller{
        this.app=app;
        return this;
    }
    forRoute(path:string):IRoute{
        return this.app?.route(`${this.prefix}/`) as IRoute;
    }
    abstract registerRoutes():void

}