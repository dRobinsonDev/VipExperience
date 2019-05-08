import React from 'react';
import TimeUtility from '../../utils/TimeUtility';
import './EventCard.css';

export default class EventCard extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      quantity: {

      }
    }
  }
  addToCart = (evt, evtQty) => {
		let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
		let tickets = localStorage.getItem('tickets') ? JSON.parse(localStorage.getItem('tickets')) : {};
    let id = evt.id.toString();
    if(!evtQty) {
      evtQty = 1;
    } 
    cart[id] = (cart[id] ? cart[id]: 0);
    tickets[id] = evt.name;
		let qty = cart[id] + parseInt(evtQty);
		cart[id] = qty;
		localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('tickets', JSON.stringify(tickets));
    this.setState({[id]: 0});
	}
  handleInputChange = event => this.setState({[event.target.name]: event.target.value})
  

  render() {
    return (
      this.props.events.sort((a,b) => {
        return new Date(a.dates.start.localDate) - new Date(b.dates.start.localDate)
      }).map((event, idx) => {
          return (
            <div className="eventContainer" key={event.id}>
              <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={event.images[0].url} alt="Event Card Caption" />
                <div className="card-body">
                  <h5 className="card-title">{event.name}</h5>
                  <div className='flex-event info'>
                    <p className="card-text">Date: {event.dates.start.localDate} </p>
                    <p className="card-text">Time: {TimeUtility(event.dates.start.localTime)} </p>
                  </div>
                  <p>Price: $200 a ticket</p>
                </div>
                <div className="flex-event">
                  <input type="number" placeholder="0" value={this.state[event.id] || 0} name={event.id} onChange={this.handleInputChange} className="float-right" style={{ width: "60px", marginRight: "10px", borderRadius: "3px"}}/>
                  <button onClick={() =>{
                    this.addToCart(event, this.state[event.id])
                    let currentQty = event.id;
                    this.setState({ currentQty:  null})
                    }} 
                className="btn btn-primary">Buy A Ticket</button> &nbsp; &nbsp;
                </div>
              </div>
            </div>
          )
      })
    );
  };
}
