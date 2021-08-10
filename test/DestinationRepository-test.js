import chai from 'chai';
const expect = chai.expect;

import {sampleData} from './sampleData'
import Destination from '../src/Destination'
import DestinationRepository from '../src/DestinationRepository';

let destinationRepo1

describe('DestinationRepository', () => {
    let destinationRepo1

    beforeEach(() => {
      destinationRepo1 = new DestinationRepository (
        //   sampleData.destinationsSample)
    //   console.log(destinationRepo1)
      {
        "id": 1,
        "destination": "Lima, Peru",
        "estimatedLodgingCostPerDay": 70,
        "estimatedFlightCostPerPerson": 400,
        "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
        "alt": "overview of city buildings with a clear sky"
      })
    });
  
    it('should be a function', () => {
      expect(DestinationRepository).to.be.a('function');
    })
  
    it('Should instantiate all Destinations', () => {
      expect(destinationRepo1).to.be.an.instanceOf(DestinationRepository);
    })

    it('Should have the Destination with id:1 as the first Destination', () => {
        expect(destinationRepo1[0].destination).to.equal('Lima, Peru'); 
            // {
            //    "id": 1,
            //    "destination": "Lima, Peru",
            //    "estimatedLodgingCostPerDay": 70,
            //    "estimatedFlightCostPerPerson": 400,
            //    "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
            //    "alt": "overview of city buildings with a clear sky"
            // });
        
        expect(destinationRepo1).to.have.lengthOf(10);

    })

})