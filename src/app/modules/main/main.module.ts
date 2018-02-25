import * as angular from 'angular';

import MainComponent from './main.component';
import { APP_NAME } from '../../config/app.config';
import routes from './main.routes';

import 'angular-ui-bootstrap';
import servicesModule from '../../services/services.module';

const module: ng.IModule = angular.module(`${APP_NAME}.main`, [
	'ui.router',
	'ui.bootstrap.dropdown',
	servicesModule
]);

module.config(routes);

module.component('ddApp', new MainComponent());

export default (<ng.IModule>module).name;
