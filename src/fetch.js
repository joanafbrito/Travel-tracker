// import TravelerRepository from './TravelerRepository';
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
    //   userData = new Traveler(userId)?
    //   updateCurrentUser(userData);
} 
  
Promise.all([fetchData('trips'), fetchData('destinations')]).then((data) => {
    updateData(data)
})
    
let updateData = (data) => {
    // travelerRepo = new TravelerRepository(data[0].travelers)
    destinationRepo = new DestinationRepository(data[1].destinations)
    tripRepo  = new TripRepository(data[0].trips, destinationRepo)
        
    // console.log(travelerRepo.travelers[0].name)
    console.log(tripRepo.trips[0].status)
    console.log(destinationRepo.destinations[0].destination)
        //    need to get only one user by id
        //   loggedIn user( traveler) 
        //  need to find a way to see if the password is correct 
        //   updateDOM()
}
    
let updateCurrentUser = (userData) => {
        // console.log(userData)
    currentUser = new Traveler(userData, tripRepo);
    console.log(currentUser)
}
    

// Post
 let postNewTrip = (newTripdata) => {
  return fetch(`http://localhost:3001/api/v1/trips`, {
    method:'POST',
    body:JSON.stringify(newTripdata),
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
  // .catch((error)=> {
  //   console.log(error)
  // })

  

 }


// fetchUserData(1);
    // console.log('hg')- this line of code runs before the promisses being answered .

export {fetchUserData, postNewTrip, currentUser, tripRepo, destinationRepo}