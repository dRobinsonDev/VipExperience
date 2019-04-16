import React from 'react';
import EventCard from '../../components/EventCard/EventCard';
import EventModal from '../../components/EventModal/EventModal';
import EventService from '../../utils/eventService';
import MyCarousel from '../../components/Carousel/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EventsPage.css'


export default class EventsPage extends React.Component {
    state = {
        events: null,
        showModal: false,
        modalChildren: null
    }
     getInitialState() {
      EventService.currentEvents()
      .then(data => {
          this.setState({events:data});
      })
    }   

    eventModal = (id) => {
        EventService.getEvent(id)
        .then(async (data) => {
            await this.setState({modalChildren:data});
        });
        this.showModal();
    }

    hideModal = () => {
        document.querySelector('body').className = '';
        this.setState({ showModal: false, modalChildren: null});
    };

    showModal = () => {
        document.querySelector('body').className = 'modal-open';
        this.setState({ showModal: true });
      };
    
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
                {this.state.events && <EventCard {...this.state} eventModal={this.eventModal} /> }
                {this.state.modalChildren && <EventModal showModal={this.state.showModal} handleClose={this.hideModal} modalBody={this.state.modalChildren} /> }
            </div>
        </>
        )
    }
}