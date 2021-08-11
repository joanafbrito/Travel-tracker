import Traveler from './Traveler';

class TravelerRepository {
  constructor(data) {
    this.travelers = data.map(travelerData => new Traveler(travelerData))
  }

  filterAllTravelerTrips(userId) {
    return this.findTravelerByID(userId).trips
  }
}

export default TravelerRepository;