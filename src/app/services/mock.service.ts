import { userMock } from '../mocks/user.mock';
import { IUser } from '../models/user.model';

export class MockService {
	constructor(
		private localStorageService: ng.local.storage.ILocalStorageService
	) {
		'ngInject';

	}

	getProfile(): IUser {
		const user: IUser  = this.localStorageService.get('user');
		return user ? user : userMock;
	}

	updateProfile(user: IUser): void {
		this.localStorageService.set('user', user);
	}
}
