// import userMock from './userMock.json';

const initialState = {
	device: {},
	errorMessage: '',
};

export default function system(state = initialState, action) {
	switch (action.type) {
		case 'GET_DEVICE':
			return {
				...state,
				device: action.device,
			};
		case 'GET_DEVICE_ERROR':
			return {
				...state,
				errorMessage: action.errorMessage,
			};
		default:
			return state;
	}
}
