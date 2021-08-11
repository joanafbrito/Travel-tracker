import chai from 'chai';
const expect = chai.expect;

import {sampleData} from './sampleData'
import TripRepository from '../src/TripRepository';

describe('TripRepository', () => {

  let tripRepo1

  beforeEach(() => {
    tripRepo1 = new TripRepository (sampleData.tripsSample[0]);
  });
  
  it('should be a function', () => {
    expect(TripRepository).to.be.a('function');
  })
  
  it('Should instantiate all Trips', () => {
    expect(tripRepo1).to.be.an.instanceOf(TripRepository);
  })

  it('Should have the trip with id:1 as the first trip', () => {
    expect(tripRepo1[0]).to.deep.equal( 
      {
        "id": 1,
        "userID": 44,
        "destinationID": 49,
        "travelers": 1,
        "date": "2022/09/16",
        "duration": 8,
        "status": "approved",
        "suggestedActivities": []
      });
    
    expect(tripRepo1).to.have.lengthOf(10);

  })

})
