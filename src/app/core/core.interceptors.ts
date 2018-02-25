interface IRequestConfigFunction {
	(config: ng.IRequestConfig): ng.IRequestConfig;
}

export class InterceptorsService {

	constructor() {
	}

	/* tslint:disable:member-ordering */
	public static Factory(): InterceptorsService {
		return new InterceptorsService();
	}

	/* tslint:disable: no-string-literal */
	public request: IRequestConfigFunction = (config: ng.IRequestConfig): ng.IRequestConfig => {
		if (window['accessAndRefreshTokenPair']) {
			config.headers['Authorization'] = `Bearer ${window['accessAndRefreshTokenPair']['access_token']}`;
		}

		return config;
	}
	/* tslint:disable: no-string-literal */
}
