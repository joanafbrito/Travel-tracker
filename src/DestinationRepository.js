import Destination from './Destination';

class DestinationRepository {
  constructor(data) {
    this.destinations = data.map(destinationData => new Destination(destinationData));
  }

//   getCost() {

    // I will use reduce for that 
    // return this.users.reduce((currentTotal, user) => {
    //   return user.dailyStepGoal + currentTotal
    // }, 0) / this.users.length
//   }
}

export default DestinationRepository;