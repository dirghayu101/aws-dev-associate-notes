# Video watched: https://www.youtube.com/watch?v=zca2PBxzwqI&list=PL7GozF-qZ4KdpXCIcPKeBf5rljY8OM4gU&index=1&ab_channel=sthithapragna

? : read more.

- 1-> API Gateway -> IAM execution role (InvalidateCache Policy?) -> INVALIDATE_CACHE query string parameter ?-> Caching enabled -> cache invalidate (Invalidate Cache Policy) ?-> Cache-Control:max-age=0 HTTP header?

- 2-> AWS CloudFormation -> If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM. -> Otherwise you will get insufficient capabilities error. -> CAPBILITY_IAM, CAPABILITY_AUTO_EXPAND (read about these) -> IAM resources with custom name? -> Insufficient capabilities error?

- 3-> Apply an IAM policy that ensures no other users can push or merge to the branch (how does this work?) -> Ideal Case: From the main branch, create a feature branch for production bug fixes. Create a second feature branch from the main branch for development of the new version.->  Git tag? -> AWS CodeCommit?

- 4-> Decrease the number of connection -> means use proxy. -> Use case: Multiple lambdas making multiple connection to DB. -> this increase cost. -> Configure provisioned concurrency by setting the ProvisionedConcurrentExecutions parameter to 10? -> Cluster Cache Management? -> Reserved Concurrency & ReservedConcurrentExecutions parameter to 10? -> RDS Proxy?

- 5-> CloudFormation midway failure, preservation of provisioned resource. -> Add a --disable-rollback command line option to the create-stack command and the update-stack command.

- 6-> Lambda function layers and architecture? -> EventBridge in AWS? -> asynchronous invocation of lambda function? -> Lambda function trigger?

- 7-> Error 502: If your Lambda function's permissions are incorrect or the response to the API request isn't formatted correctly, then the API Gateway returns an HTTP 502 status code. -> Change the format of the lambda function reponse to the API call. -> -> Payload, authorization token and header format in lambda? -> Read about other HTTP errors.

- 8-> S3 intelligent tiering will only be used when the access pattern is unknown. And the question states this explicitly or implicitly. -> S3 Glacier Deep Archieve standard retrieval takes 24 hours and bulk retrieval takes 48 hours.

- 9-> Multi-threaded and scalable caching solution to offload the heavy read traffic? -> Redis, AWS RDS service, AWS ElastiCache, Memcached, DynamoDB Accelerator cluster, DynamoDSet? -> Object Caching, Offload your database, horizontal scaline, simple caching, multithreaded multicored performance -> Memcached. Advanced datatype use case, persistence built-in, long lived data, publish and subscribe capabilities, multi-az with failover, geospatial support -> Redis.

- 10-> Lambda function aliases? -> Routing on the aliases? Fleet of lambda function? -> Canary, Linear & AllAtOnce Deployment of lambda? -> Checkout canary deployment of lambda article? 

- 11-> Sam local command in AWS for API Gateway? -> Locally deployed API gateway? -> Sam local start-api? -> Sam local start-lambda? -> Sam local generate-event? -> AWS SAM (Serverless Application Model)

- 12-> Amazon Aurora MySQL DB instance? -> Primary DB instance? -> RDS Proxy?

- 13-> Instances vs Cluster Services comparison in AWS? Serverless different terminologies?-> Amazon RDS DB instance Amazon DoucmentDB clusters, Amazon Aurora DB instances, Secret Manager, AWS Systems Manager Parameter Store? -> Use security manager when encrypted, rotation at regular interval is the requirement. -> SecretsManagerRotationTemplate template in AWS Secrets Manager console?

- 14-> Solution that integrates with CloudFormation to manage sensitive data -> AWS Systems Manager Parameter Store. -> Amazon Elastic File System? -> Read: How WS Systems Manager Parameter Store uses AWS

- 15-> AWS CDK and AWS SDK? -> Handler function? -> AWS Amplify? -> Custom Resources in Cloud Formation? -> AWS CDK Custom Resources? -> What are AWS SDK calls? -> Custom resource in the AWS CSK to attach the function code to an AWS Lambda function when the deployment stack runs.

- 16-> AWS Serverless Application Model (AWS SAM) CLI? -> Bundle the serverless application using a SAM package. This is the only step developer complete prior to deploying the application. -> read other ways of lambda workflow?

- 17-> Migrating PSQL into AWS Cloud. -> A DB that will secure and regularly rotate DB credentials. -> AWS Secrets Manager with rotation turned on. NOT AWS Systems Manager Parameter Store with rotation turned on. 

- 18-> Lambda function asynchronous invocation? -> Dead letter queue on the functions to capture events that weren't successfully processes. <- Debugging possibility. -> AWS CloudTrail logging use case? -> Amazon SQS? -> Amazon Simple workflow service? -> AWS Config to process any direct unprocessed events?

- 19-> AWS Cloud Front? -> AWS Lambda@Edge? -> signed URLs S3 - revisit? Distribute firmware updates to customers around the world - Use amazon cloudfront with signed URLs for Amazon S3.

- 20-> Table Partition Key? Partition and Sort key in conjunction? -> Global Secondary Index? -> Local Secondary Index? -> Fastest Response is always given by Global Secondary Index.

