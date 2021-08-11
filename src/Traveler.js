import {fetchUserData,travelerRepo, tripRepo, destinationRepo} from './fetch';


class Traveler {
    constructor(currentUserData) {
      this.id = currentUserData.id
      this.name = currentUserData.name
      this.travelerType = currentUserData.travelerType
      this.trips = tripRepo.getTripsByUserId(this.id);
      this.amountSpent = 0;

    //   get all my trips ?
    //  get all my trips()
    // pasttrips
    // presentTrips -happening today 
    // upcomingTrips - future
    // pendingTrips- not aproved 

    // total amount spent during this year
    }

    // getAllTrips () {
    //     let userTrips = this.trips.push(TripRepository.getTripsByUserId(this.id));

    //     return userTrips;
    // }


    getTotalAmoutSpent(currentYear) {

        let currentYearTrips = this.trips.filter(trip => {
            if (trip.date.includes(currentYear)) {
                return trip 
            }
        })

        let totalCost = currentYearTrips.reduce((acc, trip) => {

            let destination = destinationRepo.destinations.find(item => item.id === trip.destinationID)
        
          
            acc += destination.getTripCost(trip.travelers, trip.duration)
            
            return acc
        },0)

        return totalCost;

    }
  
    // firstName() {
    //   let names = this.name.split(' ');
    // //   return names[0]
    // }
  }
  
  export default Traveler;
  