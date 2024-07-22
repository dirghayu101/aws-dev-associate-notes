- 1-> Write operations in DynamoDB: PutItem, UpdateItem & DeleteItem. Note: Item in the syntax.

- Batch writes - Bath operations (read and write) help reduce the number of network round trips from your application to DynamoDB. In addition, DynamoDB performs the individual read or write operations in parallel. Applications benefit from this parallelism without having to manage concurrency or threading.

- Atomic Counters - Atomic Counters is a numeric attribute that is incremented, unconditionally, without interfering with other write requests. You might use an atomic counter to track the number of visitors to a website. This functionality is not useful for the current scenario.

- Use Scan operation - A Scan operation in Amazon DynamoDB reads every item in a table or a secondary index. By default, a Scan operation returns all of the data attributes for every item in the table or index


- 2-> EBS Volumes are availability zone lock.


- 3-> Cognito User Pools? Bean Stalk? Cognito Sync? Cognito Identity Pool?

- Cognito Sync: Amazon Cognito Sync is an AWS service and client library that enables cross-device syncing of application-related user data. You can use it to synchronize user profile data across mobile devices and the web without requiring your own backend. The client libraries cache data locally so your app can read and write data regardless of device connectivity status. When the device is online, you can synchronize data, and if you set up push sync, notify other devices immediately that an update is available.

- Cognito Identity Pools - You can use Identity pools to grant your users access to other AWS services. With an identity pool, your users can obtain temporary AWS credentials to access AWS services, such as Amazon S3 and DynamoDB. Identity pools support anonymous guest users, as well as the specific identity providers that you can use to authenticate users for identity pools.

- Cognito User Pools - A Cognito user pool is a user directory in Amazon Cognito. With a user pool, your users can sign in to your web or mobile app through Amazon Cognito, or federate through a third-party identity provider (IdP). Whether your users sign-in directly or through a third party, all members of the user pool have a directory profile that you can access through an SDK.

- User Pools is where you control everything, you can introduce MFA, check for compromised credentials, etc. 

- Both options provide sign-in with facebook, google, apple option. These options use SAML (XML based) or OIDC (JSON based) protocols for user authentication/authorization.

- User vs Identity: User exist, identity is assumed: this summarizes the difference between User and Identity pool.

- SAML (Security Assertion Markup Language) and OIDC (OpenID Connect) can provide user-related information, such as email, name, and other attributes, to the relying party (RP) or service provider (SP) that uses these protocols for authentication.

- Beanstalk - With Elastic Beanstalk, you can quickly deploy and manage applications in the AWS Cloud without having to learn about the infrastructure that runs those applications. Elastic Beanstalk reduces management complexity without restricting choice or control. You simply upload your application, and Elastic Beanstalk automatically handles the details of capacity provisioning, load balancing, scaling, and application health monitoring.


- 4-> TransactWriteItems? BatchWriteItems in dynamoDB? -> DynamoDB Streams?

- With Amazon DynamoDB transactions, you can group multiple actions together and submit them as a single all-or-nothing TransactWriteItems or TransactGetItems operation.

- TransactWriteItems is a synchronous and idempotent write operation that groups up to 25 write actions in a single all-or-nothing operation. These actions can target up to 25 distinct items in one or more DynamoDB tables within the same AWS account and in the same Region. The aggregate size of the items in the transaction cannot exceed 4 MB. The actions are completed atomically so that either all of them succeed or none of them succeeds.

- You can optionally include a client token when you make a TransactWriteItems call to ensure that the request is idempotent. Making your transactions idempotent helps prevent application errors if the same operation is submitted multiple times due to a connection time-out or other connectivity issue.

- Capture the transactions in the items table using DynamoDB streams and then sync with the players table. Explanation of this follows next.

- Many applications benefit from capturing changes to items stored in a DynamoDB table, at the point in time when such changes occur. DynamoDB supports streaming of item-level change data capture records in near-real-time. You can build applications that consume these streams and take action based on the contents. DynamoDB streams cannot be used to capture transactions in DynamoDB, therefore both these options are incorrect.


- 5-> Batch Uploads in S3 and access logging? -> Infinite loop condition.

- S3 access logging is pointing to the same bucket and is responsible for the substantial growth of bucket size - When your source bucket and target bucket are the same bucket, additional logs are created for the logs that are written to the bucket. The extra logs about logs might make it harder to find the log that you are looking for. This configuration would drastically increase the size of the S3 bucket.

