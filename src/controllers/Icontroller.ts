import { Application, IRoute } from "express";

export interface Icontroller{
    forApp(app:Application):Icontroller;
    forRoute(path:string):IRoute;
    registerRoutes():void;
}