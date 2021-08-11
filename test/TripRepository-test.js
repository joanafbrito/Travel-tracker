import chai from 'chai';
const expect = chai.expect;

import {sampleData} from './sampleData'
import TripRepository from '../src/TripRepository';
import DestinationRepository from '../src/DestinationRepository'

describe('TripRepository', () => {

  let tripRepo1, destinationRepo1

  beforeEach(() => {
    destinationRepo1 = new DestinationRepository (sampleData.destinationsSample)
    tripRepo1 = new TripRepository (sampleData.tripsSample, destinationRepo1);
  });
  
  it('should be a function', () => {
    expect(TripRepository).to.be.a('function');
  })
  
  it('Should instantiate all Trips', () => {
    expect(tripRepo1).to.be.an.instanceOf(TripRepository);
  })

  it('Should have the trip with id:1 as the first trip', () => {
    expect(tripRepo1.trips[0]).to.deep.equal( 
      {
        "id": 1,
        "userID": 44,
        "destinationID": 49,
        "destination": undefined, // <<---- I GOTTA LOOK AT THIS
        "travelers": 1,
        "date": "2022/09/16",
        "duration": 8,
        "status": "approved",
        "suggestedActivities": []
      });
    
    expect(tripRepo1.trips).to.have.lengthOf(10);

  })

})
