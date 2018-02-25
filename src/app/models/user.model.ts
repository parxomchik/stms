export interface IUser {
	image: IImage;
	information: IInformation;
}

export interface ICoordinates {
	x: number;
	y: number;
}

interface IImage {
	src: string;
	coordinates: ICoordinates;
}

interface IInformation {
		name: string;
		coordinates: ICoordinates;
}
