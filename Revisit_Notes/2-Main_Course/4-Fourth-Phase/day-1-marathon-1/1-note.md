# Notes from <Video name word to word>:
- pointers
- Summary of the video. What did you learn?

# Noted from <video name>
- pointers
- Summary of the video. What did you learn?

# 131  Instance Status Checks & Auto Recovery (7:42)"
- System Status and Instance Status are the 2 checks that AWS perform. Check screenshot. System status is more about hardware but also covers some aspects of software.
- Instance status is more about networking, kernel and all of that.
- To create a process that will auto-recover the system in case of failure you can create a status check alarm.
- The instance recover option comes with several restriction, these restriction depends on factors like whether you have used EBS volumes or not, whether the host is available or AZ is still up and running, and the instance type (m, r, and all those types). 
- We have alternatives available like ASG.

# 132   Shutdown, Terminate & Termination Protection (5:40)"
- In production environment, usually only administrators have the permission to "disableApiTermination" attribute of instance, this adds another layer of security for important EC2s.
- disableApiTermination is an important API which is asked in exams. <- Asked in exam.
- Change Shutdown Behavior is another attribute that you can enable, you can enable termination of instance if you shutdown it from within the instance.

# 133  Horizontal & Vertical Scaling (11:23)"
- Vertical Scaling is increasing the processing.
- Each resizing requires a reboot of instance. This reboot means disruption.
- Vertical scaling comes with an inherent threshold, which is the possible increase of capacity available.
- Vertical Scaling works even on monolith. Application modification is not required in case of vertical scaling.
- Horizontal Scaling is increasing the number of instances.
- Whenever you think about horizontal scaling, think about sessions. This is the most important consideration here.
- Because of session, horizontal scaling requires application support (redux which stores session or something similar), or off-host sessions.
- No disruption occurs when you are scaling instances horizontally.
- No limits to scaling. 
- Less expensive as there is no large instance premium.
- Horizontal scaling can give you more granular control, based on workload you can choose to add a 2GB instance or 64GB.

# 134  Instance Metadata  (15:46)" -> Demo
- http://169.254.169.254/latest/meta-data/  <- Very important for exam. <- Instance metadata is stored here and can be accessed locally.
- 169.254.169.254 is an IP address from the reserved IPv4 Link Local Address space 169.254.0.0/16 (169.254.0.0 through 169.254.255.255). Similar to the private address ranges in RFC-1918 (10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16) in the sense that this block also can't be used on the Internet, Link Local is further restricted to being unreachable via any router¹ -- by design, they only exist on the directly-connected network. 
- AWS needed to create a service endpoint accessible from any system and the selection of an address in this block allows it to avoid conflict with the commonly used IP address space. Clever choice.Presumably this specific address within the block was chosen for its aesthetic appeal or being easy to remember.
-  wget http://s3.amazonaws.com/ec2metadata/ec2-metadata  < - This download the metadata tool which you can easily use to get all the meta-data related to your ec2 instance -> Check screenshot for example.
- Checkout shell script associated and screenshots.

# 135 Section Quiz - EC2 Basics"


# 136 CloudWatch Architecture - PART1 (9:44)"
- Cloud Watch is metric based.
- It's a public service which means, in addition to accessibility from within your AWS account, you can also access it from your on-prem environment. (Checkout https://github.com/SummitRoute/aws_exposable_resources)
- The services which want to use cloud watch should have public space endpoints (IGW for internet connectivity)
- To understand the architecture of a public service checkout the cloudwatch architecture screenshot.   
- Terminologies in cloudwatch include: Namespace (Containers for different microservices within cloudwatch like lambda, ec2, etc), Data-point (attributes include timestamp, value, unit of measure (this is optional, like %)), metric (time ordered set of different data points which can include CPU utilization, network , disk write, etc) and dimensions.
- Think of dimension as something which is used to facilitate SQL queries on your data to filter out the relevant data that you care about / are interested in. Read again about metrics in the attached article. 

