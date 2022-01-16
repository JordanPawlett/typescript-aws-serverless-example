import { SQSEvent } from "aws-lambda";

export const handler = async (event: SQSEvent) => {
  console.log(event);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Message handled"
      }
    ),
  };
};
