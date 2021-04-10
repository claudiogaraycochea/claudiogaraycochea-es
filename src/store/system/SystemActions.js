export const setDevice = function setDevice(device) {
	return {
		type: 'GET_DEVICE',
		device,
	};
};