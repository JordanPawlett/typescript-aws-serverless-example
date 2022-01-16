// Load the AWS SDK for Node.js
import { APIGatewayProxyEvent } from 'aws-lambda';
import { SNS } from 'aws-sdk';

// Create publish parameters
const params = {
  Message: 'MESSAGE_TEXT', /* required */
  TopicArn: process.env.TOPIC_ARN
};

// dev use only.
if (typeof params.TopicArn !== 'string') {
  params.TopicArn = "arn:aws:sns:eu-west-1:123456789012:hello-service-dev-my-sns-topic";
}

const snsClient = new SNS({ apiVersion: '2010-03-31' });

export const handler = async (event: APIGatewayProxyEvent) => {
  console.log('looks like it works...');

  await snsClient.publish(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v2.0! Your function executed successfully! With Typescript!"
      }
    ),
  };
};
