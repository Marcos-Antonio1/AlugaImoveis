import {Container} from 'inversify';
import { HotessController } from '../HostessController';
import { Icontroller } from '../Icontroller';
import { IndexController } from '../IndexController';
import { PropetiesController } from '../PropetiesController';
import { UserController } from '../UserController';
import ContainerTypes from './containerTypes';

const ControllerContainer= new Container()

ControllerContainer.bind<Icontroller>(ContainerTypes.Controller).to(IndexController)
ControllerContainer.bind<Icontroller>(ContainerTypes.Controller).to(HotessController)
ControllerContainer.bind<Icontroller>(ContainerTypes.Controller).to(UserController)
ControllerContainer.bind<Icontroller>(ContainerTypes.Controller).to(PropetiesController)

export default ControllerContainer;