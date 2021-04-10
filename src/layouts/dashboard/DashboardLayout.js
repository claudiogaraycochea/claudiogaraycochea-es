import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/header/Header';

class DashboardLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	UNSAFE_componentWillMount() {
		const device = {
			classification_id: 5,
			device_identifier: 'web',
			locale: 'es',
			market_code: 'es',
		};
		this.props.setDevice(device);
	}
	
	render() {
		const { children} = this.props;
		return (
			<div className="main-app">
				<Header/>
				<div className='main-container' props={this.props}>
					{children}
				</div>
			</div>
		);
	}
}

DashboardLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default DashboardLayout;