import React from 'react';
import EventCard from '../../components/EventCard/EventCard';
import EventService from '../../utils/eventService';
import MyCarousel from '../../components/Carousel/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EventsPage.css'


export default class EventsPage extends React.Component {
    state = {
        events: null
    }
     getInitialState() {
      EventService.currentEvents()
      .then(data => {
          this.setState({events:data});
      })
    }   
    
    
    componentDidMount() {
       this.getInitialState();
    }
    render(props) {
        return (
        <>
            <div id="Carousel">    
            <MyCarousel />
            </div>
            <div id="Events">
                {this.state.events && <EventCard events={this.state.events} /> }
            </div>
        </>
        )
    }
}
 