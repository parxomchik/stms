import * as angular from 'angular';

import { APP_NAME } from '../config/app.config';

const module: ng.IModule = angular.module(`${APP_NAME}.services`, []);

export default (<ng.IModule>module).name;
