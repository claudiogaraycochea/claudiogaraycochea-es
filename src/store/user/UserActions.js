export const getUser = function getUser(user_id) {
	return {
		type: 'GET_USER',
		user_id,
	};
};

/* 
export const getUsers = () => {
	const link = '/users';
	const params = {};
	return (dispatch) => {
		axios.GET(`${API_URL}${link}`, params)
			.then((response) => {
				dispatch({
					type: 'GET_USERS',
					users: response.data,
				});
			})
			.catch((error) => {
				dispatch({
					type: 'GET_USERS_ERROR',
					errorMessage: error,
				});
			});
	};
};
*/
