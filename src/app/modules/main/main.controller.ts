import { AuthService } from '../../services/auth.service';
import { IUser, ICoordinates } from '../../models/user.model';

export default class MainController {
	public user: any;
    constructor(
		private authService: AuthService,
		private $state: ng.ui.IStateService,
		private routePrefix: string
	) {
        'ngInject';
    }

    $onInit(): void {
		this.authService.user ? this.user = this.authService.user : this.getProfile();
    }

	onPositionChanged(user: IUser, name: string, coordinates: ICoordinates): void {
		console.log('onPositionChanged coordinates', coordinates);
		user[name].coordinates = coordinates;
		this.authService.updateProfile(user)
			.then(res => console.log(res))
			.catch(err => console.log(err));

	}


	logOut(): void {
		this.authService.logOut()
			.then(res => this.$state.go(`${this.routePrefix}login`))
			.catch(err => console.log(err));
	}

	getProfile(): void {
		this.authService.getProfile()
			.then(res => this.user = res)
			.catch(err => console.log(err));
	}

}
