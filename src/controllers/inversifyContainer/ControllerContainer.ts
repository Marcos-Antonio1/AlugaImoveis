import {Container} from 'inversify';
import { HotessController } from '../HostessController';
import { Icontroller } from '../Icontroller';
import { IndexController } from '../IndexController';
import { PropetiesController } from '../PropetiesController';
import { GuestsController } from '../GuestsController';
import ContainerTypes from './containerTypes';
import { LoginController } from '../LoginController';

const ControllerContainer= new Container()

ControllerContainer.bind<Icontroller>(ContainerTypes.Controller).to(IndexController)
ControllerContainer.bind<Icontroller>(ContainerTypes.Controller).to(HotessController)
ControllerContainer.bind<Icontroller>(ContainerTypes.Controller).to(GuestsController)
ControllerContainer.bind<Icontroller>(ContainerTypes.Controller).to(PropetiesController)
ControllerContainer.bind<Icontroller>(ContainerTypes.Controller).to(LoginController)

export default ControllerContainer;