import { APP_NAME } from '../config/app.config';

export class RootController {

	constructor(private $stateParams: any) {
		'ngInject';
	}

	public propogateRoutes(): boolean {
		return this.$stateParams.application === APP_NAME;
	}

}
