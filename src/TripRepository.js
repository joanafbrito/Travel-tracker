import Trip from './Trip';
import {fetchUserData,travelerRepo, tripRepo, destinationRepo} from './fetch';

class TripRepository {
  constructor(data, destinationRepo) {
    this.trips = data.map(tripData => new Trip(tripData, destinationRepo));
  }

  getTripsByUserId(userid) {
    let userTrips = this.trips.filter(trip => trip.userID === userid)
    return userTrips;
  }
}

export default TripRepository;