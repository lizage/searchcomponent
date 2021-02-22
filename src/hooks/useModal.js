import React, { useState } from 'react';
import Modal from '../layout/Modal/Modal';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const show = () => setIsOpen(true);
  const hide = () => setIsOpen(false);

  const RenderModal = ({ children }) => (
    <>
      {isOpen && (
        <Modal>
          <div className="modal__overlay" onClick={hide}>
            <div className="modal__msg" onClick={(e) => e.stopPropagation()}>
              {children}
            </div>
          </div>
        </Modal>
      )}
    </>
  );

  return {
    show,
    hide,
    RenderModal,
  }
}

export default useModal;
