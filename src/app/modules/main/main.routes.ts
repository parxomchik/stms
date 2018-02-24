export default function ($stateProvider: ng.ui.IStateProvider, routePrefix: string): void {
	'ngInject';

	$stateProvider.state(routePrefix + 'app', {
		url: '/app',
		template: '<dd-app></dd-app>'
	});
}
