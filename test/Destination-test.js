import chai from 'chai';
const expect = chai.expect;

import Destination from '../src/Destination'

describe('Destination', () => {
  let destination1, destination2 

    beforeEach(() => {
      destination1 = new Destination (
      {
        "id": 1,
        "destination": "Lima, Peru",
        "estimatedLodgingCostPerDay": 70,
        "estimatedFlightCostPerPerson": 400,
        "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
        "alt": "overview of city buildings with a clear sky"
      });
      destination2 = new Destination (
      {
        "id": 8,
        "destination": "Tokyo, Japan",
        "estimatedLodgingCostPerDay": 125,
        "estimatedFlightCostPerPerson": 1000,
        "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1971&q=80",
        "alt": "city with people walking in crosswalk and brightly lit shops at night"
      });
    })
  
    it('should be a function', () => {
      expect(Destination).to.be.a('function');
    })
  
    it('Should instantiate a Destination', () => {
      expect(destination1).to.be.an.instanceOf(Destination);
      expect(destination2).to.be.an.instanceOf(Destination);
    })

    it('Should have all the Destination data', () => {
        expect(destination1.id).to.equal(1);
        expect(destination1.destination).to.equal('Lima, Peru');
        expect(destination1.estimatedLodgingCostPerDay).to.equal(70);
        expect(destination1.estimatedFlightCostPerPerson).to.equal(400);
        expect(destination1.image).to.equal("https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
        expect(destination1.alt).to.equal("overview of city buildings with a clear sky");

        expect(destination2.id).to.equal(8);
        expect(destination2.destination).to.equal('Tokyo, Japan');
        expect(destination2.estimatedLodgingCostPerDay).to.equal(125);
        expect(destination1.estimatedFlightCostPerPerson).to.equal(400);
        expect(destination2.image).to.equal("https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1971&q=80");
        expect(destination2.alt).to.equal("city with people walking in crosswalk and brightly lit shops at night");
    })     
})
    