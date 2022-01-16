# Serverless Framework Node, Typescript, Testing, Offline, Debug Enabled, HTTP API on AWS

This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.
Along with Offline development, Typescript, debugging, and testing setup.

## Usage

### Deployment

```
$ serverless deploy
```

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://xxxxxxx.execute-api.eu-west-1.amazonaws.com/
```

Which should result in response similar to the following (removed `input` content for brevity):

```json
{
  "message": "Go Serverless v2.0! Your function executed successfully!",
  "input": {
    ...
  }
}
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello
```

Which should result in response similar to the following:

```
{
  "statusCode": 200,
  "body": "{\n  \"message\": \"Go Serverless v2.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```


Alternatively, it is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command:

```
serverless offline
```

### Host a local SQS queue
```
docker run -p 9324:9324 -p 9325:9325 softwaremill/elasticmq-native
```

### Testing
```
yarn test
```

### Debug

VSCode launch.json is setup to debug Typescript code with sourcemaps using serverless offline mode.