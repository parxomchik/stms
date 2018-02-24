export default class MainController {
	public userImage: Object;
	public userName: Object;
    constructor() {
        'ngInject';
    }

    $onInit(): void {
		this.userImage = {
			coordinates: {
				x: 200,
				y: 200
			},
			name: ''
		};

		this.userImage = {
			coordinates: {
				x: 200,
				y: 200
			},
			src: ''
		};
    }

	onPositionChanged(initialState: any, coordinates: any): void {
		console.log('onPositionChanged coordinates', coordinates);
	}
}
