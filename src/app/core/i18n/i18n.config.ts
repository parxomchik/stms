import { i18nEN } from './i18n.files';

export function localeConfig($translateProvider: ng.translate.ITranslateProvider): void {
	'ngInject';

	$translateProvider.translations('en', i18nEN);
	$translateProvider.useSanitizeValueStrategy(null);
}
