import * as angular from 'angular';

import LoginComponent from './login.component';
import { APP_NAME } from '../../config/app.config';
import routes from './login.routes';

const module: ng.IModule = angular.module(`${APP_NAME}.login`, ['ui.router']);

module.config(routes);

module.component('ddLogin', new LoginComponent());

export default (<ng.IModule>module).name;
