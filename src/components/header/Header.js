import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    const id = localStorage.getItem('token');
		this.state = {
      user: {
        id
      },
    };
  }

  componentDidMount() {
    const id = localStorage.getItem('token');
    const { url } = this.props.match;
    if ((url.toLowerCase().indexOf('dashboard') !== -1) && (id === null)) {
      this.props.history.push('/'); 
    }
  }

  render() {
    const { user } = this.state;
    const scrollTop = 0;
    return (
      <header className={!(scrollTop>0) ? 'top': ''}>
        <div className='nav-logo'/>
        <a href="/cat/">Català</a>
      </header>
    );    
  }
};

export default withRouter(Header);