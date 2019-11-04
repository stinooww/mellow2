import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function ModalOfferte({ handleClose, show, children }) {
  return (
    <div className={show ? 'modal display-block' : 'modal display-none'}>
      <section className="modal-main">
          <div className="modal-main__close">
              <div className="modal-main__close-wrapper">
                  <p className="modal-main__close-text"> Sluiten </p>
                  <FontAwesomeIcon
                      className="closeModal"
                      pull="right"
                      onClick={handleClose}
                      size="10x"
                      icon={faTimes}
                  />
              </div>


          </div>

        {children}
      </section>
    </div>
  );
}

export default ModalOfferte;
