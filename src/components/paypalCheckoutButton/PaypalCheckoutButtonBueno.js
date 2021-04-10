import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class PaypalCheckoutButton extends React.Component {
	render() {
		const client = {
			sandbox:    'AcUwAq1yzGdIqs_PRlnNyXeamKBd1QXC4CWgc3dizk9mttojwOzDQZQYy8ggoext7DwIcyuJMp5s5sxP',
			production: 'Your-Production-Client-ID',
		}
      return (
        <PaypalExpressBtn client={client} currency={'USD'} total={1.00} />
      );
    }
}