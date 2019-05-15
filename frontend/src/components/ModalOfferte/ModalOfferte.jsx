import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from '@fortawesome/free-solid-svg-icons';

function ModalOfferte({handleClose, show, children}) {

    return (
            <div className={show ? "modal display-block" : "modal display-none"}>
                <section className="modal-main">
                    <FontAwesomeIcon className="closeModal" pull="right" onClick={handleClose} size="10x" icon={faTimes}/>
                    {children}
                </section>
            </div>
    );
}

export default ModalOfferte;