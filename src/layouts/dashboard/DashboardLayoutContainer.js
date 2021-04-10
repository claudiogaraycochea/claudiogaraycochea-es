import { connect } from 'react-redux';
import { setDevice } from '../../store/system/SystemActions';

import DashboardLayout from './DashboardLayout';

const mapStateToProps = function mapState(state) {
	return {
		device: state.default.system,
	};
};

const mapDispatchToProps = function mapDispatch(dispatch) {
	return {
		setDevice(device) {
			dispatch(setDevice(device));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout);
