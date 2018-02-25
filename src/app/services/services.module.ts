import * as angular from 'angular';

import { APP_NAME } from '../config/app.config';
import { AuthService } from './auth.service';
import { MockService } from './mock.service';

const module: ng.IModule = angular.module(`${APP_NAME}.services`, []);

module.service('authService', AuthService);
module.service('mockService', MockService);

export default (<ng.IModule>module).name;
