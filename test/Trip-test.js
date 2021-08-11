import chai from 'chai';
const expect = chai.expect;

import {sampleData} from './sampleData'
import Trip from '../src/Trip'
import DestinationRepository from '../src/DestinationRepository'

let trip1, trip2, destinationRepo1

describe('Trip', () => {

  beforeEach(() => {
    destinationRepo1 = new DestinationRepository (sampleData.destinationsSample)

    trip1 = new Trip (sampleData.tripsSample[0], destinationRepo1);
    trip2 = new Trip (sampleData.tripsSample[9], destinationRepo1);
  })
  
  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  })
  
  it('Should instantiate a Trip', () => {
    expect(trip1).to.be.an.instanceOf(Trip);
    expect(trip2).to.be.an.instanceOf(Trip);
  })

  it('Should have  all the Trip data', () => {
    expect(trip1.id).to.equal(1);
    expect(trip1.userID).to.equal(44);
    expect(trip1.destinationID).to.equal(49);
    expect(trip1.travelers).to.equal(1);
    expect(trip1.date).to.equal("2022/09/16");
    expect(trip1.duration).to.equal(8);
    expect(trip1.status).to.equal("approved");

    expect(trip2.id).to.equal(10);
    expect(trip2.userID).to.equal(9);
    expect(trip2.destinationID).to.equal(50);
    expect(trip2.travelers).to.equal(6);
    expect(trip2.date).to.equal("2022/07/23");
    expect(trip2.duration).to.equal(17);
    expect(trip2.status).to.equal("approved");
  })
    
  it('Should start with no suggested Activities', () => {
    expect(trip1.suggestedActivities).to.deep.equal([]);
    expect(trip1.suggestedActivities).to.have.lengthOf(0);
    expect(trip2.suggestedActivities).to.deep.equal([]);
    expect(trip2.suggestedActivities).to.have.lengthOf(0);
  })

})
    