import Trip from './Trip';

class TripRepository {
  constructor(data) {
    this.trips = data.map(tripData => new Trip(tripData));
  }

  getTripsByUserId(userid) {

    let userTrips = this.trips.filter(trip => trip.userID === userid)
    return userTrips;
    // this result i need to push into the traveler array


    //   get trip cost
    // add trip cost to 10%  agent fee and return only the total coswt 
    // I will use reduce for that 
    // return this.users.reduce((currentTotal, user) => {
    //   return user.dailyStepGoal + currentTotal
    // }, 0) / this.users.length
  }
}

export default TripRepository;