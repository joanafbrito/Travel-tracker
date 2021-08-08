class Trip {
    constructor(tripData) {
      this.id = tripData.id;
      this.userID = tripData.userID;
      this.destinationID = tripData.destinationID;
      this.travelers = tripData.travelers;
      this.date = tripData.date;
      this.duration = tripData.duration;
    //   need to print the status ino the page
      this.status = tripData.status;
      this.suggestedActivities = tripData.suggestedActivities;
    }
    //  trip cost? will come from the destination


  }
  
  export default Trip;
  