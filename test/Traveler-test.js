import chai from 'chai';
const expect = chai.expect;

import data from './sampleData'
import Traveler from '../src/Traveler'

let traveler1, traveler2 

describe('Traveler', () => {
    
    beforeEach(() => {
      traveler1 = new Traveler (
      {
        "id": 1,
        "name": "Ham Leadbeater",
        "travelerType": "relaxer"
      });
      traveler2 = new Traveler (
      {
            "id": 34,
            "name": "Alexandr Struss",
            "travelerType": "shopper"
      });
    })
  
    it('should be a function', () => {
      expect(Traveler).to.be.a('function');
    })
  
    it('Should instantiate a Traveler', () => {
      expect(traveler1).to.be.an.instanceOf(Traveler);
      expect(traveler2).to.be.an.instanceOf(Traveler);
    })

    it('Should have traveler data', () => {
        expect(traveler1.id).to.equal(1);
        expect(traveler1.name).to.equal('Ham Leadbeater');
        expect(traveler1.type).to.equal('relaxer');
        expect(traveler2.id).to.equal(34);
        expect(traveler2.name).to.equal('Alexandr Struss');
        expect(traveler2.type).to.equal('shopper');
    })
    
    it('Should start  with no trips', () => {
        expect(traveler1.trips).to.deep.equal([]);
        expect(traveler1.trips).to.have.lengthOf(0);
        expect(traveler2.trips).to.deep.equal([]);
        expect(traveler2.trips).to.have.lengthOf(0);
    })
    