- Wrong! -> 7-> AWS Trusted Advisor for storing SSH key? 

- Here is the correct way of reusing SSH keys in your AWS Regions:
    - Generate a public SSH key (.pub) file from the private SSH key (.pem) file.
    - Set the AWS Region you wish to import to.
    - Import the public SSH key into the new Region.

- It is not possible to reuse SSH key pairs across AWS Regions - As explained above, it is possible to reuse with manual import.

- Store the public and private SSH key pair in AWS Trusted Advisor and access it across AWS Regions - 

- AWS Trusted Advisor is an application that draws upon best practices learned from AWS' aggregated operational history of serving hundreds of thousands of AWS customers. 

- Trusted Advisor inspects your AWS environment and makes recommendations for saving money, improving system performance, or closing security gaps. It does not store key pair credentials.


- 8-> Cognito User Pool vs Cognito Identity Pool?

- Team is looking for a fully managed scalable solution for user management in anticipation of the rapid growth that the app foresees. Which of the following solutions would you suggest so that it requires the LEAST amount of development effort?

- Incorrect option: Use Cognito Identity pools to facilitate sign up and user management for the mobile app - You can use Identity pools to grant your users access to other AWS services. With an identity pool, your users can obtain temporary AWS credentials to access AWS services, such as Amazon S3 and DynamoDB. Identity pools support anonymous guest users, as well as the specific identity providers that you can use to authenticate users for identity pools.

- Correct Option: Use Cognito Identity pools to facilitate sign up and user management for the mobile app - You can use Identity pools to grant your users access to other AWS services. With an identity pool, your users can obtain temporary AWS credentials to access AWS services, such as Amazon S3 and DynamoDB. Identity pools support anonymous guest users, as well as the specific identity providers that you can use to authenticate users for identity pools.


- 9-> AWS CodeCommit, CodePipeline and CodeBuild?

- AWS CodeCommit - AWS CodeCommit is a fully-managed Source Control service that hosts secure Git-based repositories. It makes it easy for teams to collaborate on code in a secure and highly scalable ecosystem. AWS CodeCommit helps you collaborate on code with teammates via pull requests, branching and merging. AWS CodeCommit keeps your repositories close to your build, staging, and production environments in the AWS cloud. You can transfer incremental changes instead of the entire application. AWS CodeCommit supports all Git commands and works with your existing Git tools. You can keep using your preferred development environment plugins, continuous integration/continuous delivery systems, and graphical clients with CodeCommit.

- AWS CodePipeline - AWS CodePipeline is a fully managed "continuous delivery" service that helps you automate your release pipelines for fast and reliable application and infrastructure updates. CodePipeline automates the build, test, and deploy phases of your release process every time there is a code change, based on the release model you define.

- AWS CodeBuild - AWS CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages that are ready to deploy. With CodeBuild, you don’t need to provision, manage, and scale your own build servers. CodeBuild scales continuously and processes multiple builds concurrently, so your builds are not left waiting in a queue.

- AWS CodeCommit is designed for collaborative software development. It manages batches of changes across multiple files, offers parallel branching, and includes version differencing ("diffing"). 


- 10-> Application Load Balancer vs Classic Load Balancer?

- Classic Load Balancer + ECS - The Classic Load Balancer doesn't allow you to run multiple copies of a task in the same instance. Instead, with the Classic Load Balancer, you must statically map port numbers on a container instance. So this option is ruled out.

- Application Load Balancer + ECS -> Correct.

- Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast, container management service that makes it easy to run, stop, and manage Docker containers on a cluster. You can host your cluster on a serverless infrastructure that is managed by Amazon ECS by launching your services or tasks using the Fargate launch type. For more control over your infrastructure, you can host your tasks on a cluster of Amazon Elastic Compute Cloud (Amazon EC2) instances that you manage by using the EC2 launch type

- An Application load balancer distributes incoming application traffic across multiple targets, such as EC2 instances, in multiple Availability Zones. A listener checks for connection requests from clients, using the protocol and port that you configure. The rules that you define for a listener determine how the load balancer routes requests to its registered targets. Each rule consists of a priority, one or more actions, and one or more conditions.

- When you deploy your services using Amazon Elastic Container Service (Amazon ECS), you can use dynamic port mapping to support multiple tasks from a single service on the same container instance. Amazon ECS manages updates to your services by automatically registering and deregistering containers with your target group using the instance ID and port for each container.


