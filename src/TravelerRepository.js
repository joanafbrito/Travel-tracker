import Traveler from './Traveler';

class TravelerRepository {
  constructor(data) {
    this.travelers = data.map(travelerData => new Traveler(travelerData))
  }

//   this will come from the login page 
  findUserByID(userId) {
    return this.travelers.find(user => user.id === userId)
  }

//   get all the trips? 

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