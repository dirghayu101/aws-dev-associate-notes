# Notes from <Video name word to word>:
- pointers
- Summary of the video. What did you learn?

# Noted from <video name>
- pointers
- Summary of the video. What did you learn?

# Kubernetes 101 (11:27) (-> means contains)
- Cluster -> Kubernetes API (Roads), Control Plane (HQ) & Node (Factory)
- Node -> containerd or Docker, kubelet, pods and kproxy
- When you are working with k8s, you are mostly dealing with pods. Working with k8s, simply means managing those pods.
- Control Plane -> ccm (cloud control manager), etcd (key value data store), api (k8s api server) and kcm (kube control manager)
- k8s usually follows one pod one container architecture.
- Service - Abstraction for processes running on the pods.

# Elastic Kubernetes Service (EKS) 101 (6:14)
- AWS managed k8s implementation.
- Control Plane Scales and runs on multiple AZs.
- EKS Cluster comprises of EKS Control Plane and EKS Node.
- Fargate: serverless version.
- Nodes can be self managed, part of managed node groups or fargate pods.
- etcd is distributed across multiple AZs.
- Now, sometimes there is a compute requirement. Like you might need Window OS, a GPU or something similar. This might be a bottleneck/variable for you to choose any service.

# Section Quiz - Containers


# Bootstrapping EC2 using User Data (10:25)
- AMI Baking, aka, creating a template with 90% configuration done and then use bootstrapping, aka, user data field on ec2 to do the rest. <- Most optimal way.
- Anyone can access user data field from the instance metadata, don't keep any sensitive information there.


# Bootstrapping Wordpress Installation - PART1 (15:00)  --> Demo
- Checkout bootstrapping ec2 files under resource section.
- Storing password or any sensitive credentials in  user data field is a bad practice.
- cd /var/log && ls -la && cat cloud-init-output.log > All_the_bootstrap_related_logs.md && cat cloud-init.log > All_the_ec2-initialization_log.md 

# Bootstrapping Wordpress Installation - PART2 (6:45)  --> Demo
- Checkout bootstrapping ec2 files under resource section.
- User data should be provided in base64.
- 

# EC2 Instance Roles & Profile (4:18)
- You should always use roles where possible. They follow the best practices.
- Instance role credentials have an expire data, and they are renewed periodically.

# Using EC2 Instance Roles (13:31) --> Demo
- Checkout read-more-topics.
- Checkout the resource folder.

# SSM Parameter Store (6:16)
- Parameter Store is the best practice for passing credentials while initializing an ec2-instance. Using user data is not as it will be stored in the metadata and can be accessed .
- Even lambda functions use these for storing credentials.
- Understand the concept, it will integrate the usual KMS and IAM service as it is managing credentials. This service works while being tightly coupled with IAM and KMS.
- Check screenshots and demo section for more implementation details.
- The SSM Parameter store is a service which is part of Systems Manager which allows the storage and retrieval of parameters - string, stringlist or secure string.
- The service supports encryption which integrates with KMS, versioning and can be secured using IAM.

# Parameter Store (16:11) -> Demo
- Checkout the resource folder. Commands used include: 
    ```aws ssm get-parameters-by-path --path /my-cat-app/ ```
    ```aws ssm get-parameters-by-path --path /my-cat-app/ --with-decryption```
- Parameter Store has two tier: Standard and Advanced. In standard you can store 10k parameters and it has no charge. Check screenshot for more details.
- We store parameters in hierarchical order. /cat/db-3/param
- You can specify it to use KMS to encrypt the data being stored.

# System and Application Logging on EC2 (6:15)
- CloudWatch Agent is used to get logs from inside an ec2 on application level. Compared to cloudwatch log, it gives you more granular detail of what's happening.
- You will usually use CloudFormation to automate this process of creating CloudWatch agent to monitor an ec2 on granular level.
- 

# Logging and Metrics with CloudWatch Agent-PART1 (11:51) -> Demo
- You will give cloudwatch agent an IAM Role. The permission policies are CloudWatchAgentServerPolicy AmazonSSMFullAccess.
- Checkout the command used file in the resource directory for this lesson.
- You will be providing /var/log/secure log files to the cloudwatch agent. <- Read more about it.
- / var / log / secure
- / var / log / httpd/ access_log
- / var / log / httpd / error_log
- Log Stream name should be the instance ID. <-- Read more about it.
- The setup was tedious, using cloudformation will be a better practice.
- While setting up cloudwatch agent, it ask you to choose from several options, after you are done with the configuration, this can be stored in Parameter Store (the configuration will give you this option). You can choose the option of saving and use one time setup as a template for creating similar configuration in other ec2, thus automating the process.
- You will have configured an instance role allowing the agent to store the above config into parameter store AND allow the agent to inject the logging and metric data into CW and CW Logs.

