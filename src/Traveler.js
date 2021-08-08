class Traveler {
    constructor(currentUserData) {
      this.id = currentUserData.id
      this.name = currentUserData.name
      this.travelerType = currentUserData.travelerType
      this.trips = [];
      this.amountSpent = 0;

    //   get all my trips ?
    //  get all my trips()
    // pasttrips
    // presentTrips -happening today 
    // upcomingTrips - future
    // pendingTrips- not aproved 

    // total amount spent during this year

    }
    getTotalAmoutSpent() {
        // ????????return let getDestinations = this.trips.map(trip => {
            // if (trip.destinationID === destination.id ) {
                // destination.getCost()
            // }

            // return let getDestinations = this.trips.reduce((acc, trip) => {
                // how to get the destinationid?
            //  if (trip.destinationID === destination.id ) {
                // acc += destination.getCost()
                // }
            // },0);



            // forEach(destiantion = destinationID === destination.id)
            // getCost()})

    }
  
    // firstName() {
    //   let names = this.name.split(' ');
    // //   return names[0]
    // }
  }
  
  export default Traveler;
  