- Wrong! - 11-> Working of Auto Scaling Policy? -> Check extra-read.

- A scaling policy instructs Amazon EC2 Auto Scaling to track a specific CloudWatch metric, and it defines what action to take when the associated CloudWatch alarm is in ALARM.

- When a scaling policy is executed, if the capacity calculation produces a number outside of the minimum and maximum size range of the group, Amazon EC2 Auto Scaling ensures that the new capacity never goes outside of the minimum and maximum size limits.

- When the desired capacity reaches the maximum size limit, scaling out stops. If demand drops and capacity decreases, Amazon EC2 Auto Scaling can scale out again.

- Instance Weighting: In this case, Amazon EC2 Auto Scaling can scale out above the maximum size limit, but only by upto your maximum instance weight.  

- An Auto Scaling group has a maximum capacity of 12, a current capacity of 10, and a dynamic scaling policy that adds 5 capacity units. Instance types have one of three weights assigned: 1, 4, or 6. When invoking the policy, Amazon EC2 Auto Scaling chooses to launch an instance type with a weight of 6 based on the allocation strategy. The result of this scale-out event is a group with a desired capacity of 12 and a current capacity of 16.


- 12-> Envelope Encryption and different methods of encryption in KMS.

- You can only encrypt up to 4 kilobytes (4096 bytes) of arbitrary data such as an RSA key, a database password, or other sensitive information by using KMS direct encryption.

- Lambda Environment variables must not exceed 4 KB. 

- Use Envelope Encryption and reference the data as file within the code. While AWS KMS does support sending data up to 4 KB to be encrypted directly, envelope encryption can offer significant performance benefits. When you encrypt data directly with AWS KMS it must be transferred over the network. 

- Envelope encryption reduces the network load since only the request and delivery of the much smaller data key go over the network. The data key is used locally in your application or encrypting AWS service, avoiding the need to send the entire block of data to AWS KMS and suffer network latency.

- AWS Lambda environment variables can have a maximum size of 4 KB. Additionally, the direct 'Encrypt' API of KMS also has an upper limit of 4 KB for the data payload. To encrypt 1 MB, you need to use the Encryption SDK and pack the encrypted file with the lambda function.


- Wrong! - 14 -> Deploying the API to a stage in API gateway?

- After creating your API, you must deploy it to make it callable by your users. To deploy an API, you create an API deployment and associate it with a stage. 

- A stage is a logical reference to a lifecycle state of your API (for example, dev, prod, beta, v2). API stages are identified by the API ID and stage name. Every time you update an API, you must redeploy the API to an existing stage or to a new stage. Updating an API includes modifying routes, methods, integrations, authorizers, and anything else other than stage settings.

- Use Stage Variables for development state of API - Stage variables are name-value pairs that you can define as configuration attributes associated with a deployment stage of a REST API. They act like environment variables and can be used in your API setup and mapping templates.

- Stage variables are not connected to the scenario described in the current use case.


- 15-> Signer in CloudFront?

- Correct options:

- When you create a signer, the public key is with CloudFront and private key is used to sign a portion of URL - Each signer that you use to create CloudFront signed URLs or signed cookies must have a public–private key pair. The signer uses its private key to sign the URL or cookies, and CloudFront uses the public key to verify the signature.

- When you create signed URLs or signed cookies, you use the private key from the signer’s key pair to sign a portion of the URL or the cookie. When someone requests a restricted file, CloudFront compares the signature in the URL or cookie with the unsigned URL or cookie, to verify that it hasn’t been tampered with. CloudFront also verifies that the URL or cookie is valid, meaning, for example, that the expiration date and time haven’t passed.

- When you use the root user to manage CloudFront key pairs, you can only have up to two active CloudFront key pairs per AWS account - When you use the root user to manage CloudFront key pairs, you can only have up to two active CloudFront key pairs per AWS account.

- Whereas, with CloudFront key groups, you can associate a higher number of public keys with your CloudFront distribution, giving you more flexibility in how you use and manage the public keys. By default, you can associate up to four key groups with a single distribution, and you can have up to five public keys in a key group.

- Incorrect options:

- You can also use AWS Identity and Access Management (IAM) permissions policies to restrict what the root user can do with CloudFront key pairs - When you use the AWS account root user to manage CloudFront key pairs, you can’t restrict what the root user can do or the conditions in which it can do them. You can’t apply IAM permissions policies to the root user, which is one reason why AWS best practices recommend against using the root user.