# Logging and Metrics with CloudWatch Agent-PART2 (8:08)
- Checkout the commands-used file for this lesson in the resource directory.
- After setting this up successfully, you will be able to monitor this instance's log from the cloudwatch service.
- You will also have OS level metrics in the cloudwatch, checkout all metrics.


# EC2 Placement Groups (14:29)
- Placement groups are used to manipulate the distance between two ec2 instances which are running in different hosts.
- Cluster, Spread and Partition.
- Cluster: Pack instances close together. -> Highest level of performance is the target. -> High Speed and Low Latency -> Single availability zone. -> Checkout SS. -> Because of all instances put together in one availability zone, these offers no resilience.
- Spread: Keep instances separate. -> Designed for resilience. -> 7 instances per availability zone set for resilience (hard limit) -> Provides infrastructure isolation -> Check SS. -> Separate Blast Radius.
- Partition: groups of instances spread apart. -> In an AZ, you create partitions based on racks and power supply -> The idea is to group instances together based on rack and power supply -> In one group which is further encapsulated within an AZ, you can place multiple instances -> One Group is synonymous to one partition. -> Check SS. -> There is no limit like 7 in a partition BUT there is a limit of 7 partitions per availability zone. -> Designed for huge scale parallel processing systems -> you choose which instance should be placed in which partition, so you directly influence the resiliency of infrastructure. -> ONLY 7 PARTITIONS ARE ALLOWED PER AVAILABILITY ZONE.
- Some applications like HDFS, HBase and Cassandra are topology aware -> They can make the best use of partition placement group. -> Read more about it.
-   Cluster Placement Groups (PERFORMANCE)
    Spread Placement Groups (Resilience)
    Partition Placement Groups (Topology Awareness)
- https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html


# Enhanced Networking & EBS Optimized (6:57)
- SR-IOV -> Network Interface Card which is a hardware device is aware of the virtualization.
- EBS optimization involves providing dedicated networking for communication between EC2 and EBS. Most new EC2s have this enabled by default and it is free of cost.


# Section Quiz - Advanced EC2


# CloudFormation Physical & Logical Resources (7:30)
- Logical resource definition. You define the what you want to create and cloudformation handles the rest.
- You can use either YAML or JSON to write template definition.
- CloudFormation is also used to keep track of changes in a system like git.
- A non portable cloud formation template is considered a bad practice.

# Simple Non Portable Template - PART1 (10:28) -> Demo
- Cloud Formation reference: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html


# Simple Non Portable Template - PART2 (11:28) -> Demo
- AMI ID are unique in different regions, that's why for facilitating portability they shouldn't be hard-coded on the template.


# CloudFormation Template and Pseudo Parameters (6:53)
- Can accept input from AWS Console, Command Line Interface or API. -> These input will be accepted while the stack will be created or updated. Stack refers to the cloudformation stack.
- You can have defaults, allowed values and all those configurations. Check screenshot.
- Pseudo parameters are populated by AWS. Since some values change like account ID, regional stuff, so pseudo parameters gets populated by AWS.
- Best practice to aim for is to reduce explicit parameter provision as much as possible, instead use default and aim for pseudo parameters (AWS populates).
- Pseudo Parameters: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/pseudo-parameter-reference.html
- Check screenshots.


# CloudFormation Intrinsic Functions (14:28)
- Intrinsic function is used to control stack behavior during the runtime -> They are use to write code logic. <- Example include: if-else, join, split, Ref, Base64, etc.
- Checkout all the examples in the screenshot of this section. There are issues in those examples, the instructor is going to show us how to resolve those in the coming lessons.
- Intrinsic function reference: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference.html


# CloudFormation Mappings (4:30)
- Mapping to set things differently based on environment like testing, production, staging or development (let's say more instances in production) or different naming convention based on value supplied. 
- FindInMap intrinsic function is used with maps.
- Checkout screenshots.


# CloudFormation Outputs (3:37)
- Outputs can be used to get cross-stack-reference -> When resources are interdependent.
- The optional Outputs section declares output values that you can import into other stacks (to create cross-stack references), return in response (to describe stack calls), or view on the AWS CloudFormation console. For example, you can output the S3 bucket name for a stack to make the bucket easier to find.


# Template v2 - Portable (13:34) -> Demo
- Checkout screenshots for this section.
- https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-public-parameters.html  --> How to get AMI ID based on region you provision an ec2 using AWS? This reference.
