import React from "react";
import './Modals.css';

export const Modal = (props) => {
	const { showModal, handleClose, children } = props;
	if (!showModal) return null;
	return (
		<div className='modal-bg'>
			<div className='modal'>
				<div className='header'>
					Header
					<button onClick={handleClose}>
						Close
					</button>
				</div>
				<div className='content'>
					{children}
				</div>
			</div>			
		</div>
	);
};