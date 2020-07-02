import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      className='modal-fade '
      id='staticBackdrop'
      data-backdrop='static'
      data-keyboard='false'
      tabIndex='-1'
      role='dialog'
      aria-labelledby='staticBackdropLabel'
      aria-hidden='true'
      onClick={props.onDismiss}
    >
      <div
        className='modal-dialog modal-dialog-centered '
        onClick={(e) => e.stopPropagation()}
      >
        <div className='modal-content'>
          <div className='modal-header bg-light'>
            <h5 className='modal-title' id='staticBackdropLabel'>
              {props.title}
            </h5>
          </div>
          <div className='modal-body'>
            <p>{props.content}</p>
          </div>
          <div className='modal-footer'>{props.actions}</div>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