# 137 CloudWatch Architecture - PART2 (9:19)"
- Checkout the cloudwatch data architecture screenshot.
- Resolution: Standard (60s) or High (1s)
- Resolution of the metrics you set can directly impact the alarm. <- This is a factor that you should consider for setting up alarms.
- You already know that alarms can have certain actions associated with them. 

# 138 CloudWatch Logs Architecture (13:44)"
- Any logging question's answer in exam should be defaulted to cloudwatch unless there are other variables specified.
- Log Stream is a stream of data coming from one source, let's say one ec2 instance, then there will be an ec2 microservice namespace (Log Group in this context), encapsulating all the log streams.
- One strong feature of logging service is the metric filter. You can use this to extract certain metrics (for example number of failed SSH attempts to an instance), based on these metrics like any other you can then define actions like stopping the instance or maybe sending a notification for further investigation.
- Subscriptions: CloudWatch can use subscription filter to redirect certain data (you provide filter to select it) to services for whatever reasons. Can be analytics or any functionality. Services like Kinesis Data Firehose, Lambda function, elasticsearch, etc. Checkout SS.
- Aggregation: Instead of just gathering data from your own account's microservice, you can collect data from multiple accounts and process it at one place. Processing can be anything, it's not specifically used for processing.
- You can export cloudwatch logs to S3 using CreateExportTask, but that doesn't happen realtime (asynchronously) and can take up to 12 hours.
- Kinesis Firehose is popularly used with cloudwatch logs.
- Permissions and Retentions are defined on a Log Group in CloudWatch. <- I chose incorrect option.


# 139 AWS X-Ray (6:20)
- Tracing Header, Segments, Subsegments, Service Graph and Service Map are the component. Check SS for formal definition.
- Refresher: Segment is in transport layer, packets in network layer and frames in data link layer. Raw bits in physical layer.
- Checkout screenshot for this section. 


# 140  Lambda & AWS X-ray (16:28)"
- Read through this: https://github.com/acantril/learn-cantrill-io-labs/tree/master/00-aws-simple-demos/aws-lambda-xray 


# 141  VPC Flow logs (9:56)"
- Telemetry: Telemetry is the in situ collection of measurements or other data at remote points and their automatic transmission to receiving equipment for monitoring.
- VPC flow logs capture packet meta data, not packet content. You need packet sniffer like wireshark for the later functionality.
- ENI
- Flow logs are not realtime. Cannot provide realtime telemetry.
- You can send flow logs currently to S3 or CloudWatch logs. Usually you send data to S3 when you want to integrate it with some third part monitoring solution.
- Athena can be used to query logs stored in S3 and you will be only charged for the amount of data read.
- Checkout the screenshot for VPC flow log structure. Protocol codes used in flow logs: TCP -> 6, ICMP -> 1 and UDP -> 17.
- So there might be a scenario when the inbound flow log got permitted and an outbound flow log got rejected <- This happens when network ACL gets configured one way as it is stateless. In case of SG, since they are stateful, you won't see this issue coming up.


# 142 Section Quiz - Monitoring and Logging"
- I initially scored 3 out of 10.


# 143  Introduction to Containers (17:13)"
- Checkout the related screenshot for this section, this is pretty straightforward.
- Difference between Docker Image and Docker Container -> Docker Container has an extra Read/Write Layer. Docker Image is immutable.
- Characteristics of Containers: Dockerfiles are used to build images, portable, atomic. lightweight and consistent,  
- File system's layers are shared in containers.



# 144   Creating 'container of cats' Docker Image (18:15)" -> Demo
- Checkout the screenshots for walkthrough.
- Checkout yaml, docker and shell scripts starting with 144.

# 145  ECS - Concepts (10:25)"


# 146  ECS - Cluster Mode (13:09)"


# 147  Deploying 'container of cats' using Fargate (13:13)"


# 148  Elastic Container Registry (ECR) (4:14)"


# 149  Kubernetes 101 (11:27)"


# 150  Elastic Kubernetes Service (EKS) 101 (6:14)"