- CloudFront key pairs can be created with any account that has administrative permissions and full access to CloudFront resources - CloudFront key pairs can only be created using the root user account and hence is not a best practice to create CloudFront key pairs as signers.

- NOTE: Both the signers (trusted key groups and CloudFront key pairs) can be managed using the CloudFront APIs - With CloudFront key groups, you can manage public keys, key groups, and trusted signers using the CloudFront API. You can use the API to automate key creation and key rotation. When you use the AWS root user, you have to use the AWS Management Console to manage CloudFront key pairs, so you can’t automate the process.


- 16-> Transform in CloudFormation as a parameter?

- Presence of Transform section indicates it is a Serverless Application Model (SAM) template.

- Intrinsic Functions in templates are used to assign values to properties that are not available until runtime. They usually start with Fn:: or !. Example: !Sub or Fn::Sub.

- Presence of Transform section indicates it is a Serverless Application Model (SAM) template - The AWS::Serverless transform, which is a macro hosted by AWS CloudFormation, takes an entire template written in the AWS Serverless Application Model (AWS SAM) syntax and transforms and expands it into a compliant AWS CloudFormation template. So, the presence of the Transform section indicates, the document is a SAM template.

- WRONG - 17-> Lambda function downstream? Context: A developer is looking at establishing access control for an API that connects to a Lambda function downstream.

- A mechanism that CANNOT be used for authenticating with the API Gateway? -> AWS Security Token Service.

- In the context of AWS Lambda and its interactions with other services, the term "downstream" typically refers to the services or systems that are affected by or consume the outputs of a Lambda function.

- AWS Security Token Service (STS) - AWS Security Token Service (AWS STS) is a web service that enables you to request temporary, limited-privilege credentials for AWS Identity and Access Management (IAM) users or for users that you authenticate (federated users). However, it is not supported by API Gateway.

- Standard AWS IAM roles and policies - Standard AWS IAM roles and policies offer flexible and robust access controls that can be applied to an entire API or individual methods. IAM roles and policies can be used for controlling who can create and manage your APIs, as well as who can invoke them.

- Lambda Authorizer - Lambda authorizers are Lambda functions that control access to REST API methods using bearer token authentication—as well as information described by headers, paths, query strings, stage variables, or context variables request parameters. Lambda authorizers are used to control who can invoke REST API methods.

- Cognito User Pools - Amazon Cognito user pools let you create customizable authentication and authorization solutions for your REST APIs. Amazon Cognito user pools are used to control who can invoke REST API methods.



- WRONG - 18-> A developer wants to package the code and dependencies for the application-specific Lambda functions as container images to be hosted on Amazon Elastic Container Registry (ECR).

- Correct options:
- To deploy a container image to Lambda, the container image must implement the Lambda Runtime API - To deploy a container image to Lambda, the container image must implement the Lambda Runtime API. The AWS open-source runtime interface clients implement the API. You can add a runtime interface client to your preferred base image to make it compatible with Lambda.
- AWS Lambda service does not support Lambda functions that use multi-architecture container images - Lambda provides multi-architecture base images. However, the image you build for your function must target only one of the architectures. Lambda does not support functions that use multi-architecture container images.

- Incorrect options:
Lambda supports both Windows and Linux-based container images - Lambda currently supports only Linux-based container images.
You can test the containers locally using the Lambda Runtime API - You can test the containers locally using the Lambda Runtime Interface Emulator.
You can deploy Lambda function as a container image, with a maximum size of 15 GB - You can deploy Lambda function as container image with the maximum size of 10GB.


- WRONG! - 20-> appspec.yml and buildspec.yml -> codebuild/directory and root directory -> Defined for an EC2 -> CI/CD pipeline in AWS using CodeCommit & CodeDeploy.

- Correct option:

- Define an appspec.yml file in the root directory: An AppSpec file must be a YAML-formatted file named appspec.yml and it must be placed in the root of the directory structure of an application's source code.

- The AppSpec file is used to:

- Map the source files in your application revision to their destinations on the instance.

- Specify custom permissions for deployed files.

- Specify scripts to be run on each instance at various stages of the deployment process.

- During deployment, the CodeDeploy agent looks up the name of the current event in the hooks section of the AppSpec file. If the event is not found, the CodeDeploy agent moves on to the next step. If the event is found, the CodeDeploy agent retrieves the list of scripts to execute. The scripts are run sequentially, in the order in which they appear in the file. The status of each script is logged in the CodeDeploy agent log file on the instance.

