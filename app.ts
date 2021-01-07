import { Icontroller } from "./src/controllers/Icontroller";
import ControllerContainer from "./src/controllers/inversifyContainer/ControllerContainer";
import ControllerTypes from "./src/controllers/inversifyContainer/containerTypes";
import { createConnection } from "typeorm";
import 'reflect-metadata'

var express = require('express');
var path = require('path');
var cors =require('cors')

var app = express();
app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
createConnection();

const controllers:Icontroller[]=ControllerContainer.getAll<Icontroller>(ControllerTypes.Controller);
controllers.forEach(controller =>{
    controller.forApp(app).registerRoutes() 
})
module.exports = app;