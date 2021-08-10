import Trip from './Trip';

class TripRepository {
  constructor(data) {
    this.trips = data.map(tripData => new Trip(tripData));
  }

  getTripsByUserId(userid) {
    let userTrips = this.trips.filter(trip => trip.userID === userid)
    return userTrips;
    
    // this result i need to push into the traveler array
  }
}

export default TripRepository;