- If a script runs successfully, it returns an exit code of 0 (zero). If the CodeDeploy agent installed on the operating system doesn't match what's listed in the AppSpec file, the deployment fails.

- Incorrect: Define a buildspec.yml file in the root directory - This is a file used by AWS CodeBuild to run a build.

- Why are there so many Code* services in AWS? Because there are different deployment requirements and model. These application break down the entire process of deployment into microservices so that they can provide plethora of option to choose from in each stage for customization.

- AWS CodePipeline - AWS CodePipeline is a fully managed "continuous delivery" service that helps you automate your release pipelines for fast and reliable application and infrastructure updates. CodePipeline automates the build, test, and deploy phases of your release process every time there is a code change, based on the release model you define.

- AWS CodeBuild - AWS CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages that are ready to deploy. With CodeBuild, you don’t need to provision, manage, and scale your own build servers. CodeBuild scales continuously and processes multiple builds concurrently, so your builds are not left waiting in a queue.

- AWS CodeCommit is designed for collaborative software development. It manages batches of changes across multiple files, offers parallel branching, and includes version differencing ("diffing"). 

- AWS CodeDeploy is a fully managed deployment service offered by Amazon Web Services (AWS) that automates the process of deploying applications to a variety of compute services. It helps you release new features quickly and reliably while avoiding downtime during deployment. CodeDeploy integrates with other AWS services and supports both Amazon EC2 instances and on-premises servers.

- Application Specific Lambda Functions: Application-specific Lambda refers to the use of AWS Lambda functions tailored for particular use cases or applications. Unlike generic Lambda functions, which might handle a variety of tasks, application-specific Lambda functions are designed to address specific requirements or workflows within an application. They leverage Lambda’s serverless architecture to perform specialized tasks efficiently.

- The core concept of application-specific Lambda functions is not fundamentally different from a normal Lambda function in terms of declaration. Both types of Lambda functions are created and configured similarly within AWS Lambda. 


- 22-> EC2 volume types: gp2, etc. -> IOPS for these? -> At which gp2 volume size will the test environment hit the max IOPS. -> Options: 2.7, 5.3, 10.6 or 16 TiB

- At which gp2 volume size will their test environment hit the max IOPS? -> This means that the threshold volume which gives maximum performance. 

- For gp2 this will be 5.3 TiB. The performance of gp2 volumes is tied to volume size, which determines the baseline performance level of the volume and how quickly it accumulates I/O credits; larger volumes have higher baseline performance levels and accumulate I/O credits faster.

- 5.3 TiB - General Purpose SSD (gp2) volumes offer cost-effective storage that is ideal for a broad range of workloads. These volumes deliver single-digit millisecond latencies and the ability to burst to 3,000 IOPS for extended periods of time. Between a minimum of 100 IOPS (at 33.33 GiB and below) and a maximum of 16,000 IOPS (at 5,334 GiB and above), baseline performance scales linearly at 3 IOPS per GiB of volume size.


- 23-> Route 53?

- Amazon Route 53 is a scalable and highly available Domain Name System (DNS) web service provided by AWS. It is designed to route end-user requests to endpoints in a reliable and cost-effective manner. Route 53 integrates with other AWS services and provides DNS, domain registration, and health-checking capabilities.

- Manages DNS records for your domain names in hosted zones. Each hosted zone corresponds to a domain and contains records that define how traffic is routed. 

- Route 53 features: 

- Traffic Routing Policies:
    - Simple Routing: Directs traffic to a single resource, such as an IP address or an AWS resource.
    - Weighted Routing: Distributes traffic across multiple resources based on assigned weights.
    - Latency-Based Routing: Routes traffic to the resource with the lowest latency based on the geographic location of the user.
    - Failover Routing: Routes traffic to a primary resource and, in case of failure, automatically directs it to a secondary resource.
    - Geolocation Routing: Routes traffic based on the geographic location of users.
    - Geoproximity Routing: Routes traffic based on the geographic location of users and resources, with the ability to shift traffic bias between resources.
- Monitors the health of your resources (e.g., web servers) to ensure they are operational. If a resource fails health checks, Route 53 can route traffic to healthy resources.
- Provides DNS security extensions to protect against certain types of attacks and ensure the integrity and authenticity of DNS responses.

