import TravelerRepository from './TravelerRepository';
import TripRepository from './TripRepository';
import DestinationRepository from './DestinationRepository';

//Repostories
let travelerRepo, tripRepo, destinationRepo
//  activityRepo

//DATA Fetching
let fetchData = (dataType) => {
  return fetch(`http://localhost:3001/api/v1/${dataType}`)
    .then(res => {
      return res.ok ? res.json() : console.log(`ERROR with ${dataType} path`)
    })
    .then(data => data)
}
// let fetchData = (userId) => {
//     return fetch(`http://localhost:3001/api/v1/travelers/${userId}`)
//       .then(res => {
//         return res.ok ? res.json() : console.log(`ERROR with ${userId} path`)
//       })
//       .then(data => data)
//   }


Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations')]).then((data) => {
  updateData(data)
})

let updateData = (data) => {
  travelerRepo = new TravelerRepository(data[0].travelers)
  tripRepo  = new TripRepository(data[1].trips)
  destinationRepo = new DestinationRepository(data[2].destinations)

  console.log(travelerRepo.travelers[0].name)
  console.log(tripRepo.trips[0].status)
  console.log(destinationRepo.destinations[0].destination)

//    need to get only one user by id
//   loggedIn user( traveler) 
//  need to find a way to see if the password is correct 
//   let  currentUser = travelerRepo.findUserByID(`imput form the ${userId} loggin DOM`)
//   activityRepo.updateCurrentUser(currentUser, userRepo)
//   updateDOM()
}

