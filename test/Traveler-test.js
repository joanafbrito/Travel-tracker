import chai from 'chai';
const expect = chai.expect;


import Traveler from '../src/Traveler'
import DestinationRepository from '../src/DestinationRepository'
import {sampleData} from './sampleData'
import TripRepository from '../src/TripRepository';

let traveler1, traveler2, destinationRepo1, trip1

describe('Traveler', () => {
    
  beforeEach(() => {
    destinationRepo1 = new DestinationRepository (sampleData.destinationsSample)
    trip1 = new TripRepository (sampleData.tripsSample, destinationRepo1);

    traveler1 = new Traveler ({
        "id": 1,
        "name": "Ham Leadbeater",
        "travelerType": "relaxer"
      }, trip1)
    traveler2 = new Traveler (
      {
        "id": 34,
        "name": "Alexandr Struss",
        "travelerType": "shopper"
      }, trip1)
  })
  
  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  })
  
  it('Should instantiate a Traveler', () => {
    expect(traveler1).to.be.an.instanceOf(Traveler);
    expect(traveler2).to.be.an.instanceOf(Traveler);
  })

  it('Should have all the traveler data', () => {
    expect(traveler1.id).to.equal(1);
    expect(traveler1.name).to.equal('Ham Leadbeater');
    expect(traveler1.travelerType).to.equal('relaxer');
    expect(traveler2.id).to.equal(34);
    expect(traveler2.name).to.equal('Alexandr Struss');
    expect(traveler2.travelerType).to.equal('shopper');
  })
    
  it('Should start with no trips', () => {
    expect(traveler1.trips).to.deep.equal([]);
    expect(traveler1.trips).to.have.lengthOf(0);
    expect(traveler2.trips).to.deep.equal([]);
    expect(traveler2.trips).to.have.lengthOf(0);
  })
  
})
    