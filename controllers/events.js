// const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events';

// module.exports = {
//     currentEvents,
//     getEvent
// }

// function currentEvents() {
//     const options = {
//         method: "GET",
//         mode: "cors",
//         // headers: {
//         //   "Content-Type": "application/json"
//         // }
//       }
//     console.log(process.env.API_KEY)
//     return fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=' + process.env.API_KEY ,options)
//     .then(res=> {
//       if (res.ok) return res.json();
//     })
//     .then(data => CONSOLE.data._embedded.events);

// }

// function getEvent() {

// }