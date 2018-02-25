import { AuthService } from '../../services/auth.service';

export default function routeConfig ($stateProvider: ng.ui.IStateProvider, routePrefix: string, $urlRouterProvider: angular.ui.IUrlRouterProvider): void {
	'ngInject';

	$stateProvider.state(routePrefix + 'app', {
		url: '/app',
		template: '<dd-app></dd-app>',
		resolve: {
			user: function($q: ng.IQService, $state: ng.ui.IStateService, authService: AuthService): any {
				return authService.isAuthorized() || $q.reject();
			}
		}
	});

	$urlRouterProvider.otherwise('/login');

}
