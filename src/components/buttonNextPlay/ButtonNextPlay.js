import React, { Component }from "react";
import { QRCode } from "react-qr-svg";
import './ButtonNextPlay.css';

class ButtonNextPlay extends Component {
  constructor(props) {
		super(props);
		this.state = {
    };
  }

  render() {
    const { device } = this.props;

    if (device === 'mobile') {
      return (
        <div className='button-next-play'>
          <div className='cta-wrapper'>
            <div className='button-next-play-row'>
              <button className='button-next-play-whatsapp'>
                <div className='button-next-play-whatsapp-icon'/>
                Whatsapp
              </button>
            </div>
            <div className='button-next-play-row'>
              <button className='button-next-play-telephone'>
                <div className='button-next-play-telephone-icon'/>
                Call Now
              </button>
            </div>
          </div>
          <button className='button-next-play-button'>
            <div className='mobile'>
              <div className='button-next-play-mobile' />
            </div>
          </button>
        </div>
      );
    }

    return (
      <div className='button-next-play'>
        <div className='qr-wrapper'>
          <div className='button-next-play-title'>
            Contactanos desde tu móvil (Whatsapp/Llamada)
          </div>
          <QRCode
              bgColor="#FFFFFF"
              fgColor="#000000"
              level="Q"
              style={{ width: 128 }}
              value="some text"
          />
        </div>
        <button className='button-next-play-button'>
          <div className='desktop'>
            <div className='button-next-play-desktop' />
          </div>
        </button>
      </div>
    );
  }
}

export default ButtonNextPlay;