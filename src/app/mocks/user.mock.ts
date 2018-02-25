import { IUser } from '../models/user.model';

export const userMock: IUser = {
	image: {
		src: 'assets/images/user.png',
		coordinates: {
			x: 200,
			y: 200
		}
	},
	information: {
		name: 'STMS user',
		coordinates: {
			x: 200,
			y: 200
		}
	}
};
