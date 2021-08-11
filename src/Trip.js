class Trip {
  constructor(tripData, destinationRepo) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.destination = destinationRepo.destinations.find(item => item.id === tripData.destinationID)
    this.travelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = tripData.suggestedActivities;
  }
}
  
export default Trip;
  