import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

class FullLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className='min-vh-100'>
				<Header />
				{this.props.children}
        <Footer />
			</div>
		);
	}
}

FullLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default FullLayout;
