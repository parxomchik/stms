import { BASE_PATH, IS_LOCAL } from '../config/app.config';
import { IUser } from '../models/user.model';
import { MockService } from './mock.service';

export class AuthService {
	public user: any;
	constructor(
		private localStorageService: ng.local.storage.ILocalStorageService,
		private $http: ng.IHttpService,
		private $q: ng.IQService,
		private $window: ng.IWindowService,
		private mockService: MockService
	) {
		'ngInject';
	}

	returnToOrigin(): void {
		this.$window.location.replace(this.$window.location.origin);
	}


	public isAuthorized(): string {
		const token: any = this.localStorageService.get('token');

		return token;
	}

	public logOut(): ng.IPromise<any> {
		return this.$http.get(`${BASE_PATH}/logUot`)
			.then(res => console.log(res))
			.catch(err => {
				if (IS_LOCAL) {
					this.localStorageService.remove('token');
				}
			});
	}

	public logIn(user: IUser): ng.IPromise<any> {
		return this.$http.post(`${BASE_PATH}/login`, user)
			.then(res => console.log(res))
			.catch(err => {
				IS_LOCAL ? this.localStorageService.set('token', 'token') : console.log(err);
			});
	}

	public getProfile(): ng.IPromise<IUser> {
		return this.$http.get(`${BASE_PATH}/profile`)
			.then((res) => {
				this.user = res.data;
				return this.user;
			})
			.catch((err) => {
				return IS_LOCAL ? this.mockService.getProfile() : console.log(err);
			});
	}

	public updateProfile(profile: IUser): ng.IPromise<any> {
		return this.$http.put(`${BASE_PATH}/profile`, profile)
			.then((res) => console.log(res))
			.catch(err => {
				return IS_LOCAL ? this.mockService.updateProfile(profile) : console.log(err);
			});
	}

	private setToken(token: string): void {
		this.localStorageService.set('token', token);
	}

}
