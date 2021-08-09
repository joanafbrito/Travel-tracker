class Destination {
    constructor(destinationData) {
      this.id = destinationData.id;
      this.destination = destinationData.destination;
      this.estimatedLodgingCostPerDay = destinationData.estimatedLodgingCostPerDay;
      this.estimatedFlightCostPerPerson = destinationData.estimatedFlightCostPerPerson;
      this.duration = destinationData.duration;
      this.image = destinationData.image;
      this.alt = destinationData.alt;
    }

    getCost(travelers, duration ) {
        // trip data - travelers/ days 
        // let tripCost = ((this.estimatedLodgingCostPerDay * this.duration) + 
        //                  (this.estimatedFlightCostPerPerson) ) * number of travelers.
    }
  
  }
  
  export default Destination;