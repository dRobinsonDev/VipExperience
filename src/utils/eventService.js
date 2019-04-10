module.exports = {
  currentEvents,
  getEvent
}
const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events";

const options = {
  mode: 'cors'
};
function currentEvents(data) {
  return fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=5hnzA3LUAno10MS6fbrBCr45Gk2APEoZ',options)
    .then(res=> {
      if (res.ok) return res.json();
    })
    .then(data => data._embedded.events);
}

function getEvent(id) {

  return fetch(`${BASE_URL}classificationName=music&apikey={process.env.API_KEY}`, {mode: 'no-cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
  });
}