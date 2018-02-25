import { AuthService } from '../../services/auth.service';

export default class LoginController {

    constructor(
		private authService: AuthService,
		private $state: ng.ui.IStateService
	) {
        'ngInject';
    }

    $onInit(): void {

	}

	logIn(user: any): void {
		this.authService.logIn(user)
			.then((res) => this.$state.go('app'))
			.catch(err => console.log(err));
	}



}
