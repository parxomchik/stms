export class AuthService {

	constructor(private localStorageService: ng.local.storage.ILocalStorageService,
				private $http: ng.IHttpService,
				private $q: ng.IQService,
				private $window: ng.IWindowService) {
		'ngInject';
	}

	returnToOrigin(): void {
		this.$window.location.replace(this.$window.location.origin);
	}

	public logOut(): any {

	}

	public logIn(): any {

	}

}
