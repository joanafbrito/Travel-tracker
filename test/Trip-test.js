import chai from 'chai';
const expect = chai.expect;

import data from './sampleData'
import Trip from '../src/Trip'

let trip1, trip2 

describe('Trip', () => {
    
    beforeEach(() => {
      Trip1 = new Trip (
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
      Trip2 = new Trip (
      {
        "id": 10,
        "userID": 9,
        "destinationID": 50,
        "travelers": 6,
        "date": "2022/07/23",
        "duration": 17,
        "status": "approved",
        "suggestedActivities": []
      });
    })
  
    it('should be a function', () => {
      expect(Trip).to.be.a('function');
    })
  
    it('Should instantiate a Trip', () => {
      expect(trip1).to.be.an.instanceOf(Trip);
      expect(trip2).to.be.an.instanceOf(Trip);
    })

    it('Should have Trip data', () => {
        expect(trip1.id).to.equal(1);
        expect(trip1.name).to.equal('Ham Leadbeater');
        expect(trip1.type).to.equal('relaxer');
        expect(trip2.id).to.equal(34);
        expect(trip2.name).to.equal('Alexandr Struss');
        expect(trip2.type).to.equal('shopper');
    })
    
    it('Should start with no trips', () => {
        expect(trip1.trips).to.deep.equal([]);
        expect(trip1.trips).to.have.lengthOf(0);
        expect(trip2.trips).to.deep.equal([]);
        expect(trip2.trips).to.have.lengthOf(0);
    })
    