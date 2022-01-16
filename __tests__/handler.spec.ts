import { constructAPIGwEvent } from './utils/helpers';

import { handler } from '../src/producer';


jest.mock('aws-sdk', () => {
  class SNS {
    constructor() { }
    public publish() {
      return {
        promise: () => Promise.resolve()
      }
    }
  }
  const httpStub = {
    SNS
  };

  return {
    __esModule: true,
    SNS
  };
});

// This includes all tests for exampleHandler() 
describe('Test exampleHandler', () => {
  it('should return ids', async () => {
    const event = constructAPIGwEvent({}, { method: 'GET', path: '/' });

    // Invoke exampleHandler() 
    const result = await handler(event);

    const expectedResult = {
      statusCode: 200,
      body: JSON.stringify({ message: 'Go Serverless v2.0! Your function executed successfully! With Typescript!' })
    };

    // Compare the result with the expected result 
    expect(result).toEqual(expectedResult);
  });
}); 
