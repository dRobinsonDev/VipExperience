import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EventCard.css';

const EventCard = (props) => {
    return (
        props.events.map(event => {

            return <div id="eventContainer" key={event.id}>
            <div className="card" style={{width: "18rem"}}>
              <img className="card-img-top" src={event.images[0].url} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{event.name}</h5>
                <p className="card-text">Genre: </p>
              </div>
                <a href={event.id} className="btn btn-primary">More Info...</a>
            </div>
            </div>
        })
  );
};

export default EventCard;