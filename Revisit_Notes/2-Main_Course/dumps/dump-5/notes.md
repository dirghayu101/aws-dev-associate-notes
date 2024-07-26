- 1 -> Lambda function configuration possibilities? -> Function that requires significant CPU utilization? -> Lambda layer use case?

- 2-> SQS command/API method to delete queue?

- 3-> .ebextensions/ in Elastic Beanstalk?

- 4-> You are creating a Cloud Formation template to deploy your CMS application running on an EC2 instance within your AWS account. Since the application will be deployed across multiple regions, you need to create a map of all the possible values for the base AMI.
How will you invoke the !FindInMap function to fulfill this use case?
My answer: !FindInMap[MapName, TopLevelKey]

- 6-> Dedicated Hosts, On-Demand Instances, Spot Instances & Dedicated Instances?

- 7-> Different encryption options available in S3?

- 8-> Elastic Load Balancer Health Checks?

- 9-> Rolling deployment?

- 11-> Amazon Kinesis: Shard, PutRecords API call. -> Exponential backoff.

- 12-> Zonal vs regional vs global? -> Cross-zone load balancing?

- 13-> Create an application that can be deployed across a fleet of EC2 instances? CodeDeploy, CodeBuild?

- 14-> Exported Output Values in CloudFormation must have unique names within a single Region? -> Exported output Values in CloudFormation must have unique name across all regions?

- 15-> AWS CDK for testing? -> Testing possibilities using CloudFormation?

- 16-> Resource based policy that IAM services support? -> Access Control List, Trust Policy, Permission Boundary, Service Control Policies? 

- 17-> AWS Serverless Application Repository (SAR)? -> AWS Marketplace? -> AWS AppSync? -> AWS Service Catalog?

- 18-> Set up an Amazon DynamoDB table with a primary key that consists of the name as the partition key and the version number as the sort key. Create a global secondary index that has the category as the partition key and the name as the sort key. : Global Secondary index, partition key, sort key?

- 20-> SAM template syntax: AWS::Serverless::SimpleTable, AWS::Serverless::UserPool, AWS::Serverless::Api and AWS::Serverless::Function?

- 22-> IAM Access Analyzer? 

- 23-> User data EC2 characteristics: root user privilege exist?

- 24-> CloudWatch vs CloudTrail vs AWS X-Ray vs VPC Flow Logs? -> Setting up filters in CloudWatch?

- 25-> All at once vs Rolling vs Rolling with additional batch vs immutable deployments?
Read: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html

- 27-> Amazon Inspector? -> IAM Access Analyzer? -> AWS Trusted Advisor? -> AWS Security Hub?

- 28-> Lambda Alias?

- 29-> Amazon EFS Volumes? AWS Gateway Storage Volumes? Bind Mounts? Docker Volumes?

- 31-> Elasticache for Memcached vs Elasticache for Amazon RDS use case?

- 36-> EC2 option like burst, reserved, dedicated, etc?

- 37-> DynamoDB DAX & Streams?

- 38-> All the terminologies related to CloudFormation: Conditions, Parameters, Dependencies, Resources, etc. Also different sections of a cloudformation template.

- 42-> CloudFront Key pairs and their capabilities?

- 43 -> AWS CDK setup steps? -> Does cloud formation plays a role?

- 44-> When creating configuration files for AWS Elastic Beanstalk which naming convention should you follow? .extensions_<metsettings>.config or .ebextensions/<mysettings>.config?

- 45-> SQS-> CreateQueue API in SQS? -> Visibility timeout value of queue? -> You can't change teh queue type after you create it? -> MessageRetentionPeriod for queue?

- 46-> IAM Policy structure: Principal, condition, variables & resource?

- 48-> Cognito Sync?

- 52-> Which AWS entities can be used to deploy SSL/TLS server certificates? (Select two) -> AWS Certificate Manager & Systems Manager?

- 53-> Interceptor shell script in lambda? -> API Gateway mapping templates? -> Lambda custom interceptor?

- 54-> Alias and PTR record in DNS?

- 55-> CDK vs SAM use case? When should the AWS CDK be used?

- 59-> KMS & CMK working together?

- 61-> An e-commerce company has developed an API that is hosted on Amazon ECS. Variable traffic spikes on the application are causing order processing to take too long. The application processes orders using Amazon SQS queues. The ApproximateNumberOfMessagesVisible metric spikes at very high values throughout the day which triggers the CloudWatch alarm. Other ECS metrics for the API containers are well within limits.

As a Developer Associate, which of the following will you recommend for improving performance while keeping costs low? -> Use Backlog per instance metric with target tracking scaling policy?