import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const Modal = React.memo(
  ({ children }) => {
    const domElement = document.querySelector('#modal-root');

    if (!domElement) return null;

    return ReactDOM.createPortal(
      <div className="modal">
          {children}
      </div>,
      domElement
    );
  }
)

export default Modal;
