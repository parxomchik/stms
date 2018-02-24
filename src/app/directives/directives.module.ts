import * as angular from 'angular';

import { APP_NAME } from '../config/app.config';
import { Draggable } from './ng-draggable.directive';

const module: ng.IModule = angular.module(`${APP_NAME}.directives`, []);

module.directive('ngDraggable', Draggable.instance());
export default (<ng.IModule>module).name;
