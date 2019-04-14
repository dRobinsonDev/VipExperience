import React from 'react';
import TimeUtility from '../../utils/TimeUtility';
import './EventCard.css';

const EventCard = (props) => {
    return (
        props.events.sort((a,b) => {
          return new Date(a.dates.start.localDate) - new Date(b.dates.start.localDate)
        }).map(event => {

            return <div id="eventContainer" key={event.id}>
            <div className="card" style={{width: "18rem"}}>
              <img className="card-img-top" src={event.images[0].url} alt="Event Card Caption" />
              <div className="card-body">
                <h5 className="card-title">{event.name}</h5>
                <div className='flex-event'>
                  <p className="card-text">Date: {event.dates.start.localDate} </p>
                  <p className="card-text">Time: {TimeUtility(event.dates.start.localTime)} </p>
                </div>
              </div>
              <div className="flex-event">
                <button onClick={() => props.eventModal(event.id)} className="btn btn-primary">Buy Tickets</button> &nbsp; &nbsp;
                <button  className="btn btn-primary">Buy Tickets</button>
              </div>
            </div>
            </div>
        })
  );
};

export default EventCard;