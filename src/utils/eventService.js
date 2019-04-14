module.exports = {
  currentEvents,
  getEvent
}

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

  return fetch('https://app.ticketmaster.com/discovery/v2/events/' + id + '?classificationName=music&apikey=5hnzA3LUAno10MS6fbrBCr45Gk2APEoZ',options)
  .then(res=> {
    if (res.ok) return res.json();
  })
  .then(data => data);
}