- 21-> Audit trail? -> Audit trail of when the AWS KEY Management Services key was used and by whom. -> Server side encryption with AWS KMS managed keys. -> Server Side Encryption with Customer Provided Keys vs Server Side Encryption with self managed keys? -> AWS KMS Managed Keys support auditing.

- 22-> AWS RDS? -> Accidental deletion prevention -> Add a CloudFormation DeletionPolicy attribute with the Retain Value to the DB resource. Update the CloudFormation stack policy to prevent updates to the database.-> CloudFormation Stack Set? -> Dropped and recreated in context of cloud formation? -> Add a CloudFormation DeletionPolicy attribute with the Retain value to the stack?

- 23-> AWS Fargate using AWS ECS? Other Option? -> ENV needs to be passed to a container for the application initialization. -> Define an array that includes the environment variables under the environment parameter within the task definition. read more? -> entryPoint parameter and environment parameter? -> task and service definition?

- 24-> Lambda Execution Roles? -> Amazon DynamoDB Streams? -> Amazon SNS? -> Event Source mapping in lambda? -> Maximum runtime setting of lambda? -> StreamViewType Parameter in DynamoDB?

- 25-> Metrics: CacheHitCount & where it is measured, IntegrationLatency & where it is measured, similarly CacheMissCount, Latency and Count?

# Video watched: https://youtu.be/UJvR8tUCfpI?si=HtcOqwB1j3vAhQ-H

- 26-> DynamoDB Encryption Client? -> DynamoDB Table default encryption settings?

- 27-> Cache Method in the selected stage of API Gateway. Select the post Method. <- What does this do? -> Lambda /tmp directory? -> Default request header? -> Update the application to return cached content based upon the default request header.

- 28-> Amazon Kinesis Data Firehose? -> Exponential Backoff? -> Amazon SQS? -> AWS SDK error debugging functionalities? -> Exponential Backoff for any throughput related DynamoDB error. -> In this question: ThrottlingException errors: resolve Exponential Backoff.

- 29-> SNS Topic? -> Amazon Aurora DB? -> IAM Database Authentication? 

- 30-> Amazon CloudFront? -> Amazon Lambda@Edge? 

- 31-> TTL feature DynamoDB? -> Cron Job EC2 possible use cases (any automation?)?

- 32-> Elastic Beanstalk? -> Deployment types: Canary, In-place, All-at-once, in-place, blue/green, immutable deployments? -> Read article deploying applications to EBS Environments.? -> Rollback process?

- 33-> Unauthenticated Role? -> Temporary Credentials in Secret Manager?

- 34-> ProvisionedThroughputExceededException error in DynamoDB? -> DynamoDB Accelerator Cluster (DAX)? -> Distributing reads and writes between two table? -> AWS SDKs for DynamoDB? -> If the question says cost effective, it most likely means that you have to solve the problem using the existing service as new service will introduce new charges. 

- 35-> Secret Manager vs Parameter Store use cases and differences? -> SNS topic?

- 36-> BatchWriteItem API in DynamoDB?

- 37-> Lambda Layers? -> Runtime Environment? 

- 38-> AWS Step Functions? -> The UI team wants the API to provide an immediate response so that the UI can display a message while the files are being processed. Read more about this and different possible ways to achieve this? -> X-Amz-Invocation-Type header with a static value of 'Event'? -> Configure the maximum age of the event in lambda? -> API Gateway timeout value and how it relates with lambda function timeout value? -> X-Amz-Target header with a static value of 'Async' in the integration request? -> Read article: Set up asynchronous invocation of the backend lambda function.

- 40-> DeleteItem vs GetItem vs Get Records vs PutItem vs UpdateTable vs UpdateItem vs DescribeTable in DynamoDB and other commonly used functions?

- 41-> .ebextensions/directory of the application source bundle of EBS? -> Elastic Beanstalk? -> namespace in EBS? -> config extension files? -> option_settings?

- 42-> AWS SDK outside the Lambda Handler Function? ->  Take advantage of runtime environment reuses primarily.

- 43-> Kubernetes cron job? -> EventBridge scheduled event? -> AWS Batch Jobs and Batch job queue?

- 44-> Bucket Policy? Principal? -> Service Based Link? -> CloudFormation Service Role? 

- 45-> Different Identities in IAM? -> Most secure way of accessing S3 bucket objects? -> Secret key and access key use is not considered the most secure way. They will be eliminated in questions like those. 

- 46-> AWS Encryption SDK? -> Data Encryption Keys? 

- 47-> Trust policy that specifies the EC2 service principal? -> Trust relationship between the roles and dynamodb.amazonaws.com? -> How to use trust policies within IAM role?

- 48-> sam local generate-event? -> Unit testing and testing types? -> AWS CDK?

- 49-> EBS application maintain full capacity? -> Blue/green deployment? Immutable Deployment? Rolling with additional Batch deployment? Blue Green vs Immutable Deployment? Immutable use less resources comparatively.

- 50-> AWS CloudWatch vs AWS CloudTrail vs AWS X-Ray vs AWS Inspector Agents? -> AWS Inspector Agents vs AWS X-ray?