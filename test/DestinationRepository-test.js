import chai from 'chai';
const expect = chai.expect;

import DestinationRepository from '../src/DestinationRepository';
import {sampleData} from './sampleData'

describe('DestinationRepository', () => {
  let destinationRepo1

  beforeEach(() => {
    destinationRepo1 = new DestinationRepository (sampleData.destinationsSample)
  });
  
  it('should be a function', () => {
    expect(DestinationRepository).to.be.a('function');
  })
  
  it('Should instantiate all Destinations', () => {
    expect(destinationRepo1).to.be.an.instanceOf(DestinationRepository);
  })

  it('Should have the Destination with id:1 as the first Destination', () => {
    expect(destinationRepo1.destinations[0].destination).to.equal('Lima, Peru'); 
  })

})