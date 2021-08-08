import Traveler from './Traveler';

class TravelerRepository {
    constructor(data) {
        this.travelers = data.map(travelerData => new Traveler(travelerData))
    }

    //   this will come from the login page 
    findTravelerByID(userId) {
        return this.travelers.find(traveler => traveler.id === userId)
    }

    filterAllTravelerTrips(userId) {
        // not sure if i will keep this method here or in the TRaveler
        return this.findTravelerByID(userId).trips

    }

    getTotalSpent() {
        //   get all the trips cost
        // add trip cost to 10%  agent fee and return only the total coswt 
        // I will use reduce for that 
        // return this.users.reduce((currentTotal, user) => {
        //   return user.dailyStepGoal + currentTotal
        // }, 0) / this.users.length
    }
}

export default TravelerRepository;