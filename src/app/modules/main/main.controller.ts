export default class MainController {
	public userImage: Object;
	public userName: Object;
	// public nameX: number = 200;
	// public nameY: number = 200;
	// public imgX: number = 200;
	// public imgY: number = 200;
    constructor() {
        'ngInject';
    }

    $onInit(): void {
		this.userImage = {
			coordinates: {
				x: 0,
				y: 0
			},
			name: ''
		};

		this.userImage = {
			coordinates: {
				x: 0,
				y: 0
			},
			src: ''
		};
    }

	onPositionChanged2(coordinates: any): void {
		console.log('onPositionChanged coordinates', coordinates);
	}
}
