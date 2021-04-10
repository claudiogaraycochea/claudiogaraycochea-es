import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { Alert } from 'react-bootstrap';

export default class PaypalCheckoutButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: {
				show: false,
				text: '',
				type: '',
				variant: ''
			}
		};
	}

  render() {
		const onSuccess = (payment) => {
			// 1, 2, and ... Poof! You made it, everything's fine and dandy!
			console.log("Payment successful!", payment);
			this.setState({ 
				message: {
					show: true,
					text: 'Tu pago se ha realizado correctamente. En menos de 48hs estaras recibiendo la invitacion privada para acceder al curso.',
					type: 'successful',
					variant: 'success'
				}
			})
      // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
		}

		const onCancel = (data) => {
			// The user pressed "cancel" or closed the PayPal popup
			console.log('Payment cancelled!', data);
			this.setState({ 
				message: {
					show: true,
					text: 'No hemos registrado tu pago, si tienes algún inconveniente para realizarlo envía un mensaje a nuestro Whatsapp.',
					type: 'cancelled',
					variant: 'danger'
				}
			})
			// You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
		}

		const onError = (err) => {
			// The main Paypal script could not be loaded or something blocked the script from loading
			console.log("Error!", err);
			this.setState({ 
				message: {
					show: true,
					text: 'No hemos registrado tu pago, vuelve a intentarlo.',
					type: 'error',
					variant: 'danger'
				}
			})
			// Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
			// => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
		}

		let env = 'production'; // you can set this string to 'production'
		let currency = 'EUR'; // you can set this string from your props or state  
		let total = this.props.amount;  // this is the total amount (based on currency) to charge
		// Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

		const client = {
			sandbox:    'AcUwAq1yzGdIqs_PRlnNyXeamKBd1QXC4CWgc3dizk9mttojwOzDQZQYy8ggoext7DwIcyuJMp5s5sxP',
			production: 'AQjXgSyBqikAwCDXHfP9r082rd1aK5ZD0BFzIf6K_wV5Ld8u1PT4hOsyeGcsVeI-7eOSP0Y_F5mvE1fe',
		}
		// In order to get production's app-ID, you will have to send your app to Paypal for approval first
		// For your sandbox Client-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App" unless you have already done so):
		//   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
		// Note: IGNORE the Sandbox test AppID - this is ONLY for Adaptive APIs, NOT REST APIs)
		// For production app-ID:
		//   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

		// NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
    const style = {
      label: 'pay',
      size: 'large',
      color: 'gold'
		}
		const { message } = this.state;
		console.log('message:', message);
		return (
			<div>
				{(message.show) ? <Alert variant={message.variant}>{message.text}</Alert> : null}
				<PaypalExpressBtn 
					env={env}
					client={client}
					currency={currency}
					total={total}
					onError={onError}
					onSuccess={onSuccess}
					onCancel={onCancel}
					style={style}
				/>					
			</div>
		);
  }
}