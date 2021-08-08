import Destination from './Destination';

class DestinationRepository {
  constructor(data) {
    this.destinations = data.map(destinationData => new Destination(destinationData));
  }

//   getCost() {

//   }
}

export default DestinationRepository;