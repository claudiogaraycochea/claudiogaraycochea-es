// import userMock from './userMock.json';

const initialState = {
	userData: {},
	errorMessage: '',
};

export default function user(state = initialState, action) {
	switch (action.type) {
		case 'GET_USER':
			return {
				...state,
				userData: {},
			};
		case 'GET_USER_ERROR':
			return {
				...state,
				errorMessage: action.errorMessage,
			};
		default:
			return state;
	}
}
