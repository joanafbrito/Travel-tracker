import TripRepository from './TripRepository';
import DestinationRepository from './DestinationRepository';
import Traveler from './Traveler';
import Trip from './Trip';

//Repositories
let tripRepo, destinationRepo, currentUser

//DATA Fetching
let fetchData = (dataType) => {
  return fetch(`http://localhost:3001/api/v1/${dataType}`)
    .then(res => {
      return res.ok ? res.json() : console.log(`ERROR with ${dataType} path`)
    })
    .then(data => data)
}

let fetchUserData = (userId) => {
  return fetch(`http://localhost:3001/api/v1/travelers/${userId}`)
    .then(res => {
      return res.ok ? res.json() : console.log(`ERROR with ${userId} path`)
    })
    .then((userData) => {
      updateCurrentUser(userData)
    })
} 
  
Promise.all([fetchData('trips'), fetchData('destinations')]).then((data) => {
  updateData(data)
})
    
let updateData = (data) => {

  destinationRepo = new DestinationRepository(data[1].destinations)
  tripRepo  = new TripRepository(data[0].trips, destinationRepo)
}
    
let updateCurrentUser = (userData) => {
  currentUser = new Traveler(userData, tripRepo);
}
    

// Post
let postNewTrip = (newTripdata) => {
  return fetch(`http://localhost:3001/api/v1/trips`, {
    method: 'POST',
    body: JSON.stringify(newTripdata),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      return res.ok ? res.json() : console.log(`ERROR with newTripData path`)
    })
    .then((newTrip) => {
      console.log(newTrip.message);
      let pendingTrip = new Trip(newTrip.newTrip, destinationRepo);
      currentUser.trips.push(pendingTrip);
      return pendingTrip;
    })
}

export {fetchUserData, postNewTrip, currentUser, tripRepo, destinationRepo}