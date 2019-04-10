import React from 'react';
import './EventCard.css';

const EventCard = (props) => {
  console.log('PROPS ', props)
    return (
        props.events.map(event => {

            return <div id="eventContainer" key={event.id}>
            <div className="card" style={{width: "18rem"}}>
              <img className="card-img-top" src={event.images[0].url} alt="Event Card Caption" />
              <div className="card-body">
                <h5 className="card-title">{event.name}</h5>
                <p className="card-text">Genre: </p>
              </div>
                <button onClick={() => props.eventModal(event.id)} className="btn btn-primary">More Info...</button>
            </div>
            </div>
        })
  );
};

export default EventCard;