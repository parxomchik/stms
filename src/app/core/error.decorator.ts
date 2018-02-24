import { APP_NAME } from '../config/app.config';

export function errorDecorator($provide: ng.auto.IProvideService): void {
	'ngInject';

	$provide.decorator('$exceptionHandler', function ($delegate: any, $window: ng.IWindowService): Function {
		'ngInject';

		return function (exception: Error, cause?: string, source?: string): void {
			$delegate(exception, cause);

			const data: any = {
				type: 'angular',
				url: window.location.hash,
				localtime: Date.now(),
				app: APP_NAME
			};

			if (cause) {
				data.cause = cause;
			}
			if (source) {
				data.source = source;
			}
			if (exception) {
				if (exception.message) {
					data.message = exception.message;
				}
				if (exception.name) {
					data.name = exception.name;
				}
			}

			const debug: boolean = false;
			if (debug) {
				window.alert('Error: ' + data.message);
			} else {
				// track('exception', data);
				$window.dispatchEvent(new CustomEvent('error', { 'detail': data }));
			}
		};
	});
}

// Function to track remotely errors somewhere
function track(name: string, data: any): void {
	console.log(arguments);
}
