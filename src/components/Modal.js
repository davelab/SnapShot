import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide, body }) =>  isShowing ? ReactDOM.createPortal(
  <>
    <div className="modal-overlay" data-testid="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" data-testid="close-button" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {body}
        </div>
      </div>
    </div>
  </>, document.body
) : null;

export default Modal;