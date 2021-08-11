import Destination from './Destination';
import {fetchUserData,travelerRepo, tripRepo, destinationRepo} from './fetch';

class DestinationRepository {
  constructor(data) {
    this.destinations = data.map(destinationData => new Destination(destinationData));
  }

//   getCost() {

//   }
}

export default DestinationRepository;