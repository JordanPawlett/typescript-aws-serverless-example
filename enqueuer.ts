import { SNSEvent } from "aws-lambda";
import { SQS } from 'aws-sdk';

const sqs = new SQS({ apiVersion: '2012-11-05' });

export const handler = async (event: SNSEvent) => {
  console.log(JSON.stringify(event.Records[0].Sns.Message, null, 4));
  try {
    await sqs.sendMessage({
      MessageBody: JSON.stringify(event.Records[0].Sns.Message),
      QueueUrl: process.env.QUEUE_URL as string
    }).promise();
  } catch (e) {
    console.log(e);
  }
}