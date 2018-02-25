import * as angular from 'angular';
import 'angular-animate';
import 'angular-cookies';
import 'angular-ui-router';
import 'angular-translate';
import 'angular-sanitize';
import 'angular-local-storage';

import { localeConfig } from './i18n/i18n.config';

import { errorDecorator } from './error.decorator';

import runFunction from './core.run';
import routeConfig from './core.route';

import { wrapper } from '../config/strategy.config';
import { APP_NAME } from '../config/app.config';

import { InterceptorsService } from './core.interceptors';
import { CoreService } from './core.service';
import directivesModule from '../directives/directives.module';
import servicesModule from '../services/services.module';

const module: ng.IModule = angular.module(`${APP_NAME}.core`, [
	'ui.router',
	'pascalprecht.translate',
	'ngAnimate',
	'ngSanitize',
	'LocalStorageModule',
	directivesModule,
	servicesModule
]);

module.constant('wrapper', wrapper);
module.constant('routePrefix', ((): string => wrapper ? 'root.' : '')());

module.run(runFunction);

module.config(routeConfig);

module.config(localeConfig);

module.config(errorDecorator);

module.service('interceptorService', InterceptorsService);
module.service('coreService', CoreService);

export default (<ng.IModule>module).name;
