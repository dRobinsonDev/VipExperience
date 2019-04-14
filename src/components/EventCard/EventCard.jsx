import React from 'react';
import TimeUtility from '../../utils/TimeUtility';
import './EventCard.css';

export default class EventCard extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    }
  }
  addToCart = (eventId) => {
		let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
		let id = eventId.toString();
		cart[id] = (cart[id] ? cart[id]: 0);
		let qty = cart[id] + parseInt(this.state[eventId]);
		cart[id] = qty;
		localStorage.setItem('cart', JSON.stringify(cart));
	}

  handleInputChange = event => this.setState({[event.target.name]: event.target.value})

  render() {
    return (
      this.props.events.sort((a,b) => {
        return new Date(a.dates.start.localDate) - new Date(b.dates.start.localDate)
      }).map((event, idx) => {

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
              <input type="number" value={this.state[event.id]} name="quantity" onChange={this.handleInputChange} className="float-right" style={{ width: "60px", marginRight: "10px", borderRadius: "3px"}}/>   
              <button onClick={() =>this.addToCart(event.id)} className="btn btn-primary">Buy Tickets</button> &nbsp; &nbsp;
            </div>
          </div>
          </div>
      })
    );
  };
}
