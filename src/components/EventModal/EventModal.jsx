import React from 'react';
import TimeUtility from '../../utils/TimeUtility';
import './EventModal.css';

const EventModal = (props) => {
    console.log('SHOW ', props)
    return (
        props.modalBody ? 
        <div className={props.showModal ? "modal display-block" : "modal display-none"} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">{props.modalBody.name}</h5>
                <button type="button" className="close" onClick={props.handleClose} aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <img className='modal-img' src={props.modalBody.images[0].url} />
            <div className="modal-body">
                <p>Locaton: {props.modalBody._embedded.venues[0].name}</p>
                <p>Date: {props.modalBody.dates.start.localDate}</p>
                <p>Time: {TimeUtility(props.modalBody.dates.start.localTime)}</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={props.handleClose}>Close</button>
            </div>
            </div>
        </div>
        </div>
        :
        <div><h1>At this time there is no additional info on this event.</h1></div>
    );
  };

  export default EventModal;