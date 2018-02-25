import * as angular from 'angular';
import appModule from './app.module';

import 'normalize.css';
import './app.less';

const element: any = document.getElementById('stms');

angular.element(element).ready(() => {
	angular.bootstrap(element, [
		appModule
	], { strictDi: true });
});
