export interface IUser {
	image: {
		src: string;
		coordinates: ICoordinates
	};
	information: {
		name: string;
		coordinates: ICoordinates;
	};
}

export interface ICoordinates {
	x: number;
	y: number;
}
