class Destination {
    constructor(destinationData) {
      this.id = destinationData.id;
      this.destination = destinationData.destination;
      this.estimatedLodgingCostPerDay = destinationData.estimatedLodgingCostPerDay;
      this.estimatedFlightCostPerPerson = destinationData.estimatedFlightCostPerPerson;
      this.image = destinationData.image;
      this.alt = destinationData.alt;
    }

    getTripCost(travelersNum, duration ) {
            //   get trip cost
    // add trip cost to 10%  agent fee and return only the total coswt 
        // trip data - travelers/ days - will come from the trip data and dominput
        let tripCost = (this.estimatedLodgingCostPerDay * duration) + (this.estimatedFlightCostPerPerson * travelersNum);
        let agentFee = tripCost * 0.1;
        return tripCost + agentFee; 
    }
  
  }
  
  export default Destination;