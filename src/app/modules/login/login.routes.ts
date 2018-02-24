export default function ($stateProvider: ng.ui.IStateProvider, routePrefix: string): void {
	'ngInject';

	$stateProvider.state(routePrefix + 'login', {
		url: '/login',
		template: '<dd-login></dd-login>'
	});
}
