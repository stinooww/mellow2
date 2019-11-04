import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function ModalOfferte({ handleClose, show, children }) {
  return (
    <div className={show ? 'modal display-block' : 'modal display-none'}>
        <section className="modal-main" id="modelMain">
          <div className="modal-main__close">
              <button className="mellow-btn modal-main__close-wrapper" onClick={handleClose}>
                  <p className="modal-main__close-text"> Sluiten </p>
                  <FontAwesomeIcon
                      className="closeModal"
                      size="10x"
                      icon={faTimes}
                  />
              </button>
          </div>
        {children}
      </section>
    </div>
  );
}

export default ModalOfferte;
