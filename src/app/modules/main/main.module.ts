import * as angular from 'angular';

import { MainComponent } from './main.component';
import { APP_NAME } from '../../config/app.config';
import routes from './main.routes';

const module: ng.IModule = angular.module(`${APP_NAME}.main`, ['ui.router']);

module.config(routes);

module.component('ddApp', MainComponent);

export default (<ng.IModule>module).name;
