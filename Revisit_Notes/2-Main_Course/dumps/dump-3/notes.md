# Video Watched: https://youtu.be/bFn3GgS5Eg4?si=6sl-T3Be_ajX5x9c

- 76-> The deployment must minimize the exposure of potential errors to end users. (use case) - The application cannot experience downtime outside the specified maintenance window. (use case) - Canary. ->  Deployment configuration types: Canary, all-at-once, linear, in-place (Their use cases similar to the above two.)?

- 77-> Standard Parameter vs Advanced Parameter in parameter store? -> Advanced parameter in AWS Systems Manager Parameter Store - Set Expiration and ExpirationNotification policy types.

- 78-> NAT Gateway, Internet Gateway, Network ACL, Security Group, VPC, Subnet interrelation in an architecture? -> The Lambda function has been updated and configured to connect tot he private subnet of a VPC?

- 79-> Single vs Multiple stage in API Gateway? -> API Gateway Stage Variable? -> Read article Using Amazon API Gateway stage variables. -> The question mentioned the company's requirement to test the code in a dedicated, monitored test environment. - Answer: Use multiple stages in API Gateway. Create a Lambda function for each environment. Configure API Gateway stage variables to route traffic to the Lambda function in different environment. - Not: Use multiple stages in API Gateway. Create a single Lambda function for all environments. Add different code  blocks for different environments in Lambda function based on Lambda environment variables. -> read more about these.

- 80-> partition key and sort key requirements in dynamoDB? -> Minimal network traffic and optimal application performance requirement in dynamoDB? -> BatchGetItem operation, Local Secondary Index? -> A single BatchGetItem can retrieve data from one or more table, you don't need to perform it twice (not a good practice), retrieve data from multiple table at once in single operation.

- 81-> Simple Queue Service in Amazon? -> SQS Queue for test? Use the SQS queue in the application's unit test process. How? -> SQS queue vs SQS events?

- 82-> AWS Elastic Beanstalk Configuration Changes: Rolling updates and immutable updates? -> Immutable is more resilient if you want to ensure zero downtime during application deployment compared to rolling.

- 83-> Mount the S3 bucket folder in the Lambda function? -> /tmp directory of lambda function? -> Amazon EFS (Elastic File System) use case? -> Read: Working with lambda layer developer's guide.

- 84-> Different Caching Strategies in Elastic Cache? -> Caching Strategies: Lazy Loading and Write through? -> Read through cache and write behind cache?

- 85-> Lambda@Edge, CloudFront, AWS SAM Template? -> The S3 bucket is configured as an origin for the CloudFront distribution? -> Lambda@Edge function can only be created in us-east-1 region.

- 86-> Amazon RDS vs Dynamo DB? -> Single Digit Millisecond Latency retrieval is only possible in Dynamo DB.

- 87-> Checkout SS.

- 88-> Signed request, Canonical request, Signature version 4? -> Query String parameter that is named X-Amz-Signature? -> Http header: authorization?

- 89-> Lambda Alias?

- 90-> CodeBuild vs CodeCommit?

- 91-> Managing connected users and client apps: $connect and $disconnect routes - read this? -> callback URL to disconnect the client from the backend service in WebSocket?

- 93-> DynamoDB streams? -> Amazon EventBridge? -> Synchronous processing of documents directly after DynamoDB write? -> Near real time in a dynamo DB question means Kinesis: DynamoDB stream vs Kinesis?

- 94-> Security and AUth model for lambda function URLs - Read this article? -> AuthType parameter: AWS_IAM & NONE (Values)? 

- 95-> AWS::Region and other pseudo parameter commonly used in cloudformation? 

- 96-> S3 lifecycle rules? -> EventBridge and EventBridge rule?

- 97-> OpenSearch Service, Logstash and OpenSearch Dashboard? -> Unified Amazon CloudWatch agent?

- 98-> IAM policy to grant access to S3 vs S3 bucket policy? -> S3 lifecycle policy? -> IAM Role vs IAM User vs IAM Identity?

- 99-> Amazon CloudFront with Lambda@Edge to update the requests to add cookies? -> Route 53? -> ALB Routing rule with a condition that looks for a cookie named version that has a value of beta? -> Application Load Balancer Routing Policy?

- 100-> s3:x-amz-acl condition in bucket policy? -> aws:SecureTransport condition?

- 101-> AWS Elastic Beanstalk? -> Environment setup in elastic beanstalk? -> Deployment method that offers fastest deployment? -> All at once provides the fastest deployment -> All instances updated simultaneously.

- 102-> AWS CodeArtifact repository? -> Amazon Elastic File System? 

- 103-> AMI changes between regions and copying an AMI from one region to the other?

- 104-> AWSLambdaBasicExecutionRole, AWSLambdaVPCAccessExecutionRole? -> Interface VPC Endpoint and its policy?

- 105-> Amazon Cognito User Pool vs Amazon Cognito Identity Pool? -> Amazon CloudFront Distribution to allow unauthenticated users? 

- 106-> Amazon Marcie, Amazon Athena? -> SensitiveData:S3Object/Financial in Marcie?

- 107-> Amazon Simple Queue Service? -> Concurrency of lambda function? -> Declaring outside the handler function to reduce number of instances of DB connection created. -> max_user_connections parameter of RDS Cluster? -> Why is RDS Cluster? -> How does RDS proxy works and solves the problem of multiple DB connections?

- 108-> AWS Security Token Service? -> Origin set to S3 bucket in CloudFront? -> What does CloudFront really do? -> CloudFront functions have an execution time of few milliseconds. This makes them less functional. Lambda@Edge functions vs CloudFront functions?

- 109-> AWS Directory Service? -> Cognito User vs Identity Pool?