-  DNS Record Types
    - A Record (Address Record): Maps a domain to an IPv4 address.
    - AAAA Record: Maps a domain to an IPv6 address.
    - CNAME Record (Canonical Name Record): Maps a domain to another domain name (useful for aliasing). Cannot be used at the root domain level.
    - MX Record (Mail Exchange Record): Routes email to mail servers.
    - TXT Record (Text Record): Provides text information for various purposes, including SPF (Sender Policy Framework) and verification.
    - NS Record (Name Server Record): Specifies the authoritative DNS servers for the domain.
    - SOA Record (Start of Authority Record): Provides information about the domain, such as the primary DNS server, domain admin, and expiration information.


- 20-> AWS CodeDeploy vs AWS CodeBuild vs AWS CodePipeline?

- AWS CodeDeploy
Use Case: Automated Deployment of Web Applications
Scenario: You have a web application hosted on Amazon EC2 instances. You need to deploy new versions of the application with minimal downtime and automatic rollback in case of failures.
Solution: Use AWS CodeDeploy to automate the deployment process. CodeDeploy can handle rolling updates, blue/green deployments, and health checks to ensure that the new version is deployed smoothly and any issues are detected and managed.

- AWS CodeBuild
Use Case: Continuous Integration and Build Automation
Scenario: Your development team is working on a microservices application with multiple code repositories. You need to automate the build process to compile code, run tests, and package the application for deployment.
Solution: Use AWS CodeBuild to automatically build and test your code every time changes are pushed to your repositories. CodeBuild provides scalable build environments and integrates with other AWS services to produce deployable artifacts.

- AWS CodePipeline
Use Case: CI/CD Pipeline for a Multi-Stage Application
Scenario: You need to automate the end-to-end software release process for a web application, including code changes, build, test, and deployment stages, across multiple environments like development, staging, and production.
Solution: Use AWS CodePipeline to create a continuous integration and continuous delivery (CI/CD) pipeline that orchestrates these stages. CodePipeline integrates with CodeCommit (for source control), CodeBuild (for build automation), and CodeDeploy (for deployment), enabling a fully automated workflow from code commit to production release.

- 27-> AWS Step Functions to coordinate and manage the components? -> AWS Simple Queue Service? -> AWS EventBridge & SNS?












- 22-> Rolling, Rolling with additional batch, all at once, immutable deployments?

- 23-> Dead letter queue, delay queue, visibility timeout, FIFO queue -> In SQS.

- 24-> Hive with Amazon EMR? -> AWS Glue? -> AWS Data Pipeline?

- 25-> CommaDelimitedList, DependentParameter, String and other CloudFormation's commonly used parameters and syntax.

- 26-> Sink type capabilities of Kinesis Firehose. -> Kinesis Producer Library vs Kinesis Agent?

- 27-> AWS CLI --test vs --dry-run

- 28-> Build stage of CodeBuild -> Available Options?

- 29-> SAM Template sections like: Transform, Resources, Mappings, Parameters, Globals, etc. Also the required once.

- 30-> Maximum number of messages that can be stored in an SQL queue.

- 31-> CloudFront signed URLs.

- 32-> General caps and all of that in different AWS services.

- 33-> DynamoDB - CRUD specification in IAM: dynamodb: UpdateItem,dynamodb: GetItem and dynamodb: PutItem?

- 34-> IOPS SSD(io1) volumes

- 35-> SNS topic, subscribe to topic, filter policy in SNS?

- 36-> Configure VPC endpoint for DynamoDB? -> VPN to route traffic in a corporate level with their private infrastructure?

- 37-> CloudTrail

- Question: As a senior architect, you are responsible for the development, support, maintenance, and implementation of all database applications written using NoSQL technology. A new project demands a throughput requirement of 10 strongly consistent reads per second of 6KB in size each.

How many read capacity units will you need when configuring your DynamoDB table?

- CloudFormation Wrapper and AWS Lambda Hook? -> config files in .ebextensions/ at the root of your source code?

- While defining a business workflow as state machine on AWS Step Functions, a developer has configured several states.

Which of the following would you identify as the state that represents a single unit of work performed by a state machine?

- CodeDeploy hooksL appspec.yml -> AfterInstall, ValidateService, ApplicationStart & AllowTraffic?

- Transactional Read options in DynamoDB, RDS, RedShift: Transaction Block, transactional read and write APIs, Amazon Athena transactional read and write?

- Configure Application Auto Scaling to manage Lambda reserved/provisioned concurrency on a schedule.?

- 