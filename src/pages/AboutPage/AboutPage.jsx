import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutPage.css'


export default class AboutPage extends React.Component {
    render(props) {
        return (
        <div id="About">
            <h1>About Us</h1>
            <hr />
            <h3>What is VIP Experiences?</h3>
            <p><em> For new business and partnership information, contact our Business Develpment team at ...email....</em></p>
            <p>VIP Experiences strives to provide clients hassle free service to view live music, enjoy travel and feel like a VIP. We want to provide you with a "one stop shop" that not only saves you time, but money when traveling to see music. Our VIP service is fully customizable to offer unprecedented service and experiences to a wide variety to guests. By providing top-notch customer service, we go out of our way to make sure all of our client's needs are met and their live music experience is a pleasant and memorable one.</p>
            <p>Our VIP perks include VIP tickets to concerts, luxury party bus and limousine rentals to and from area events, on site amenities ranging from meet & greets with scheduled bands and celebrities, VIP backstage access, bottle service and many more perks.</p>
            <h3>Why VIP Experiences?</h3>
            <p>We're as passionate about music as you are. We know that our VIP Experiences are better when its handled by top notch service from start to finish.</p>
            <p>If you're ready for the experience of your life? Then signup and become a VIP now</p> 
            <Link to="/Signup"><button className="btn blue btn-default">Sign Up</button></Link>
        </div>
        )
    }
}
 