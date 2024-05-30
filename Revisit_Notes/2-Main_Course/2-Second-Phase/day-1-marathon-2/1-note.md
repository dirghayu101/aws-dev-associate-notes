# Notes from <Video name word to word>:
- pointers
- Summary of the video. What did you learn?

# Noted from <video name>
- pointers
- Summary of the video. What did you learn?

# Service Control Policies (13)
- Can be used for access control while having AWS Organization Structure.
- Service Control Policy can be attached to an entire organization (root container), organizational Unit (container encapsulation inside AWS organization), or member accounts.
- Service Control Policies are JSON documents.
- Service Control Policy inherit down the organization tree. If let's say you apply a policy on root container, organizational unit container will inherit it by default.
- Management Account is never affected by service control policies.
- Service Control Policies are account permissions boundaries.
- Service Control Policies can limit account access, thus limiting even the account root user's access.
- Service control policy don't grant any permission.
- Service Control Policy can have Allow List or Deny List to control access. Industry convention is to use deny list architecture with SCP. Checkout screenshot.
- Another architecture you can use with SCP is allow list architecture. Remove the default full aws access SCP policy, then create an explicit allow policy for different microservices.
- If you remove the default SCP policy, then it will be implicit deny for all the services.
- It prioritize in the same way: explicit deny overrule anything.
- SCP implicitly allow all the services by default. 


# Using Service Control Policies (17) -> Demo
- Checkout deny-scp.json -> This is deny list architecture of SCP.

# CloudWatch Logs (8)
- Public service: Can be used from AWS, on-prem or other cloud providers.
- Store, monitor and access logging data.
- CloudWatch can generate metrics based on logs. You can use metric filters. Like you can generate alarms let's say for a condition when there is a failed SSH connection trial in your EC2 instance.
- Checkout cloudwatch architecture in screenshots.
- Log Events are individual logs, with timestamp and message.
- Log Streams in cloud watch architecture is a sequence of log from the same source. Example of a source can be var log message file of linux. Any ec2 instance generate a lot of logs, so this is relatively thin segregation.
- Log Group is the grouping of log stream. Like var log messages from all your ec2 instances.
- Log Group also stores configuration settings. Like Retentions and Permissions. Even metrics are defined in log groups. Metrics like associated alarms for certain logs.

# CloudTrail (12)
- logs API action that affect an AWS account. Deletion of SG, creation of ec2, almost everything that happens inside an AWS account is logged in this.
- These logs of API calls/activities are stored as CloudTrail Event.
- By default stores last 90 days of history.
- Logs any activity by user/events/service.
- Cloud trail is enabled by default. - Doesn't charge you for 90 days of history.
- To customize the service, you create trails.
- CloudTrail events are of types: Management, Data and Insight events.
- Management are management operations. These events are also known as Control Plan Operations. Like creating, terminating VPCs or EC2s.
- Data events are related to data like objects accessed or uploaded in S3. By default cloudwatch only logs management events as data events' logging will produce a lot of volume.
- Cloud trail is a regional service. You create trails for a single region or multiple regions.
- A single region trail logs events for that region.
- CloudTrail trail is the unit of configuration in cloudtrail.
- When services are logging events, they do so to the region they are deployed in. Global services like IAM, STS and CloudFormation, by default configured to send their logs to us-east-1 (virginia) region.
- In CloudTrail you can setup trails to store logs in a S3 bucket. These logs are stored in JSON (which doesn't consume much space).
- You can also setup a trail to send all the logs to CloudWatch Logs where you can setup metrics and all of that.
- Cloud trail is enabled by default but only store 90 days of history.
- Trails can be used to configure s3 or Cloud Watch logs.
- Only management event logs are taken by default.
- CloudTrail doesn't do realtime logging. There is a delay of up to 15 minutes.

# Implementing an organization trail (19) -> Demo


# Quiz (15)
