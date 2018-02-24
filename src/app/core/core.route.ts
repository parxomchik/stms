import { RootController } from './root.controller';
import { InterceptorsService } from './core.interceptors';

export default function ($urlRouterProvider: ng.ui.IUrlRouterProvider,
						 $stateProvider: ng.ui.IStateProvider,
						 $httpProvider: ng.IHttpProvider,
						 routePrefix: string): void {
	'ngInject';

	$httpProvider.interceptors.push(InterceptorsService.Factory);

	if (routePrefix.length > 0) {
		$stateProvider.state('root', {
			abstract: true,
			url: '/:application',
			template: '<ui-view ng-if="vm.propogateRoutes()" autoscroll="false"></ui-view>',
			controller: RootController,
			controllerAs: 'vm'
		});
	}

	$urlRouterProvider.otherwise(($injector) => {
		$injector.invoke(['$state', ($state: ng.ui.IStateService): void => {
			if (!routePrefix.length) {
				$state.transitionTo(routePrefix + 'app', {
					reload: true,
					inherit: false,
					notify: true
				});
			}
		}]);
	});
}
