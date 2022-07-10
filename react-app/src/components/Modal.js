import React, { Children } from 'react';

import './styles/Modal.css';


const Modal = ({ handleClose, show, children  }) => {
	const showHideClassName = show ? "modal display-block" : "modal display-none";

	return (
		<div className={showHideClassName}>
			<section className="modal-main">
				{children }
				<button className="modal-close is-large" aria-label="close" onClick={handleClose}></button>
			</section>
		</div>
	);
};

export default Modal
