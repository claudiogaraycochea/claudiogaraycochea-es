import React from 'react';
import ReactDom from 'react-dom';
import paypal from 'paypal-checkout';

const PaypalCheckoutButton = ({order}) => {
  const paypalConf = {
    currency: 'USD',
    env: 'sandbox',
    client: {
      sandbox: 'AcUwAq1yzGdIqs_PRlnNyXeamKBd1QXC4CWgc3dizk9mttojwOzDQZQYy8ggoext7DwIcyuJMp5s5sxP',
      production: '-- id--',
    },
    style: {
      label: 'pay',
      size: 'medium',
      color: 'gold'
    }
  };

  const PaypalButton = paypal.Button.driver('react', { React, ReactDom });

  const payment = (data, actions) => {
    const payment = {
      transactions: [
        {
          amount: {
            total: 100,
            currency: paypalConf.currency,
          },
          description: 'Compra en Test App',
          custom: 1 || '',
          item_list: {
            items: 1
          }
        }
      ],
      note_to_payer: 'Contactanos para cualquier aclaración',
    };
    return actions.payment.create({ payment });
  };

  const onAuthorize = (data, actions) => {
    return actions.payment.execute()
    .then(response => {
      console.log(response);
      alert(`El pago fue procesado correctamente, ID: ${response.id}`);
    })
    .catch(error => {
      console.log(error);
      alert('Ocurrio un error al procesar el pago con Paypal');
    });
  };

  const onError = (error) => {
    console.log(error);
    alert('El pago no fue realizado, vuelva a intentarlo.');
  }

  const onCancel = (data, actions) => {
    alert('Pago no realizado, el usuario canceló el proceso');
  }

  return (
    <PaypalButton
      env={paypalConf.env}
      client={paypalConf.client}
      payment={(data, actions) => payment(data, actions)}
      onAuthorize={(data, actions) => onAuthorize(data, actions)}
      onCancel={(data, actions) => onCancel(data, actions)}
      onError={(error) => onError(error)}
      style={paypalConf.style}
      commit
      locate="es_ES"
    />
  );
};

export default PaypalCheckoutButton;